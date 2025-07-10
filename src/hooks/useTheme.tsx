'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeProviderContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: 'light' | 'dark';
  canPersist: boolean;
}

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  functionalConsent?: boolean;
}

export function ThemeProvider({ 
  children, 
  defaultTheme = 'system',
  storageKey = 'beaible-theme',
  functionalConsent = false
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');

  // Load theme from localStorage only if functional consent is given
  useEffect(() => {
    if (functionalConsent) {
      try {
        const storedTheme = localStorage.getItem(storageKey) as Theme;
        if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
          setTheme(storedTheme);
        }
      } catch (error) {
        console.warn('Error reading theme from localStorage:', error);
      }
    }
  }, [storageKey, functionalConsent]);

  // Clear stored theme if consent is withdrawn
  useEffect(() => {
    if (!functionalConsent) {
      try {
        localStorage.removeItem(storageKey);
        setTheme(defaultTheme); // Reset to default
      } catch (error) {
        console.warn('Error removing theme from localStorage:', error);
      }
    }
  }, [functionalConsent, storageKey, defaultTheme]);

  useEffect(() => {
    const updateEffectiveTheme = () => {
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setEffectiveTheme(systemTheme);
      } else {
        setEffectiveTheme(theme);
      }
    };

    updateEffectiveTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateEffectiveTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.removeAttribute('data-theme');
    
    if (effectiveTheme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    }
  }, [effectiveTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    
    // Only persist to localStorage if functional consent is given
    if (functionalConsent) {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (error) {
        console.warn('Error saving theme to localStorage:', error);
      }
    }
  };

  const value: ThemeProviderContextType = {
    theme,
    setTheme: handleSetTheme,
    effectiveTheme,
    canPersist: functionalConsent,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

