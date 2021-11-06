import React from 'react';
import './Word.css';

const Word = (props) => {
  return (
    <div className="word">
      <h3>{props.mot}</h3>
    </div>
  );
};

export default Word;
