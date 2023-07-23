import { Box, SxProps, Theme } from '@mui/material';

export type Level = 1 | 2 | 3 | 4;

interface Props {
  level: Level;
}

function getBoxColor(boxLevel: Level, level: Level) {
  if (boxLevel === 1 && level >= 1) {
    return '#25AE64';
  } else if (boxLevel === 2 && level >= 2) {
    return '#F3C30D';
  } else if (boxLevel === 3 && level >= 3) {
    return '#E67E22';
  } else if (boxLevel === 4 && level >= 4) {
    return 'crimson';
  } else {
    return 'white';
  }
}

const SkillLevel: React.FC<Props> = ({ level }) => {

  const boxStyle = (boxLevel: Level): SxProps<Theme> => ({
    backgroundColor: getBoxColor(boxLevel, level),
    width: '16px',
    boxSizing: 'border-box',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '4px',
  });

  return (
    <Box sx={{
      width: '75%',
      height: '16px',
      display: 'flex',
      justifyContent: 'center',
      columnGap: '8px',
    }}>
      <Box sx={boxStyle(1)} />
      <Box sx={boxStyle(2)} />
      <Box sx={boxStyle(3)} />
      <Box sx={boxStyle(4)} />
    </Box>
  )
};

export default SkillLevel;