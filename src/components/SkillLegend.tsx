import { Box } from '@mui/material';

interface Props {
  background: string;
  name: string;
}

const SkillLegend: React.FC<Props> = ({ background, name }) => {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: {
        xs: 'flex-start',
        sm: 'center',
      },
      alignItems: 'center',
      columnGap: '8px',
    }}>
      <Box sx={{
        background: background,
        width: '24px',
        height: '24px',
        borderRadius: '4px',
      }} />
      <span>{name}</span>
    </Box>
  )
};

export default SkillLegend;