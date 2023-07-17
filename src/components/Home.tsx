import { Box } from '@mui/material';
import React from 'react';
import Shape from './Shape';

interface Props {
  id: string;
}

const Home = React.forwardRef<HTMLDivElement, Props>((props, ref) => {

  return (
    <Box id={props.id} ref={ref} sx={{
      width: '100%',
      height: {
        xs: 'calc(100vh * 2 - 48px)',
        md: '100vh'
      },
      backgroundColor: 'white',
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        md: '1fr 1fr',
      },
      gridTemplateRows: {
        xs: '1fr 1fr 1fr 1fr',
        md: '1fr 1fr',
      },
    }}>
      <Box sx={{ boxSizing: 'border-box', padding: '32px', position: 'relative' }}>
        <Shape />
        <div style={{
          position: 'absolute',
          top: 64,
          left: 64,
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'white',
        }}>
          Hello.
        </div>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        rowGap: '4px',
        padding: '32px',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
      }}>
        <Box sx={{
          maxWidth: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
        }}>
          <img src='/images/IMG_0456.jpg' alt='me' style={{
            borderRadius: '16px',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }} />
        </Box>
        <i>Me</i>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        boxSizing: 'border-box',
        padding: '64px',
      }}>
        <h1>My name is David Johansson.</h1>
        <h1>Welcome to my website.</h1>
        <h1>I'm a full stack web developer based in Malmö, Sweden.</h1>
      </Box>
      <div>BOX 4</div>
    </Box>

    // <Box id={props.id} ref={ref} sx={{
    //   width: '100%',
    //   height: {
    //     xs: 'calc(100vh - 48px)',
    //     sm: '100vh',
    //   },
    //   display: 'flex',
    //   flexDirection: {
    //     xs: 'column-reverse',
    //     md: 'row',
    //   },
    //   backgroundColor: 'white',
    // }}>
    //   <Box sx={{
    //     flexGrow: '1',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     margin: {
    //       xs: '32px',
    //       md: '64px',
    //     },
    //     height: {
    //       xs: '50%',
    //       md: 'unset',
    //     },
    //   }}>
    //     LEFT
    //   </Box>
    //   <Paper elevation={6} sx={{
    //     flexGrow: '1',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: {
    //       xs: '50%',
    //       md: 'unset',
    //     },
    //     maxWidth: {
    //       xs: 'unset',
    //       md: 'calc(100vw / 2)',
    //     },
    //     maxHeight: {
    //       xs: 'calc(100vh / 2)',
    //       md: 'unset',
    //     },
    //     background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    //     // margin: {
    //     //   xs: '32px',
    //     //   md: '64px',
    //     // },
    //     borderRadius: '16px',
    //     position: 'relative',
    //   }}>
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" style={{
    //       position: 'absolute',
    //       marginLeft: '24px',
    //       width: '100%',
    //       height: '100%'
    //     }}>
    //       <defs>
    //         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
    //           <stop id="stop1" stopColor={theme.palette.primary.main} offset="0%" />
    //           <stop id="stop2" stopColor={theme.palette.primary.light} offset="100%" />
    //         </linearGradient>
    //       </defs>
    //       <path fill="url(#sw-gradient)" d="M17.8,-23.9C23,-16.9,27,-11.2,30.7,-3.5C34.3,4.2,37.7,13.9,34.5,20.4C31.4,26.9,21.8,30.1,12.9,31.8C4,33.4,-4.1,33.5,-12.2,31.5C-20.3,29.4,-28.4,25.3,-34.3,18.3C-40.1,11.3,-43.6,1.5,-41.9,-7.3C-40.2,-16,-33.3,-23.7,-25.5,-30.3C-17.6,-36.8,-8.8,-42.2,-1.2,-40.7C6.3,-39.3,12.6,-30.9,17.8,-23.9Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }} />
    //     </svg>
    //   </Paper>
    // </Box>
  )
});

export default Home;