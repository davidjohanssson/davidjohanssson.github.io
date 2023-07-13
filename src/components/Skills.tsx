import React from 'react';

interface Props {
  id: string;
}

const Skills = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div id={props.id} ref={ref} style={{ width: '100%', height: '1024px', backgroundColor: 'yellow' }}>Skills</div>
  )
});

export default Skills;