import { Box } from '@mui/material';
import React from 'react';
import SkillType from './SkillType';
import Skill from './Skill';

interface Props {
  id: string;
}

const Skills = React.forwardRef<HTMLDivElement, Props>((props, ref) => {

  return (
    <Box id={props.id} ref={ref} sx={{
      backgroundColor: 'white',
      width: '100%',
      maxWidth: '960px',
    }}>
      <SkillType name='Programming languages'>
        <Skill name='C#' logoSrc='/images/logos/csharp.png' yearsExperience={5} level={4} />
        <Skill name='Dart' logoSrc='/images/logos/dart.png' yearsExperience={1} level={1} />
      </SkillType>
      <SkillType name='Frameworks'>
        <Skill name='Angular' logoSrc='/images/logos/angular.png' yearsExperience={5} level={4} />
        <Skill name='ASP.NET Core' logoSrc='/images/logos/aspnetcore.png' yearsExperience={5} level={4} />
      </SkillType>
    </Box>
  )
});

export default Skills;