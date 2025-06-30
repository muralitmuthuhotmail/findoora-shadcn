'use client';

import { useState, useEffect } from 'react';
import LoadingSpinner from './loading-spinner';

interface AuthLoaderProps {
  children: React.ReactNode;
}

export default function AuthLoader({ children }: AuthLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex w-full sm:max-w-md flex-col items-center justify-center gap-6 mt-5">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex w-full sm:max-w-md flex-col gap-6 mt-5 animate-fade-in transition-all duration-500 ease-in-out">
      {children}
    </div>
  );
}
