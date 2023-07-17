import { Paper, useTheme } from '@mui/material';

interface Props {

}

const Shape: React.FC<Props> = () => {
  const theme = useTheme();

  return (
    <Paper elevation={6} sx={{
      width: '100%',
      height: '100%',
      flexGrow: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
      borderRadius: '16px',
      position: 'relative',
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" style={{
        position: 'absolute',
        width: '100%',
        height: '100%'
      }}>
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor={theme.palette.primary.main} offset="0%" />
            <stop id="stop2" stopColor={theme.palette.primary.light} offset="100%" />
          </linearGradient>
        </defs>
        <path fill="url(#sw-gradient)" d="M17.8,-23.9C23,-16.9,27,-11.2,30.7,-3.5C34.3,4.2,37.7,13.9,34.5,20.4C31.4,26.9,21.8,30.1,12.9,31.8C4,33.4,-4.1,33.5,-12.2,31.5C-20.3,29.4,-28.4,25.3,-34.3,18.3C-40.1,11.3,-43.6,1.5,-41.9,-7.3C-40.2,-16,-33.3,-23.7,-25.5,-30.3C-17.6,-36.8,-8.8,-42.2,-1.2,-40.7C6.3,-39.3,12.6,-30.9,17.8,-23.9Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }} />
      </svg>
    </Paper>
  )
}

export default Shape;