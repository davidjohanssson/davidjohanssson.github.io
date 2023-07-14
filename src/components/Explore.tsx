import React from 'react';

interface Props {
  id: string;
}

const Explore = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div id={props.id} ref={ref} style={{ width: '100%', height: '1024px', backgroundColor: 'crimson' }}>Explore</div>
  )
});

export default Explore;