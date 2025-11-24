export type LayoutType =
  | "original"
  | "sphere"
  | "galaxy"
  | "wave"
  | "helix"
  | "torus";

export interface Point3D {
  x: number;
  y: number;
  z: number;
}

export interface TransformConfig {
  clusterId: number;
  clusterIndex: number;
  totalClusters: number;
  pointIndex: number;
  totalPoints: number;
}

/**
 * Original layout - no transformation, uses UMAP coordinates as-is
 */
export function originalTransform(point: Point3D): Point3D {
  return { ...point };
}

/**
 * Sphere layout - maps clusters to a spherical surface
 */
export function sphereTransform(
  point: Point3D,
  config: TransformConfig,
  bounds: { minX: number; maxX: number; minY: number; maxY: number }
): Point3D {
  const u = (point.x - bounds.minX) / (bounds.maxX - bounds.minX || 1);
  const v = (point.y - bounds.minY) / (bounds.maxY - bounds.minY || 1);

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const clusterTheta = config.clusterIndex * goldenAngle;
  const clusterPhi = Math.acos(
    1 - (2 * (config.clusterIndex + 0.5)) / config.totalClusters
  );

  const sectorSize = Math.PI / Math.sqrt(config.totalClusters);
  const theta = clusterTheta + (u - 0.5) * sectorSize;
  const phi = clusterPhi + (v - 0.5) * sectorSize * 0.5;

  const radius = 100 + (point.z || 0) * 0.5;

  return {
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.sin(phi) * Math.sin(theta),
    z: radius * Math.cos(phi),
  };
}

/**
 * Galaxy spiral layout
 */
export function galaxyTransform(
  point: Point3D,
  config: TransformConfig,
  bounds: { minX: number; maxX: number; minY: number; maxY: number }
): Point3D {
  const normalizedX = (point.x - bounds.minX) / (bounds.maxX - bounds.minX || 1);
  const normalizedY = (point.y - bounds.minY) / (bounds.maxY - bounds.minY || 1);

  const armCount = Math.min(8, Math.max(3, config.totalClusters));
  const armIndex = config.clusterIndex % armCount;
  const baseAngle = (armIndex / armCount) * 2 * Math.PI;

  const distanceFromCenter = 20 + normalizedX * 80 + config.pointIndex * 0.02;
  const spiralTightness = 0.15;
  const spiralAngle = baseAngle + distanceFromCenter * spiralTightness;

  const offsetAngle = (normalizedY - 0.5) * 0.3;
  const offsetRadius = (normalizedY - 0.5) * 10;

  const finalAngle = spiralAngle + offsetAngle;
  const finalRadius = distanceFromCenter + offsetRadius;
  const height = (point.z || 0) * 0.2 + (normalizedY - 0.5) * 5;

  return {
    x: finalRadius * Math.cos(finalAngle),
    y: finalRadius * Math.sin(finalAngle),
    z: height,
  };
}

/**
 * Wave/Terrain layout
 */
export function waveTransform(
  point: Point3D,
  config: TransformConfig
): Point3D {
  const x = point.x || 0;
  const y = point.y || 0;
  const frequency = 0.03;
  const amplitude = 25;

  const wave1 = Math.sin(x * frequency) * amplitude;
  const wave2 = Math.cos(y * frequency) * amplitude;
  const wave3 = Math.sin((x + y) * frequency * 0.7) * amplitude * 0.5;
  const wave4 = Math.cos((x - y) * frequency * 0.5) * amplitude * 0.3;

  const clusterOffset = (config.clusterIndex / config.totalClusters) * 40 - 20;
  const finalZ = wave1 + wave2 + wave3 + wave4 + clusterOffset;

  return { x, y, z: finalZ };
}

/**
 * Helix layout
 */
