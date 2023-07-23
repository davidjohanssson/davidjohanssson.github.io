import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  name: string;
  children: ReactNode;
}

const SkillType: React.FC<Props> = ({ name, children }) => {
  return (
    <Box sx={{
      boxSizing: 'border-box',
      padding: '16px',
    }}>
      <Box sx={{
        fontSize: '20px',
        marginBottom: '16px',
      }}>
        {name}
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr 1fr',
          sm: '1fr 1fr 1fr',
          md: '1fr 1fr 1fr 1fr',
        },
        gap: '16px',
      }}>
        {children}
      </Box>
    </Box>
  );
};

export default SkillType;