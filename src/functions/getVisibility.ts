export const getVisibility = (element: HTMLElement) => {
  const viewportHeight = window.innerHeight;
  const rect = element.getBoundingClientRect();
  const visibleArea = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
  const elementArea = rect.height;
  return (visibleArea / elementArea) * 100; // percent visible
};
