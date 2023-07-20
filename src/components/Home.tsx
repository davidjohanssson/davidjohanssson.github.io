import { Call, Mail } from '@mui/icons-material';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';

interface Props {
  id: string;
}

const Home = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const theme = useTheme();
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [orientation, setOrientation] = useState<'landscape' | 'portrait'>(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');

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

  return (
    <Box id={props.id} ref={ref} sx={{
      backgroundColor: `${theme.palette.primary.main}`,
      width: '100%',
      height: {
        xs: `calc(${viewportHeight}px - 48px)`,
        sm: `${viewportHeight}px`,
      },
    }}>

    </Box>
  )

  // const theme = useTheme();
  // const isLandscape = useMediaQuery(`(orientation: landscape)`);
  // const buttonStyle = { backgroundColor: 'white', color: theme.palette.primary.main, width: '100%' };

  // return (
  //   <Box id={props.id} ref={ref} sx={{
  //     backgroundColor: `${theme.palette.primary.main}`,
  //     width: '100%',
  //     height: {
  //       xs: 'calc(100vh - 48px)',
  //       sm: '100vh',
  //     },
  //     display: 'grid',
  //     gridTemplateColumns: isLandscape ? '1fr 1fr' : '1fr',
  //     gridTemplateRows: isLandscape ? '1fr' : '1fr 1fr',
  //   }}>
  //     <Box sx={{
  //       display: 'flex',
  //       alignItems: isLandscape ? 'flex-end' : 'center',
  //       justifyContent: isLandscape ? 'center' : 'flex-end',
  //       flexDirection: 'column',
  //     }}>
  //       <div>David Johansson</div>
  //       <div>Full Stack Web Developer</div>
  //     </Box>
  //     <Box sx={{
  //       display: 'flex',
  //       alignItems: isLandscape ? 'flex-start' : 'center',
  //       justifyContent: isLandscape ? 'center' : 'flex-start',
  //       flexDirection: 'column',
  //     }}>
  //       <Button href="tel:+46793344591" style={buttonStyle} startIcon={<Call />}>
  //         +46 79 33 44 591
  //       </Button>
  //       <Button href="mailto:david.n.johansson@live.com" style={buttonStyle} startIcon={<Mail />}>
  //         DAVID.N.JOHANSSON@LIVE.COM
  //       </Button>
  //     </Box>
  //   </Box>
  // )

  // return (
  //   <Box id={props.id} ref={ref} sx={{
  //     width: '100%',
  //     display: 'flex',
  //     justifyContent: 'center',
  //   }}>
  //     <Box sx={{
  //       flexGrow: '1',
  //       maxWidth: '960px',
  //       display: 'grid',
  //       gridTemplateRows: '192px min-content 348px'
  //     }}>
  //       <Box sx={{
  //         boxSizing: 'border-box',
  //         paddingTop: {
  //           xs: '16px',
  //           sm: '32px',
  //         },
  //         paddingBottom: {
  //           xs: '8px',
  //           sm: '16px',
  //         },
  //         paddingLeft: {
  //           xs: '16px',
  //           sm: '32px',
  //         },
  //         paddingRight: {
  //           xs: '16px',
  //           sm: '32px',
  //         },
  //         position: 'relative',
  //       }}>
  //         <Shape />
  //         <Box sx={{
  //           position: 'absolute',
  //           top: {
  //             xs: '32px',
  //             sm: '64px',
  //           },
  //           left: {
  //             xs: '32px',
  //             sm: '64px',
  //           },
  //           fontSize: '32px',
  //           fontWeight: 'bold',
  //           color: 'white',
  //         }}>
  //           Hello.
  //         </Box>
  //       </Box>
  //       <Box sx={{
  //         boxSizing: 'border-box',
  //         paddingTop: {
  //           xs: '8px',
  //           sm: '16px',
  //         },
  //         paddingBottom: {
  //           xs: '8px',
  //           sm: '16px',
  //         },
  //         paddingLeft: {
  //           xs: '16px',
  //           sm: '32px',
  //         },
  //         paddingRight: {
  //           xs: '16px',
  //           sm: '32px',
  //         },
  //         display: 'flex',
  //         flexDirection: 'column'
  //       }}>
  //         <Box sx={{
  //           flexGrow: '1',
  //           boxSizing: 'border-box',
  //           paddingLeft: {
  //             xs: '16px',
  //             sm: '32px',
  //           },
  //           paddingRight: {
  //             xs: '16px',
  //             sm: '32px',
  //           },
  //         }}>
  //           <h1>My name is David Johansson.</h1>
  //           <h1>I'm a full stack web developer based in Malmö, Sweden.</h1>
  //         </Box>
  //       </Box>
  //       <Box sx={{
  //         boxSizing: 'border-box',
  //         paddingTop: {
  //           xs: '8px',
  //           sm: '16px',
  //         },
  //         paddingBottom: {
  //           xs: '16px',
  //           sm: '32px',
  //         },
  //         paddingLeft: {
  //           xs: '16px',
  //           sm: '32px',
  //         },
  //         paddingRight: {
  //           xs: '16px',
  //           sm: '32px',
  //         },
  //         display: 'flex',
  //         flexDirection: 'column',
  //         alignItems: 'center',
  //         rowGap: '2px',
  //         maxWidth: '100%',
  //         maxHeight: '100%',
  //         overflow: 'hidden',
  //       }}>
  //         <Box sx={{
  //           maxWidth: '100%',
  //           maxHeight: '100%',
  //           overflow: 'hidden',
  //         }}>
  //           <img src='/images/me.jpg' alt='me' style={{
  //             borderRadius: '16px',
  //             width: '100%',
  //             height: '100%',
  //             objectFit: 'contain',
  //           }} />
  //         </Box>
  //         <i>Me</i>
  //       </Box>
  //     </Box>
  //   </Box>
  // )
});

export default Home;