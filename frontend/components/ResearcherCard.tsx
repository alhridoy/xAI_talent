import React from 'react';
import { Researcher } from '@/types/researcher';
import { Linkedin, Twitter, GraduationCap, Github, Globe, MapPin, Building2, BookOpen, FileText } from 'lucide-react';

interface ResearcherCardProps {
  researcher: Researcher;
}

const ResearcherCard: React.FC<ResearcherCardProps> = ({ researcher }) => {
  return (
    <div className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
              {researcher.name}
            </h3>
            {researcher.total_publications > 20 && (
              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                Highly Cited
              </span>
            )}
          </div>
          
          <p className="text-gray-500 text-sm mb-3 font-medium">
            {researcher.title}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
            <div className="flex items-center bg-gray-50 px-2 py-1 rounded text-gray-600">
              <Building2 className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
              <span className="font-medium">{researcher.company}</span>
            </div>
            
            {researcher.location && (
              <div className="flex items-center text-gray-500">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                <span>{researcher.location}</span>
              </div>
            )}
          </div>

          {researcher.about && (
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
              {researcher.about}
            </p>
          )}

          <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
            {researcher.total_publications > 0 && (
              <div className="flex items-center">
                <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                <span>{researcher.total_publications} pubs</span>
              </div>
            )}
            {researcher.total_patents > 0 && (
              <div className="flex items-center">
                <FileText className="w-3.5 h-3.5 mr-1.5" />
                <span>{researcher.total_patents} patents</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex sm:flex-col gap-2 items-center sm:items-end shrink-0">
          <div className="flex gap-2">
            {researcher.linkedin_url && (
              <a href={researcher.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {researcher.google_scholar && (
              <a href={researcher.google_scholar} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4285F4] transition-colors">
                <GraduationCap className="w-5 h-5" />
              </a>
            )}
            {researcher.twitter && (
              <a href={researcher.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {researcher.github && (
              <a href={researcher.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {researcher.personal_website && (
              <a href={researcher.personal_website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearcherCard;
