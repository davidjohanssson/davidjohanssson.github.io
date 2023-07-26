import { Box, useTheme } from '@mui/material';
import React from 'react';
import SkillType from './SkillType';
import Skill from './Skill';

interface Props {
  id: string;
}

const Skills = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const theme = useTheme();

  return (
    <Box id={props.id} ref={ref} sx={{
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box',
      paddingLeft: {
        xs: '0%',
        sm: '0%',
        md: '5%',
        lg: '15%',
        xl: '20%',
      },
      paddingRight: {
        xs: '0%',
        sm: '0%',
        md: '5%',
        lg: '15%',
        xl: '20%',
      },
      borderTop: `1px solid ${theme.palette.primary.dark}`,
      borderBottom: `1px solid ${theme.palette.primary.dark}`,
    }}>
      <SkillType name='Programming languages'>
        <Skill name='C#' logoSrc='/images/logos/csharp.png' yearsExperience={5} level={4} />
        <Skill name='Dart' logoSrc='/images/logos/dart.png' yearsExperience={1} level={2} />
        <Skill name='Java' logoSrc='/images/logos/java.png' yearsExperience={2} level={3} />
        <Skill name='JavaScript' logoSrc='/images/logos/javascript.png' yearsExperience={5} level={4} />
        <Skill name='TypeScript' logoSrc='/images/logos/typescript.png' yearsExperience={5} level={4} />
      </SkillType>
      <SkillType name='Frameworks'>
        <Skill name='Angular' logoSrc='/images/logos/angular.png' yearsExperience={5} level={5} />
        <Skill name='ASP.NET Core' logoSrc='/images/logos/aspnetcore.png' yearsExperience={5} level={4} />
        <Skill name='NestJS' logoSrc='/images/logos/nestjs.png' yearsExperience={2} level={3} />
        <Skill name='React' logoSrc='/images/logos/react.png' yearsExperience={1} level={3} />
      </SkillType>
      <SkillType name='Databases'>
        <Skill name='Microsoft SQL Server' logoSrc='/images/logos/sqlserver.png' yearsExperience={3} level={3} />
        <Skill name='PostgreSQL' logoSrc='/images/logos/postgresql.png' yearsExperience={3} level={3} />
      </SkillType>
      <SkillType name='Tools & libraries'>
        <Skill name='EF Core' logoSrc='/images/logos/efcore.png' yearsExperience={3} level={4} />
        <Skill name='GraphQL' logoSrc='/images/logos/graphql.png' yearsExperience={2} level={3} />
        <Skill name='Material UI' logoSrc='/images/logos/materialui.png' yearsExperience={3} level={3} />
        <Skill name='REST' logoSrc='/images/logos/rest.png' yearsExperience={4} level={4} />
        <Skill name='TypeORM' logoSrc='/images/logos/typeorm.png' yearsExperience={2} level={3} />
        <Skill name='moment.js' logoSrc='/images/logos/momentjs.png' yearsExperience={2} level={2} />
      </SkillType>
    </Box>
  )
});

export default Skills;