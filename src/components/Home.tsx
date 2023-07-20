import { Call, Mail } from '@mui/icons-material';
import { Box, Button, Dialog, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface Props {
  id: string;
}

const Home = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const theme = useTheme();
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [orientation, setOrientation] = useState<'landscape' | 'portrait'>(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
  const [open, setOpen] = useState(false);
  const buttonStyle = {
    width: '300px',
    textTransform: 'none',
    display: 'grid',
    gridTemplateColumns: '24px 1fr 24px',
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight > window.innerWidth) {
        if (orientation === 'landscape') {
          setViewportHeight(window.innerHeight);
        }
        setOrientation('portrait');
      } else {
        if (orientation === 'portrait') {
          setViewportHeight(window.innerHeight);
        }
        setOrientation('landscape');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener('resize', handleResize);
    };

  }, [orientation]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box id={props.id} ref={ref} sx={{
      backgroundColor: `${theme.palette.primary.main}`,
      width: '100%',
      height: {
        xs: `calc(${viewportHeight}px - 48px)`,
        sm: `${viewportHeight}px`,
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: '32px',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <img src='/images/me_min.jpg' alt='me' onClick={handleOpen} style={{
          width: '128px',
          height: '128px',
          objectFit: 'cover',
          border: '3px solid white',
          borderRadius: '50%',
          cursor: 'pointer',
        }} />
        <Dialog open={open} onClose={handleClose}>
          <img src='/images/me_min.jpg' alt='me' onClick={handleClose} style={{
            width: '100%',
            objectFit: 'cover',
          }} />
        </Dialog>
        <Box sx={{
          color: 'white',
          fontFamily: 'Pacifico, sans-serif',
          fontSize: '32px',
        }}>
          David Johansson
        </Box>
        <Box sx={{
          color: 'white',
          opacity: '0.8',
        }}>
          Web Developer
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}>
        <Button href="tel:+46793344591" variant='contained' sx={buttonStyle}>
          <Call />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>+46 79 33 44 591</Box>
          <Box></Box>
        </Button>
        <Button href="mailto:david.n.johansson@live.com" variant='contained' sx={buttonStyle}>
          <Mail />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>david.n.johansson@live.com</Box>
          <Box></Box>
        </Button>
      </Box>
    </Box>
  )
});

export default Home;