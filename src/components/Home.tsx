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
        xs: 'calc(100vh - 48px)',
        sm: '100vh'
      },
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Box sx={{
        flexGrow: '1',
        maxWidth: '960px',
        height: 'calc(100vh - 48px)',
        display: 'grid',
        gridTemplateRows: '1fr min-content 2fr'
      }}>
        <Box sx={{
          boxSizing: 'border-box',
          padding: '16px 32px',
          position: 'relative',
        }}>
          <Shape />
          <Box sx={{
            position: 'absolute',
            top: 64,
            left: 64,
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
          }}>
            Hello.
          </Box>
        </Box>
        <Box sx={{
          boxSizing: 'border-box',
          padding: '16px 32px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box sx={{
            flexGrow: '1',
            boxSizing: 'border-box',
            padding: '0px 32px',
          }}>
            <h1>My name is David Johansson.</h1>
            <h1>I'm a full stack web developer based in Malmö, Sweden.</h1>
          </Box>
        </Box>
        <Box sx={{
          boxSizing: 'border-box',
          padding: '16px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '2px',
          maxWidth: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
        }}>
          <Box sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            overflow: 'hidden',
          }}>
            <img src='/images/me.jpg' alt='me' style={{
              borderRadius: '16px',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }} />
          </Box>
          <i>Me</i>
        </Box>
      </Box>
    </Box>
  )
});

export default Home;