export function helixTransform(
  point: Point3D,
  config: TransformConfig,
  bounds: { minX: number; maxX: number; minY: number; maxY: number }
): Point3D {
  const normalizedX = (point.x - bounds.minX) / (bounds.maxX - bounds.minX || 1);
  const normalizedY = (point.y - bounds.minY) / (bounds.maxY - bounds.minY || 1);

  const clusterProgress = config.clusterIndex / config.totalClusters;
  const pointProgress = config.pointIndex / config.totalPoints;
  const totalProgress = clusterProgress + pointProgress / config.totalClusters;

  const turns = 4;
  const angle = totalProgress * turns * 2 * Math.PI;
  const height = totalProgress * 300 - 150;

  const radiusBase = 40;
  const radiusVariation = normalizedX * 15;
  const radius = radiusBase + radiusVariation;
  const wobble = Math.sin(angle * 3) * normalizedY * 5;

  return {
    x: (radius + wobble) * Math.cos(angle),
    y: (radius + wobble) * Math.sin(angle),
    z: height + (point.z || 0) * 0.1,
  };
}

/**
 * Torus layout
 */
export function torusTransform(
  point: Point3D,
  config: TransformConfig,
  bounds: { minX: number; maxX: number; minY: number; maxY: number }
): Point3D {
  const u = (point.x - bounds.minX) / (bounds.maxX - bounds.minX || 1);
  const v = (point.y - bounds.minY) / (bounds.maxY - bounds.minY || 1);

  const majorRadius = 60;
  const minorRadius = 25;
  const clusterAngleOffset = (config.clusterIndex / config.totalClusters) * 2 * Math.PI;
  const majorSectorSize = (2 * Math.PI) / Math.max(config.totalClusters, 1);
  const theta = clusterAngleOffset + (u - 0.5) * majorSectorSize;

  const phi = v * 2 * Math.PI;
  const radiusVariation = (point.z || 0) * 0.1;

  const x = (majorRadius + (minorRadius + radiusVariation) * Math.cos(phi)) * Math.cos(theta);
  const y = (majorRadius + (minorRadius + radiusVariation) * Math.cos(phi)) * Math.sin(theta);
  const z = (minorRadius + radiusVariation) * Math.sin(phi);

  return { x, y, z };
}

export function applyLayoutTransform(
  points: Point3D[],
  layoutType: LayoutType,
  config: Omit<TransformConfig, "pointIndex" | "totalPoints">
): Point3D[] {
  if (layoutType === "original") {
    return points.map(originalTransform);
  }

  const bounds = {
    minX: Math.min(...points.map((p) => p.x)),
    maxX: Math.max(...points.map((p) => p.x)),
    minY: Math.min(...points.map((p) => p.y)),
    maxY: Math.max(...points.map((p) => p.y)),
  };

  return points.map((point, index) => {
    const fullConfig: TransformConfig = {
      ...config,
      pointIndex: index,
      totalPoints: points.length,
    };

    switch (layoutType) {
      case "sphere":
        return sphereTransform(point, fullConfig, bounds);
      case "galaxy":
        return galaxyTransform(point, fullConfig, bounds);
      case "wave":
        return waveTransform(point, fullConfig);
      case "helix":
        return helixTransform(point, fullConfig, bounds);
      case "torus":
        return torusTransform(point, fullConfig, bounds);
      default:
        return point;
    }
  });
}

export function getCameraForLayout(layoutType: LayoutType): {
  eye: Point3D;
  center: Point3D;
  up: Point3D;
} {
  switch (layoutType) {
    case "sphere":
      return { eye: { x: 2, y: 2, z: 1.5 }, center: { x: 0, y: 0, z: 0 }, up: { x: 0, y: 0, z: 1 } };
    case "galaxy":
      return { eye: { x: 0.2, y: 0.2, z: 2.5 }, center: { x: 0, y: 0, z: 0 }, up: { x: 0, y: 1, z: 0 } };
    case "wave":
      return { eye: { x: 2, y: 1, z: 1 }, center: { x: 0, y: 0, z: 0 }, up: { x: 0, y: 0, z: 1 } };
    case "helix":
      return { eye: { x: 1.5, y: 1.5, z: 1 }, center: { x: 0, y: 0, z: 0 }, up: { x: 0, y: 0, z: 1 } };
    case "torus":
      return { eye: { x: 1.8, y: 1.8, z: 1.2 }, center: { x: 0, y: 0, z: 0 }, up: { x: 0, y: 0, z: 1 } };
    default:
      return { eye: { x: 1.25, y: 1.25, z: 1.25 }, center: { x: 0, y: 0, z: 0 }, up: { x: 0, y: 0, z: 1 } };
  }
}
