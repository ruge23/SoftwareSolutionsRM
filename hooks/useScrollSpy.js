// hooks/useScrollSpy.js
'use client';

import { useState, useEffect } from 'react';

export const useScrollSpy = (ids, options) => {
  const [activeId, setActiveId] = useState('');
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.id === 'home') {
          setIsHeroVisible(entry.isIntersecting);
        }
      });
      
      // Find the section that's most visible
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by intersection ratio to find the most visible section
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveId(visibleEntries[0].target.id);
      }
    }, options);

    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, [ids, options]);

  return { activeId, isHeroVisible };
};