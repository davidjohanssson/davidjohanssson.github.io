import React from 'react';

interface Props {
  id: string;
}

const Home = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div id={props.id} ref={ref} style={{ width: '100%', height: '1024px', backgroundColor: 'green' }}>Home</div>
  )
});

export default Home;