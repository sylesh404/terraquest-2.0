export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  isImportant?: boolean;
}

export interface TimelineDay {
  dayTitle: string;
  date: string;
  events: TimelineEvent[];
}

export const TIMELINE_DAYS: TimelineDay[] = [
  {
    dayTitle: 'DAY 1 — THE QUEST BEGINS',
    date: 'OCTOBER 7, 2026',
    events: [
      { id: 'd1-1', time: '10:00 AM', title: '🪪 Registration & Check-in' },
      { id: 'd1-2', time: '11:00 AM', title: '🏰 Inauguration Ceremony' },
      { id: 'd1-3', time: '11:30 AM', title: '🪄 House & Problem Statement Briefing' },
      { id: 'd1-4', time: '12:00 PM', title: '⚡ HACKATHON BEGINS', isImportant: true },
      { id: 'd1-5', time: '01:00 PM', title: '🍛 Lunch' },
      { id: 'd1-6', time: '03:00 PM', title: '☕ Refreshment' },
      { id: 'd1-7', time: '04:00 PM', title: '⚖️ Jury Member Round — 1st Judgement' },
      { id: 'd1-8', time: '06:30 PM', title: '☕ Refreshment' },
      { id: 'd1-9', time: '08:00 PM', title: '⚖️ Jury Member Round — 2nd Judgement' },
      { id: 'd1-10', time: '09:00 PM', title: '🍽️ Dinner' },
      { id: 'd1-11', time: '12:00 AM', title: '🌙 Midnight Refreshment' },
    ],
  },
  {
    dayTitle: 'DAY 2 — THE QUEST CONCLUDES',
    date: 'OCTOBER 8, 2026',
    events: [
      { id: 'd2-1', time: '07:00 AM', title: '🍳 Breakfast' },
      { id: 'd2-2', time: '08:00 AM', title: '☕ Refreshment' },
      { id: 'd2-3', time: '09:00 AM', title: '⚖️ Jury Member Round — 3rd Judgement' },
      { id: 'd2-4', time: '11:30 AM', title: '📜 Final Submission / Wrap-up' },
      { id: 'd2-5', time: '12:00 PM', title: '🏆 HACKATHON ENDS', isImportant: true },
    ],
  },
];
