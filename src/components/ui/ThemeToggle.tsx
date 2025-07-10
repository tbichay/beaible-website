'use client';

import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun, Monitor, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, canPersist } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />;
      case 'dark':
        return <Moon className="h-5 w-5" />;
      case 'system':
        return <Monitor className="h-5 w-5" />;
      default:
        return <Sun className="h-5 w-5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system mode';
      case 'system':
        return 'Switch to light mode';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        onMouseEnter={() => !canPersist && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`relative p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200 ${
          !canPersist ? 'border border-yellow-300' : ''
        }`}
        aria-label={getLabel()}
        title={canPersist ? getLabel() : 'Theme wird nicht gespeichert - Funktionale Cookies erforderlich'}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {getIcon()}
            {!canPersist && (
              <Info className="absolute -top-1 -right-1 h-3 w-3 text-yellow-600" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>

      {/* Tooltip for non-persistent mode */}
      <AnimatePresence>
        {showTooltip && !canPersist && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-yellow-800 text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-yellow-300 z-[100]"
          >
            Theme wird nicht gespeichert
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-yellow-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}