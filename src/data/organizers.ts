export interface CouncilMember {
  id: string;
  name: string;
  magicalTitle: string;
  academicTitle: string;
  department: string;
  avatar: string;
  bio: string;
  elementSigil: string;
  socials: {
    linkedin?: string;
    github?: string;
    mail?: string;
  };
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  imageSlug: string;
}

export const FACULTY_COUNCIL: FacultyMember[] = [
  {
    id: 'faculty-top',
    name: 'Dr. Shiva Prakash C',
    designation: 'Head, Department of AIML',
    imageSlug: 'Shiva-Prakash-C',
  },
  {
    id: 'faculty-left',
    name: 'Dr. P. Rupa Ezhil Arasi',
    designation: 'Assistant Professor',
    imageSlug: 'P-Rupa-Ezhil-Arasi',
  },
  {
    id: 'faculty-right',
    name: 'Nancy Vaish',
    designation: 'Assistant Professor',
    imageSlug: 'Nancy-Vaish',
  },
];

export interface StudentCoordinator {
  id: string;
  name: string;
  yearDepartment: string;
  initials: string;
  isMain?: boolean;
  avatar?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    mail?: string;
  };
}

export const STUDENT_COORDINATORS: StudentCoordinator[] = [
  // ==========================================
  // TOP ROW: 2 MAIN STUDENT COORDINATORS
  // ==========================================
  {
    id: 'coord-1',
    name: 'SAKTHI SYLESH P K',
    yearDepartment: 'AIML - Final Year',
    initials: 'SS',
    isMain: true,
  },
  {
    id: 'coord-2',
    name: 'PRASANNA RAJ R',
    yearDepartment: 'AIML - Final Year',
    initials: 'PR',
    isMain: true,
  },
  // ==========================================
  // SECOND ROW: 5 MEMBERS
  // ==========================================
  {
    id: 'coord-3',
    name: 'YUKTHA PRASHANTH KUMAR',
    yearDepartment: 'AIML - Final Year',
    initials: 'YP',
  },
  {
    id: 'coord-4',
    name: 'SANTHOSI SENTHIL',
    yearDepartment: 'AIML - Final Year',
    initials: 'SS',
  },
  {
    id: 'coord-5',
    name: 'ANUSH',
    yearDepartment: 'AIML - Final Year',
    initials: 'AN',
  },
  {
    id: 'coord-6',
    name: 'MANAS SINGH',
    yearDepartment: 'AIML - 3rd Year',
    initials: 'MS',
  },
  {
    id: 'coord-7',
    name: 'UTSAW CHANDRA',
    yearDepartment: 'AIML - 3rd Year',
    initials: 'UC',
  },
  // ==========================================
  // THIRD ROW: 5 MEMBERS
  // ==========================================
  {
    id: 'coord-8',
    name: 'PROMOD',
    yearDepartment: 'AIML - 3rd Year',
    initials: 'PR',
  },
  {
    id: 'coord-9',
    name: 'ANUSHMAN SHARMA',
    yearDepartment: 'AIML - 3rd Year',
    initials: 'AS',
  },
  {
    id: 'coord-10',
    name: 'ANJANAA BLACHANDER',
    yearDepartment: 'AIML - 2nd Year',
    initials: 'AB',
  },
  {
    id: 'coord-11',
    name: 'SAHANA KEMBURU',
    yearDepartment: 'AIML - 2nd Year',
    initials: 'SK',
  },
  {
    id: 'coord-12',
    name: 'NIKHIL REDDY N V',
    yearDepartment: 'AIML - 2nd Year',
    initials: 'NR',
  },
];

// Alias for any existing consumers
export const QUEST_KEEPERS = STUDENT_COORDINATORS;

