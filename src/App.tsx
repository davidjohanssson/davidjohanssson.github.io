import { Box, Tab, Tabs } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';

interface Section {
  name: string;
  ref: HTMLDivElement | null;
}

function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const sections = useRef<Section[]>([
    { name: 'Home', ref: null },
    { name: 'Projects', ref: null }
  ]);

  useEffect(() => {
    const options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observer = new IntersectionObserver((entries, _) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = sections.current.findIndex(section => section.name === entry.target.id);
          setSectionIndex(index);
          window.history.replaceState(null, '', `#${entry.target.id}`);
        }
      }
    }, options);

    for (const section of sections.current) {
      if (section.ref) {
        observer.observe(section.ref);
      }
    }
  }, []);

  const handleClick = (section: Section, index: number) => {
    setSectionIndex(index);
    section.ref?.scrollIntoView();
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center' }}>
      {sections.current.map((section, index) => {
        if (section.name === 'Home') {
          return <Home key={section.name} id={section.name} ref={(ref) => sections.current[index].ref = ref} />
        } else if (section.name === 'Projects') {
          return <Projects key={section.name} id={section.name} ref={(ref) => sections.current[index].ref = ref} />
        } else {
          return (<div>404 Not Found</div>);
        }
      })}
      <Box sx={{
        backgroundColor: 'white',
        position: 'fixed',
        width: 'calc(100% - 32px)',
        maxWidth: 'calc(256px + 128px)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        overflow: 'hidden',
        bottom: '0px',
      }}>
        <Tabs value={sectionIndex} sx={{ width: '100%' }} variant='fullWidth'>
          {sections.current.map((section, index) => (
            <Tab key={section.name} label={section.name} onClick={() => handleClick(section, index)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

export default App;
