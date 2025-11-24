import React from 'react';
import { Researcher } from '@/types/researcher';
import ResearcherCard from './ResearcherCard';

interface ResearcherListProps {
  researchers: Researcher[];
}

const ResearcherList: React.FC<ResearcherListProps> = ({ researchers }) => {
  return (
    <div className="space-y-4">
      {researchers.map((researcher, index) => (
        <ResearcherCard key={index} researcher={researcher} />
      ))}
    </div>
  );
};

export default ResearcherList;
