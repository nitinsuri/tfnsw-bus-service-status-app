import React from 'react';

const Button = (props) => {
  const { clickHandler, label, style } = props;
  return (
    <button className={style} onClick={(e) => clickHandler(e)}>
      {label}
    </button>
  );
};

export default Button;
