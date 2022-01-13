import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const clickEvent = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <main>
      <div className="output">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <div className="btn-wrapper">
        <button type="button" onClick={clickEvent}>AC</button>
        <button type="button" onClick={clickEvent}>+/-</button>
        <button type="button" onClick={clickEvent}>%</button>
        <button type="button" className="orange" onClick={clickEvent}>&#247;</button>
        <button type="button" onClick={clickEvent}>7</button>
        <button type="button" onClick={clickEvent}>8</button>
        <button type="button" onClick={clickEvent}>9</button>
        <button type="button" className="orange" onClick={clickEvent}>x</button>
        <button type="button" onClick={clickEvent}>4</button>
        <button type="button" onClick={clickEvent}>5</button>
        <button type="button" onClick={clickEvent}>6</button>
        <button type="button" className="orange" onClick={clickEvent}>-</button>
        <button type="button" onClick={clickEvent}>1</button>
        <button type="button" onClick={clickEvent}>2</button>
        <button type="button" onClick={clickEvent}>3</button>
        <button type="button" className="orange" onClick={clickEvent}>+</button>
        <button type="button" className="zero" onClick={clickEvent}>0</button>
        <button type="button" onClick={clickEvent}>.</button>
        <button type="button" className="orange" onClick={clickEvent}>=</button>
      </div>
    </main>
  );
};

export default Calculator;
