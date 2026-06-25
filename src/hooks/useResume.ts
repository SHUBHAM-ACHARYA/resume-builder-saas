import { useResumeStore } from '../store/resumeStore';

export function useResume() {
  const { resume, setResume } = useResumeStore();
  return { resume, setResume };
}
