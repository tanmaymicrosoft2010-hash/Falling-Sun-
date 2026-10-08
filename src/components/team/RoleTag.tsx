import React from 'react';
import { Crown, Sparkles, Shield, ShieldCheck, GraduationCap } from 'lucide-react';

interface RoleTagStyle {
  label: string;
  icon: React.ReactNode;
  className: string;
}

const getRoleTagStyle = (role: string): RoleTagStyle => {
  switch (role) {
    case 'Principal':
      return {
        label: 'PRINCIPAL',
        icon: <Crown className="w-2.5 h-2.5 text-current" />,
        className: 'bg-pink text-cream border-ink',
      };
    case 'Faculty Advisor':
      return {
        label: 'FACULTY ADVISOR',
        icon: <Shield className="w-2.5 h-2.5 text-current" />,
        className: 'bg-green text-cream border-ink',
      };
    case 'Advisor':
      return {
        label: 'ADVISOR',
        icon: <Shield className="w-2.5 h-2.5 text-current" />,
        className: 'bg-ink text-cream border-cream',
      };
    case 'Mentor':
      return {
        label: 'MENTOR',
        icon: <GraduationCap className="w-2.5 h-2.5 text-current" />,
        className: 'bg-yellow text-ink border-ink',
      };
    case 'Executive Director':
      return {
        label: 'EXEC. DIRECTOR',
        icon: <Crown className="w-2.5 h-2.5 text-current" />,
        className: 'bg-yellow text-ink border-ink',
      };
    case 'Director':
      return {
        label: 'DIRECTOR',
        icon: <Crown className="w-2.5 h-2.5 text-current" />,
        className: 'bg-yellow text-ink border-ink',
      };
    case 'Associate Director':
      return {
        label: 'ASSOC. DIRECTOR',
        icon: <Crown className="w-2.5 h-2.5 text-current" />,
        className: 'bg-ink text-cream border-cream',
      };
    case 'Backbone':
      return {
        label: 'BACKBONE',
        icon: <Crown className="w-2.5 h-2.5 text-current" />,
        className: 'bg-ink text-yellow border-cream',
      };
    case 'Lead Organizer':
      return {
        label: 'LEAD ORG',
        icon: <Sparkles className="w-2.5 h-2.5 text-current" />,
        className: 'bg-reddark text-cream border-ink',
      };
    case 'Organizer':
      return {
        label: 'ORGANIZER',
        icon: <Shield className="w-2.5 h-2.5 text-current" />,
        className: 'bg-cream text-ink border-ink',
      };
    case 'Event Incharge':
      return {
        label: 'EVENT INCHARGE',
        icon: <ShieldCheck className="w-2.5 h-2.5 text-current" />,
        className: 'bg-cream text-ink border-ink',
      };
    default:
      return {
        label: role.toUpperCase(),
        icon: <Shield className="w-2.5 h-2.5 text-current" />,
        className: 'bg-cream text-ink border-ink',
      };
  }
};

export const RoleTag: React.FC<{ role: string; className?: string }> = ({ role, className = '' }) => {
  const style = getRoleTagStyle(role);
  return (
    <div
      className={`absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-0.5 border-2 font-mono text-[9px] tracking-widest uppercase font-bold ${style.className} ${className}`}
    >
      {style.icon}
      <span>{style.label}</span>
    </div>
  );
};

export default RoleTag;
