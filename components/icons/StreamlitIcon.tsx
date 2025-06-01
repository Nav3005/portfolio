'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

const StreamlitIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkTheme();

    // Set up observer for theme changes (e.g., by the ThemeProvider)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Clean up observer
    return () => observer.disconnect();
  }, []);

  const src = isDarkMode ? '/icons/streamlit-dark.svg' : '/icons/streamlit-light.svg';

  return (
    <img
      src={src}
      alt="Streamlit Icon"
      {...props}
    />
  );
};

export default StreamlitIcon; 