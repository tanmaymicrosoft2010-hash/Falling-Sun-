import React from 'react';
import { Marquee } from '../Marquee';

interface MarqueeBannerProps {
  items?: string[];
  className?: string;
  speed?: 'normal' | 'fast' | 'slow';
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items = [
    'HACKATHON 2026',
    'GAME DEVELOPMENT',
    'WEB DEVELOPMENT',
    'ROBOTICS',
    'MINI-TRACKS',
    '12H + 12H FORMAT',
    '2 DAYS',
    'BUILD SOMETHING WORTH REMEMBERING',
    'ZERO ENTRANCE FEE',
  ],
  className = '',
}) => {
  return <Marquee items={items} className={className} />;
};

export default MarqueeBanner;
