import { create } from 'zustand';

interface TemplateState {
  selectedTemplateId: string;
  setSelectedTemplateId: (id: string) => void;
}

export const useTemplateStore = create<TemplateState>((set) => ({
  selectedTemplateId: 'modern-professional',
  setSelectedTemplateId: (id) => set({ selectedTemplateId: id }),
}));
