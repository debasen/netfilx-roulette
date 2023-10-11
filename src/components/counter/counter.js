import React from 'react';
import './counter.css';
class Counter extends React.Component {
    constructor(props){  
        super(props)    
        this.state = {count : 0}  
        this.incrementCount = this.incrementCount.bind(this)
        this.decrementCount = this.decrementCount.bind(this) 
      }  
        
      incrementCount(){  
        let i=this.state.count;
        i++;
        this.setState({count : i})  
      } 
      decrementCount(){  
        let i=this.state.count;
        i--;
        this.setState({count : i})  
      }  
    render() {
      return (
        <div className="counter-container">
        <button className="decrement" onClick={this.decrementCount}>-</button>
        <div className="number">{this.state.count}</div>
        <button className="increment" onClick={this.incrementCount}>+</button>
    </div>
      );
    }
  }

  export default Counter;