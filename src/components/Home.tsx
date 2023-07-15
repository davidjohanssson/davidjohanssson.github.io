import { Box } from '@mui/material';
import React from 'react';

interface Props {
  id: string;
}

const Home = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <Box id={props.id} ref={ref} sx={{
      width: '100%',
      height: {
        xs: 'calc(100vh - 48px)',
        sm: '100vh',
      },
      backgroundColor: 'green',
      display: 'flex',
      flexDirection: {
        xs: 'column-reverse',
        md: 'row',
      },
     }}>
      <Box sx={{ flexGrow: '1' }}>
        LEFT
      </Box>
      <Box sx={{ flexGrow: '1' }}>
        RIGHT
      </Box>
    </Box>
  )
});

export default Home;