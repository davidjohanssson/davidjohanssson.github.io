import React from 'react';

interface Props {
  id: string;
}

const Contact = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div id={props.id} ref={ref} style={{ width: '100%', height: '1024px', backgroundColor: 'blue' }}>Contact</div>
  )
});

export default Contact;