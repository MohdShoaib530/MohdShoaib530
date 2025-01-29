export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  const width = window.innerWidth;
  return width <= 1024;
};

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

