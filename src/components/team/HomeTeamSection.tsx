import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';
import { RoleTag } from './RoleTag';
import { MemberPhoto } from './MemberPhoto';

export const HomeTeamSection: React.FC = () => {
  const organizers = eventConfig.team.filter((m) => m.section !== 'backbone');
  const facultyMembers = eventConfig.team.filter((m) => m.section === 'backbone');

  return (
    <section className="relative py-24 px-6 md:px-12 bg-bg">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-ink font-bold"
            >
              THE PEOPLE BEHIND THE EVENT
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-cream tracking-tight break-word"
            >
              Team Falling Sun
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-cream text-cream hover:bg-cream hover:text-ink font-sans text-sm font-bold transition-all duration-300 group"
            >
              <span>Our Team</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* SECTION 1: ORGANIZERS (TOP) */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-reddark border-2 border-cream text-cream font-mono text-xs font-bold uppercase tracking-widest">
              ORGANIZERS
            </span>
            <div className="flex-1 h-px bg-cream/20 border-t-2 border-dashed"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden bg-cream border-2 border-ink shadow-card hover:shadow-[8px_8px_0_#1d1210] transition-all duration-300"
              >
                <div className="relative aspect-[220/280] w-full overflow-hidden bg-ink">
                  <MemberPhoto
                    image={member.image}
                    name={member.name}
                    role={member.role}
                    imgClassName="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <RoleTag role={member.role} />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: EXECUTIVE & MENTORS (BOTTOM) */}
        {facultyMembers.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green border-2 border-cream text-cream font-mono text-xs font-bold uppercase tracking-widest">
                EXECUTIVE & MENTORS
              </span>
              <div className="flex-1 h-px bg-cream/20 border-t-2 border-dashed"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
              {facultyMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden bg-cream border-2 border-ink shadow-card hover:shadow-[8px_8px_0_#1d1210] transition-all duration-300"
                >
                  <div className="relative aspect-[220/280] w-full overflow-hidden bg-ink">
                    <MemberPhoto
                      image={member.image}
                      name={member.name}
                      role={member.role}
                      imgClassName="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <RoleTag role={member.role} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
