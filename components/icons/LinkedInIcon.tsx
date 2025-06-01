'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

const LinkedInIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const src = isDarkMode ? '/icons/linkedin-dark.svg' : '/icons/linkedin-light.svg';

  return (
    <img
      src={src}
      alt="LinkedIn Icon"
      {...props}
    />
  );
};

export default LinkedInIcon; 