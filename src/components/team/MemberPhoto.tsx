import React from 'react';
import { GraduationCap } from 'lucide-react';

interface MemberPhotoProps {
  image?: string;
  name: string;
  role?: string;
  imgClassName?: string;
}

export const MemberPhoto: React.FC<MemberPhotoProps> = ({ image, name, role, imgClassName = '' }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={role ? `${name} - ${role}` : name}
        className={imgClassName}
        loading="lazy"
      />
    );
  }

  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-ink text-yellow">
      <GraduationCap className="w-7 h-7" />
      <span className="font-display text-3xl font-black text-cream tracking-tight">{initials}</span>
      <span className="font-mono text-[9px] text-cream/60 uppercase tracking-widest">{(role || 'MENTOR').toUpperCase()}</span>
    </div>
  );
};

export default MemberPhoto;
