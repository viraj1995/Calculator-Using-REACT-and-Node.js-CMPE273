import React, { Component } from 'react';
import './App.css';
import './display';
import Display from './display';
import Answer from './answer';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        result:''
    }
}
  handleResult(result){
    this.setState({
      result:result
    })
  }

  render() {
    return (
      <div className="App">

        <Display sendResult={this.handleResult.bind(this)}/>
        <div>
          <Answer  result={this.state.result}/>
        </div>

      </div>


    );
  }
}
export default App;
