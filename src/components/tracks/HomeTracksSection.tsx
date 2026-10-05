import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';
import { MagneticButton } from '../common/MagneticButton';

export const HomeTracksSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-bg">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-ink font-bold"
          >
            THREE COMPETITION ARENAS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-cream tracking-tight break-word"
          >
            Pick Your Battlefield
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-cream text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Whether your craft is graphics pipelines, distributed web apps, or kinetic robotics,
            Falling Sun provides the infrastructure to build without limits.
          </motion.p>
        </div>

        {/* Track Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {eventConfig.tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden bg-cream border-2 border-ink shadow-card hover:shadow-[8px_8px_0_#1d1210] transition-all duration-300"
            >
              <div className="relative p-6 sm:p-8 space-y-4">
                {/* Track Number & Title */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-ink text-cream border-2 border-ink px-2 py-0.5 font-mono text-xs font-black">
                      {track.number}
                    </span>
                    <span className="text-ink font-bold">//</span>
                  </div>
                  <span
                    className="text-xs font-black uppercase px-2 py-0.5 border-2 border-ink"
                    style={{ backgroundColor: track.colorAccent, color: '#1d1210' }}
                  >
                    {track.tools[0]}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-black text-ink uppercase tracking-tight break-word">
                  {track.title.replace(' DEVELOPMENT', ' DEV').replace('WEB', 'WEB')}
                </h3>

                <p className="text-ink-muted text-sm font-sans font-medium leading-relaxed">
                  {track.tagline}
                </p>

                {/* Focus Areas */}
                <div className="space-y-2 pt-2">
                  {track.focusAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 text-xs text-ink font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-reddark shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>

                {/* Sub-theme pills */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {track.subThemes.map((theme) => (
                    <span
                      key={theme}
                      className="px-2.5 py-1 bg-yellow/40 border-2 border-ink text-ink font-mono text-[10px] font-bold uppercase tracking-wide"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                {/* Link to full page */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: 0, x: 0 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  <Link
                    to="/rays"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-ink text-cream border-2 border-ink font-mono text-[10px] font-black hover:bg-yellow hover:text-ink transition-all"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center pt-4">
          <MagneticButton
            to="/rays"
            text="EXPLORE ALL RAYS"
            icon={<ArrowUpRight className="w-4 h-4" />}
            className="px-8 py-3 font-mono text-xs font-bold tracking-wider"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeTracksSection;
