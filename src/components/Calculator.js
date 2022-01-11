import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className="output">0</div>
        <div className="btn-wrapper">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="orange">&#247;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="orange">x</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="orange">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="orange">+</button>
          <button type="button" className="zero">0</button>
          <button type="button">.</button>
          <button type="button" className="orange">=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;
