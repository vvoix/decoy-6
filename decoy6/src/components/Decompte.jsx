import React from 'react';
import { useTimer } from 'react-timer-hook';
import { ProgressBar } from 'react-bootstrap';

const Decompte = (expiryTimestamp) => {
  const { seconds, minutes, isRunning, start, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '30px' }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>

      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 60);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Decompte;
