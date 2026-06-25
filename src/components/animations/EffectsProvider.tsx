import { ReactNode } from 'react';

interface EffectsProviderProps {
  children: ReactNode;
}

function EffectsProvider({ children }: EffectsProviderProps) {
  return <>{children}</>;
}

export default EffectsProvider;
