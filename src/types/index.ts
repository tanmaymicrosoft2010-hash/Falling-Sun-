export interface TrackItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  tools: string[];
  colorAccent: string;
  subThemes: string[];
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  stage: 'Registration' | 'Opening' | 'Build' | 'Mentoring' | 'Break' | 'Submission' | 'Judging' | 'Results';
  status: 'TBA' | 'Confirmed' | 'Coming Soon';
}

export interface ScheduleDay {
  dayNumber: string;
  title: string;
  duration: string;
  dateLabel: string;
  events: ScheduleEvent[];
}

export interface PrizeItem {
  id: string;
  rank: string;
  title: string;
  category: string;
  description: string;
  status: 'TBA' | 'Coming Soon' | 'Confirmed';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  socials?: {
    github?: string;
    linkedin?: string;
  };
  isPlaceholder?: boolean;
  section?: 'backbone' | 'team';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface EventConfig {
  name: string;
  tagline: string;
  format: string;
  totalHours: string;
  edition: string;
  statusText: string;
  coordinates: string;
  whatsappUrl: string;
  instagramUrl?: string;
  registrationOpensAt: string;
  registrationUrl?: string;
  tracks: TrackItem[];
  schedule: ScheduleDay[];
  prizes: PrizeItem[];
  team: TeamMember[];
  faqs: FaqItem[];
}

