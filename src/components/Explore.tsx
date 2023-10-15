import { Box } from '@mui/material';
import React from 'react';
import Project from './Project';

interface Props {
  id: string;
}

const Explore = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
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
        gap: '32px',
      }}>
        <Project
          title='Color Palette Generator'
          shortDescription='A simple tool for creating color palettes.'
          framework='Angular'
          imageSrc='/images/color-palette-generator.png'
          repositoryUrl='https://github.com/davidjohanssson/material-color-palette-generator'
          appUrl='https://davidjohanssson.github.io/material-color-palette-generator/' />
        <Project
          title='Resurskarta'
          shortDescription='Fordon på en karta som uppdateras i realtid.'
          framework='Angular'
          imageSrc='/images/resurskarta.png'
          repositoryUrl='https://github.com/davidjohanssson/resurskarta'
          appUrl='https://davidjohanssson.github.io/resurskarta/'/>
      </Box>
    </Box>
  )
});

export default Explore;