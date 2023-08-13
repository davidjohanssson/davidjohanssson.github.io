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
        <Project 
          title='Donec venenatis'
          shortDescription='Praesent blandit vulputate tortor vel ultrices'
          framework='Angular'
          imageSrc='/images/code.jpg'
          description='Pellentesque nec tortor vel tortor hendrerit porttitor. Donec porttitor sollicitudin tempor. Suspendisse potenti. Aenean a quam id erat pharetra eleifend. Praesent dignissim sollicitudin enim volutpat dapibus. Suspendisse sagittis erat at ex accumsan feugiat. Nam et justo nisi. Etiam maximus hendrerit lacinia.'
          url='test' />
        <Project
          title='Sed pellentesque'
          shortDescription='Proin dolor nisi, malesuada et viverra eget.'
          framework='React'
          imageSrc='/images/code.jpg'
          description='Donec non nisi a purus fringilla luctus vitae lobortis tellus. Nam quis tellus pharetra, ultrices quam id, vulputate quam. Pellentesque sit amet tortor felis. Pellentesque ornare mollis lacus, et placerat nibh imperdiet vel. Curabitur viverra justo sit amet justo semper blandit.'
          url='test' />
      </Box>
    </Box>
  )
});

export default Explore;