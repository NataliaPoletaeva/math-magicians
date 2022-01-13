import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <main>
        <div className="output">
          {total}
          {operation}
          {next}
        </div>
        <div className="btn-wrapper">
          <button type="button" onClick={this.clickEvent}>AC</button>
          <button type="button" onClick={this.clickEvent}>+/-</button>
          <button type="button" onClick={this.clickEvent}>%</button>
          <button type="button" className="orange" onClick={this.clickEvent}>&#247;</button>
          <button type="button" onClick={this.clickEvent}>7</button>
          <button type="button" onClick={this.clickEvent}>8</button>
          <button type="button" onClick={this.clickEvent}>9</button>
          <button type="button" className="orange" onClick={this.clickEvent}>x</button>
          <button type="button" onClick={this.clickEvent}>4</button>
          <button type="button" onClick={this.clickEvent}>5</button>
          <button type="button" onClick={this.clickEvent}>6</button>
          <button type="button" className="orange" onClick={this.clickEvent}>-</button>
          <button type="button" onClick={this.clickEvent}>1</button>
          <button type="button" onClick={this.clickEvent}>2</button>
          <button type="button" onClick={this.clickEvent}>3</button>
          <button type="button" className="orange" onClick={this.clickEvent}>+</button>
          <button type="button" className="zero" onClick={this.clickEvent}>0</button>
          <button type="button" onClick={this.clickEvent}>.</button>
          <button type="button" className="orange" onClick={this.clickEvent}>=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;
