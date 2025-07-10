// Server-safe theme script
export function getThemeScript(storageKey: string = 'beaible-theme') {
  return `(function() {
    try {
      var theme = localStorage.getItem('${storageKey}') || 'system';
      var effectiveTheme = theme;
      
      if (theme === 'system') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      if (effectiveTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch (e) {}
  })();`;
}