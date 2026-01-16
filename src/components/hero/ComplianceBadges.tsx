import React from 'react';
import { ShieldCheck } from 'lucide-react';

const ComplianceBadges = () => {
  const complianceItems = [
    'WCAG 2.1 AA Compliant',
    'ADA Compliant Solutions',
    'Section 508 Compliance'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
      {complianceItems.map((item, index) => (
        <div 
          key={index}
          className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-atkinson relative overflow-hidden group hover:bg-white/15 transition-all duration-300"
        >
          <div className="flex items-center gap-3 w-full">
            <div className="p-2 rounded-full bg-primary/80 backdrop-blur-sm border border-white/30 group-hover:bg-primary transition-all duration-300 flex-shrink-0">
              <ShieldCheck size={18} className="text-white" aria-hidden="true" />
            </div>
            <span className="text-white text-sm font-medium leading-tight">{item}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComplianceBadges;
