import { Avatar, Box, Chip, Paper } from '@mui/material';

interface Props {
  name: string;
  logoSrc: string;
  yearsExperience: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
}

const Skill: React.FC<Props> = ({ name, logoSrc, yearsExperience, level }) => {
  return (
    <Paper elevation={2} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      padding: '16px',
    }}>
      <Box sx={{
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '16px',
      }}>{name}</Box>
      <img src={logoSrc} alt='logo' style={{
        height: '64px',
        objectFit: 'contain',
        borderRadius: '4px',
        marginBottom: '16px',
      }} />
      <Chip avatar={<Avatar>{yearsExperience}</Avatar>} label={(yearsExperience === 1 ? 'year' : 'years') + ' experience'} sx={{
        fontSize: {
          xs: '10px',
          sm: '13px',
        }
      }} />

    </Paper>
  );
};

export default Skill;
