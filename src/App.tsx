import { Box, Paper, Tab, Tabs, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Contact from './components/Contact';
import Explore from './components/Explore';
import { useVisibleSection } from './hooks/useVisibleSection';

interface Section {
  id: 'Contact' | 'Explore';
  ref: HTMLDivElement | null;
}

function App() {
  const theme = useTheme();
  const [sectionIndex, setSectionIndex] = useState(0);
  const sections = useRef<Section[]>([
    { id: 'Contact', ref: null },
    { id: 'Explore', ref: null },
  ]);
  const currentSectionId = useVisibleSection(sections.current.map(section => section.id));

  useEffect(() => {
    if (currentSectionId === undefined) return;
    const index = sections.current.findIndex(section => section.id === currentSectionId);
    setSectionIndex(index);
    window.history.replaceState(null, '', `#${currentSectionId}`);
  }, [currentSectionId]);

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    const section = sections.current.find(section => section.id === sectionId);

    if (section) {
      section.ref?.scrollIntoView();
    }

    const updateThemeColorObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          let background = window.getComputedStyle(entry.target).background;

          if (background.startsWith('rgb(255, 255, 255)')) {
            background = '#F5F5F5';
          } else {
            background = theme.palette.primary.light;
          }

          document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background);
        }
      }
    }, { root: null, rootMargin: '0px 0px -100% 0px', threshold: 0 });

    for (const section of sections.current) {
      if (section.ref) {
        updateThemeColorObserver.observe(section.ref);
      }
    }
  }, [theme.palette.primary.light]);

  const handleClick = (section: Section, index: number) => {
    setSectionIndex(index);

    if (section.ref) {
      section.ref.scrollIntoView();

      let background = window.getComputedStyle(section.ref).background;

      if (background.startsWith('rgb(255, 255, 255)')) {
        background = '#F5F5F5';
      } else {
        background = theme.palette.primary.light;
      }

      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center' }}>
      <Box sx={{
        width: '100%',
        marginBottom: '48px',
      }}>
        {sections.current.map((section, index) => {
          if (section.id === 'Contact') {
            return <Contact key={section.id} id={section.id} ref={(ref) => sections.current[index].ref = ref} />
          } else if (section.id === 'Explore') {
            return <Explore key={section.id} id={section.id} ref={(ref) => sections.current[index].ref = ref} />
          } else {
            return (<div>404 Not Found</div>);
          }
        })}
      </Box>
      <Paper elevation={6} sx={{
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        position: 'fixed',
        width: {
          xs: '100%',
          sm: 'calc(100% - 32px)',
        },
        maxWidth: {
          xs: 'unset',
          sm: 'calc(256px + 128px)',
        },
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopLeftRadius: {
          xs: '0px',
          sm: '4px',
        },
        borderTopRightRadius: {
          xs: '0px',
          sm: '4px',
        },
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        overflow: 'hidden',
        bottom: '0px',
      }}>
        <Tabs value={sectionIndex} variant='fullWidth' textColor='inherit' sx={{
          width: '100%',
          '& .MuiTabs-indicator': {
            backgroundColor: 'white',
          },
        }}>
          {sections.current.map((section, index) => (
            <Tab key={section.id} label={section.id} onClick={() => handleClick(section, index)} />
          ))}
        </Tabs>
      </Paper>
    </Box>
  );
}

export default App;
