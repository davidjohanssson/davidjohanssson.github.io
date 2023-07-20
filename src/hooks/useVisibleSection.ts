import { useCallback, useEffect, useState } from 'react';
import { getVisibility } from '../functions/getVisibility';

export const useVisibleSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>();

  const handleScroll = useCallback(() => {
    let maxVisibility = 0;
    let mostVisibleSection = sectionIds[0];

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element !== null) {
        const currentVisibility = getVisibility(element);
        if (currentVisibility > maxVisibility) {
          maxVisibility = currentVisibility;
          mostVisibleSection = id;
        }
      }
    });

    setActiveSection(mostVisibleSection);
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return activeSection;
};
