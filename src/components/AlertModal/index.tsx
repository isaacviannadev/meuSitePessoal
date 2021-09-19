import React, { useState } from 'react';
import { IoAlertCircle } from 'react-icons/io5';
import { Wrapper } from './style';

export const AlertModal = (props: any) => {
  const [alertOpen, setAlertOpen] = useState<boolean>(props.isOpen);

  if (typeof window !== 'undefined') {
    window.onkeydown = function (event) {
      if (event.keyCode === 27) {
        console.log('escape pressed');
        setAlertOpen(false);
      }
    };
  }

  return (
    alertOpen && (
      <Wrapper>
        <div className='backdrop' onClick={() => setAlertOpen(false)}></div>
        <div className='wrapper animate__animated animate__tada'>
          <IoAlertCircle />
          <p>Desculpe</p>

          <p>Essa página ainda está em desenvolvimento</p>

          <button onClick={() => setAlertOpen(false)}>Entendi</button>
        </div>
      </Wrapper>
    )
  );
};
