import type { Resume } from '../types/resume';

export function createEmptyResume(): Resume {
  return {
    id: crypto.randomUUID(),
    personalInfo: { fullName: '', email: '', phone: '' },
    sections: [],
  };
}
