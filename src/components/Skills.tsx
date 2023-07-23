import { Box, Divider, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import SkillLegend from './SkillLegend';
import SkillType from './SkillType';
import Skill from './Skill';

interface Props {
  id: string;
}

const Skills = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const theme = useTheme();
  const isSmOrUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box id={props.id} ref={ref} sx={{
      backgroundColor: 'white',
      width: '100%',
      maxWidth: '960px',
    }}>
      <SkillType name='Programming languages'>
        <Skill name='C#' logoSrc='/images/logos/csharp.png' yearsExperience={5} level='Professional' />
        <Skill name='Dart' logoSrc='/images/logos/dart.png' yearsExperience={1} level='Intermediate' />
      </SkillType>
      <Divider />
      <SkillType name='Frameworks'>
        <Skill name='Angular' logoSrc='/images/logos/angular.png' yearsExperience={5} level='Professional' />
        <Skill name='ASP.NET Core' logoSrc='/images/logos/aspnetcore.png' yearsExperience={5} level='Professional' />
      </SkillType>

      {/* <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          sm: 'row'
        },
        justifyContent: {
          xs: 'center',
          sm: 'space-evenly',
        },
        alignItems: 'center',
        rowGap: '16px',
        boxSizing: 'border-box',
        padding: '32px 16px',
      }}>
        <SkillLegend background='#25AE64' name='Beginner' />
        <Divider variant={isSmOrUp ? 'fullWidth' : 'middle'} orientation={isSmOrUp ? 'vertical' : 'horizontal'} flexItem />
        <SkillLegend background='#F3C30D' name='Intermediate' />
        <Divider variant={isSmOrUp ? 'fullWidth' : 'middle'} orientation={isSmOrUp ? 'vertical' : 'horizontal'} flexItem />
        <SkillLegend background='#E67E22' name='Professional' />
        <Divider variant={isSmOrUp ? 'fullWidth' : 'middle'} orientation={isSmOrUp ? 'vertical' : 'horizontal'} flexItem />
        <SkillLegend background='crimson' name='Expert' />
      </Box>
      <Box sx={{

      }}>
        <Box>Programming languages</Box>
      </Box> */}
    </Box>
  )
});

export default Skills;