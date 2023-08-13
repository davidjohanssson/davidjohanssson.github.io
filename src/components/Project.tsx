import { GitHub, OpenInNew } from '@mui/icons-material';
import { Box, Button, Paper } from '@mui/material';

export type Framework = 'Angular' | 'Blazor' | 'React';

interface Props {
  title: string;
  shortDescription: string;
  framework: Framework;
  imageSrc: string;
  repositoryUrl: string;
  appUrl: string;
}

const Project: React.FC<Props> = ({ title, shortDescription, framework, imageSrc, repositoryUrl, appUrl }) => {

  const getFrameworkImage = (framework: Framework) => {
    const path = '/images/logos/';
    switch (framework) {
      case 'Angular':
        return path + 'angular.png';
      case 'Blazor':
        return path + 'blazor.png';
      case 'React':
        return path + 'react.png';
    }
  };

  return (
    <Paper elevation={6} sx={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '0px',
    }}>
      <Box sx={{
        height: '80px',
        padding: '16px',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1fr min-content',
        columnGap: '8px',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
          <Box sx={{ fontWeight: '600' }}>{title}</Box>
          <Box sx={{ fontSize: '13px' }}>{shortDescription}</Box>
        </Box>
        <Box>
          <img src={getFrameworkImage(framework)} alt='framework' style={{ height: '46px' }} />
        </Box>
      </Box>
      <img src={imageSrc} alt='project' style={{ height: '192px', objectFit: 'cover' }} />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px',
        boxSizing: 'border-box',
      }}>
        <Button variant='contained' startIcon={<GitHub />} href={repositoryUrl} target='_blank' sx={{ width: '114px' }}>
          Source
        </Button>
        <Button variant='contained' startIcon={<OpenInNew />} href={appUrl} target='_blank' sx={{ width: '114px' }}>
          Run
        </Button>
      </Box>
    </Paper>
  );
};

export default Project;
