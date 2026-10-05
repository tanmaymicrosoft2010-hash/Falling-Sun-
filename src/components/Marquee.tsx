import React from 'react';

interface MarqueeProps {
  items?: string[];
  className?: string;
}

const DEFAULT_ITEMS = [
  'HACKATHON 2026',
  'GAME DEVELOPMENT',
  'WEB DEVELOPMENT',
  'ROBOTICS',
  '12H + 12H FORMAT',
  '2 DAYS',
  'BUILD SOMETHING WORTH REMEMBERING',
  'ZERO ENTRANCE FEE',
];

/** Yellow strip, tilted -1deg, infinitely scrolling text. */
export const Marquee: React.FC<MarqueeProps> = ({
  items = DEFAULT_ITEMS,
  className = '',
}) => {
  const text = `${items.join(' ✦ ')} ✦ `;

  return (
    <div
      className={`w-[calc(100%+8vw)] -mx-[4vw] -rotate-1 select-none overflow-hidden whitespace-nowrap border-y-[3px] border-ink bg-yellow py-2 font-display font-black uppercase text-ink ${className}`}
    >
      <span className="inline-block animate-marquee text-[1.5rem] leading-normal">
        {text}
        {text}
      </span>
    </div>
  );
};

export default Marquee;
