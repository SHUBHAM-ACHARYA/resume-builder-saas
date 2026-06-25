import { create } from 'zustand';
import type { Resume } from '../types/resume';

interface ResumeState {
  resume: Resume | null;
  setResume: (resume: Resume) => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  resume: null,
  setResume: (resume) => set({ resume }),
}));
