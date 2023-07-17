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
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Box sx={{
        flexGrow: '1',
        maxWidth: '960px',
        display: 'grid',
        gridTemplateRows: '192px min-content 348px'
      }}>
        <Box sx={{
          boxSizing: 'border-box',
          paddingTop: {
            xs: '16px',
            sm: '32px',
          },
          paddingBottom: {
            xs: '8px',
            sm: '16px',
          },
          paddingLeft: {
            xs: '16px',
            sm: '32px',
          },
          paddingRight: {
            xs: '16px',
            sm: '32px',
          },
          position: 'relative',
        }}>
          <Shape />
          <Box sx={{
            position: 'absolute',
            top: {
              xs: '32px',
              sm: '64px',
            },
            left: {
              xs: '32px',
              sm: '64px',
            },
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
          }}>
            Hello.
          </Box>
        </Box>
        <Box sx={{
          boxSizing: 'border-box',
          paddingTop: {
            xs: '8px',
            sm: '16px',
          },
          paddingBottom: {
            xs: '8px',
            sm: '16px',
          },
          paddingLeft: {
            xs: '16px',
            sm: '32px',
          },
          paddingRight: {
            xs: '16px',
            sm: '32px',
          },
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box sx={{
            flexGrow: '1',
            boxSizing: 'border-box',
            paddingLeft: {
              xs: '16px',
              sm: '32px',
            },
            paddingRight: {
              xs: '16px',
              sm: '32px',
            },
          }}>
            <h1>My name is David Johansson.</h1>
            <h1>I'm a full stack web developer based in Malmö, Sweden.</h1>
          </Box>
        </Box>
        <Box sx={{
          boxSizing: 'border-box',
          paddingTop: {
            xs: '8px',
            sm: '16px',
          },
          paddingBottom: {
            xs: '16px',
            sm: '32px',
          },
          paddingLeft: {
            xs: '16px',
            sm: '32px',
          },
          paddingRight: {
            xs: '16px',
            sm: '32px',
          },
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