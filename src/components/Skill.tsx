import { Avatar, Box, Chip } from '@mui/material';
import SkillLevel, { Level } from './SkillLevel';

interface Props {
  name: string;
  logoSrc: string;
  yearsExperience: number;
  level: Level;
}

const Skill: React.FC<Props> = ({ name, logoSrc, yearsExperience, level }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      padding: '16px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      borderRadius: '4px',
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
        },
        marginBottom: '16px',
      }} />
      <SkillLevel level={level} />
    </Box>
  );
};

export default Skill;
