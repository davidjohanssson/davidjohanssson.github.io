import { Box } from '@mui/material';
import React from 'react';
import Project from './Project';

interface Props {
  id: string;
}

const Explore = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    // <div id={props.id} ref={ref} style={{ width: '100%', height: '1024px', backgroundColor: 'crimson' }}>Explore</div>

    <Box id={props.id} ref={ref} sx={{
      backgroundColor: 'white',
      boxSizing: 'border-box',
      paddingLeft: {
        xs: '0%',
        md: '5%',
        lg: '15%',
        xl: '20%',
      },
      paddingRight: {
        xs: '0%',
        md: '5%',
        lg: '15%',
        xl: '20%',
      },
      paddingTop: {
        xs: '0px',
        md: '32px',
      },
      paddingBottom: {
        xs: '0px',
        md: '32px',
      },
      display: 'flex',
      flexDirection: 'column',
      rowGap: {
        xs: '0px',
        md: '32px',
      },
    }}>
      <Box sx={{
        textAlign: 'center',
        boxSizing: 'border-box',
        padding: {
          xs: '32px 0px 32px 0px',
        },
        fontSize: '32px',
        fontWeight: '500',
      }}>
        Explore
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr',
        },
        padding: '16px',
        gap: '16px',
      }}>
        <Project />
        <Project />
      </Box>
    </Box>
  )
});

export default Explore;