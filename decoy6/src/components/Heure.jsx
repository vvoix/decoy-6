import React from 'react';
import { useTime } from 'react-timer-hook';

const Heure = () => {
  const { seconds, minutes, hours } = useTime({ format: '24-hour' });
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '30px' }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
};

export default Heure;
