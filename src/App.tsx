import { Box, Paper, Tab, Tabs, ThemeProvider } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Home from './components/Home';
import Skills from './components/Skills';
import Explore from './components/Explore';
import { theme } from './theme';

interface Section {
  name: 'Home' | 'Skills' | 'Explore';
  ref: HTMLDivElement | null;
}

function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const sections = useRef<Section[]>([
    { name: 'Home', ref: null },
    { name: 'Skills', ref: null },
    { name: 'Explore', ref: null },
  ]);

  useEffect(() => {
    const sectionName = window.location.hash.slice(1);
    const section = sections.current.find(section => section.name === sectionName);

    if (section) {
      section.ref?.scrollIntoView();
    }

    const replaceFragmentObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = sections.current.findIndex(section => section.name === entry.target.id);
          setSectionIndex(index);
          window.history.replaceState(null, '', `#${entry.target.id}`);
        }
      }
    }, { root: null, rootMargin: '0px', threshold: 0.5 });

    const updateThemeColorObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          let color = window.getComputedStyle(entry.target).backgroundColor;

          if (color === 'rgba(0, 0, 0, 0)') {
            color = 'rgb(255, 255, 255)';
          }

          document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
        }
      }
    }, { root: null, rootMargin: '0px 0px -100% 0px', threshold: 0 });

    for (const section of sections.current) {
      if (section.ref) {
        replaceFragmentObserver.observe(section.ref);
        updateThemeColorObserver.observe(section.ref);
      }
    }
  }, []);

  const handleClick = (section: Section, index: number) => {
    setSectionIndex(index);

    if (section.ref) {
      section.ref.scrollIntoView();

      let color = window.getComputedStyle(section.ref).backgroundColor;

      if (color === 'rgba(0, 0, 0, 0)') {
        color = 'rgb(255, 255, 255)';
      }

      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center' }}>
        {sections.current.map((section, index) => {
          if (section.name === 'Home') {
            return <Home key={section.name} id={section.name} ref={(ref) => sections.current[index].ref = ref} />
          } else if (section.name === 'Skills') {
            return <Skills key={section.name} id={section.name} ref={(ref) => sections.current[index].ref = ref} />
          } else if (section.name === 'Explore') {
            return <Explore key={section.name} id={section.name} ref={(ref) => sections.current[index].ref = ref} />
          } else {
            return (<div>404 Not Found</div>);
          }
        })}
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
              <Tab key={section.name} label={section.name} onClick={() => handleClick(section, index)} />
            ))}
          </Tabs>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
