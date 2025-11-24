#!/bin/bash

# Quick deployment script for xAI Talent Search
# Usage: ./deploy.sh [docker|railway|vercel]

set -e

DEPLOY_TYPE=${1:-docker}

case $DEPLOY_TYPE in
  docker)
    echo "🐳 Deploying with Docker Compose..."
    docker-compose up -d --build
    echo "✅ Deployment complete!"
    echo "Frontend: http://localhost:3000"
    echo "Backend: http://localhost:8000"
    ;;
  railway)
    echo "🚂 Deploying backend to Railway..."
    cd backend
    railway up
    echo "✅ Backend deployed to Railway"
    echo "Don't forget to:"
    echo "1. Set OPENAI_API_KEY in Railway dashboard"
    echo "2. Update NEXT_PUBLIC_API_URL in Vercel"
    ;;
  vercel)
    echo "▲ Deploying frontend to Vercel..."
    cd frontend
    vercel --prod
    echo "✅ Frontend deployed to Vercel"
    ;;
  *)
    echo "Usage: ./deploy.sh [docker|railway|vercel]"
    exit 1
    ;;
esac

