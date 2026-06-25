import { useUndoStore } from '../store/undoStore';

export function useUndo() {
  const { past, future, push, undo, redo } = useUndoStore();
  return { past, future, push, undo, redo };
}
