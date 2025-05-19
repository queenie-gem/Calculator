import React, { useState } from 'react';
import './calculator.css';


function CalculatorApp() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')} className="operator">*</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')} className="operator">-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')} className="operator">+</button>

        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')} className="dot">.</button>
        <button onClick={() => handleClick('/')} className="operator">/</button>

        <button onClick={() => handleClick('%')} className="operator">%</button>
        <button onClick={handleEqual} className="equal">=</button>
        <button onClick={handleDelete} className="del">DEL</button>
      </div>
    </div>
  );
}

export default CalculatorApp;
