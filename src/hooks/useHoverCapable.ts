'use client';

import { useSyncExternalStore } from 'react';

const query = '(hover: hover) and (pointer: fine)';

const subscribe = (onStoreChange: () => void) => {
  const mediaQuery = window.matchMedia(query);
  mediaQuery.addEventListener('change', onStoreChange);
  return () => mediaQuery.removeEventListener('change', onStoreChange);
};

const getSnapshot = () => window.matchMedia(query).matches;
const getServerSnapshot = () => false;

export function useHoverCapable() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
