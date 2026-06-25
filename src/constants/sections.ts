export const SECTION_TYPES = [
  'personalInfo',
  'workExperience',
  'education',
  'skills',
  'certifications',
  'projects',
  'languages',
  'achievements',
  'interests',
  'references',
  'custom',
] as const;

export type SectionType = (typeof SECTION_TYPES)[number];
