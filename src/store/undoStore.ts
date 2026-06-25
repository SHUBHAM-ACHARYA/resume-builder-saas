import { create } from 'zustand';

interface UndoState<T = unknown> {
  past: T[];
  future: T[];
  push: (state: T) => void;
  undo: () => void;
  redo: () => void;
}

export const useUndoStore = create<UndoState>((set) => ({
  past: [],
  future: [],
  push: (state) => set((s) => ({ past: [...s.past, state], future: [] })),
  undo: () => set((s) => ({ past: s.past.slice(0, -1) })),
  redo: () => set((s) => ({ future: s.future.slice(1) })),
}));
