import { Avatar, Box, Chip, Paper, SxProps, Theme } from '@mui/material';

export type Level = 1 | 2 | 3 | 4 | 5;

interface Props {
  name: string;
  logoSrc: string;
  yearsExperience: number;
  level: Level;
}

function getChipAvatarColor(level: Level) {
  if (level === 1) {
    return '#25AE64';
  } else if (level === 2) {
    return '#F3C30D';
  } else if (level === 3) {
    return '#E67E22';
  } else if (level === 4) {
    return '#E64922';
  } else if (level === 5) {
    return '#2C2C2C';
  }
}

function getChipTitle(level: Level) {
  if (level === 1) {
    return 'Beginner';
  } else if (level === 2) {
    return 'Intermediate';
  } else if (level === 3) {
    return 'Advanced';
  } else if (level === 4) {
    return 'Professional';
  } else if (level === 5) {
    return 'Expert';
  }
}

const Skill: React.FC<Props> = ({ name, logoSrc, yearsExperience, level }) => {

  const chipStyle: SxProps<Theme> = {
    fontSize: {
      xs: '10px',
      sm: '13px',
    }
  };

  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      padding: '16px',
      borderRadius: '0px',
    }}>
      <Box sx={{
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '16px',
      }}>{name}</Box>
      <Box component='img' src={logoSrc} alt='logo' sx={{
        height: {
          xs: '48px',
          sm: '64px',
        },
        objectFit: 'contain',
        borderRadius: '4px',
        marginBottom: '16px',
      }} />
      <Chip avatar={
        <Avatar sx={{
          backgroundColor: getChipAvatarColor(level),
          color: 'white !important'
        }}>
          {level}
        </Avatar>} label={getChipTitle(level)} sx={chipStyle} style={{ marginBottom: '16px' }} />
      <Chip avatar={
        <Avatar>
          {yearsExperience}
        </Avatar>} label={(yearsExperience === 1 ? 'year' : 'years') + ' experience'} sx={chipStyle} />
    </Paper>
  );
};

export default Skill;
