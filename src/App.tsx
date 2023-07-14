import { Box, Paper, Tab, Tabs, ThemeProvider } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { theme } from './theme';

interface Section {
  name: 'Home' | 'Projects' | 'Skills' | 'Contact';
  ref: HTMLDivElement | null;
}

function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const sections = useRef<Section[]>([
    { name: 'Home', ref: null },
    { name: 'Projects', ref: null },
    { name: 'Skills', ref: null },
    { name: 'Contact', ref: null },
  ]);

  useEffect(() => {
    // Get the current URL fragment identifier (i.e., the part of the URL following '#')
    const sectionName = window.location.hash.slice(1);
    // Find a section in the current sections array that matches the sectionName
    const section = sections.current.find(section => section.name === sectionName);

    // If the section was found
    if (section) {
      // Use optional chaining to call scrollIntoView() on the ref property of the section
      // If ref exists, scrollIntoView() will scroll the document to bring the
      // referenced section into the viewport
      section.ref?.scrollIntoView();
    }

    // Create an IntersectionObserverInit object named `options` to specify the options for an IntersectionObserver
    const options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0.5 };
    // Create a new IntersectionObserver, which allows you to asynchronously observe changes in the 
    // intersection of a target element with an ancestor element or with a top-level document's viewport.
    const observer = new IntersectionObserver((entries, _) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // Find the index of the section whose name matches the ID of the target element
          const index = sections.current.findIndex(section => section.name === entry.target.id);
          // Set the current section index to the found index
          setSectionIndex(index);
          // Replace the current URL in the history stack with the URL of the target section
          window.history.replaceState(null, '', `#${entry.target.id}`);
        }
      }
    }, options);

    for (const section of sections.current) {
      if (section.ref) {
        // Start observing the section
        observer.observe(section.ref);
      }
    }
  }, []);

  const handleClick = (section: Section, index: number) => {
    setSectionIndex(index);
    section.ref?.scrollIntoView();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center' }}>
        {sections.current.map((section, index) => {
          if (section.name === 'Home') {
            return <Home key={section.name} id={section.name} ref={(ref) => sections.current[index].ref = ref} />
          } else if (section.name === 'Projects') {
            return <Projects key={section.name} id={section.name} ref={(ref) => sections.current[index].ref = ref} />
          } else if (section.name === 'Skills') {
            return <Skills key={section.name} id={section.name} ref={(ref) => sections.current[index].ref = ref} />
          } else if (section.name === 'Contact') {
            return <Contact key={section.name} id={section.name} ref={(ref) => sections.current[index].ref = ref} />
          } else {
            return (<div>404 Not Found</div>);
          }
        })}
        <Paper elevation={8} sx={{
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
