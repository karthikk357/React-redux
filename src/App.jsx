import React, {Component } from 'react';
import Clock from './Clock';

import './App.css'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 26, 2017'
        }

    }
    changeDeadline(){
       this.setState({deadline: this.state.newDeadline});

    }
    render(){
        return(
            <div className="App">
                <div className="App-title">CountDown to {this.state.deadline}</div>
                <div>
                    <Clock
                    deadline={this.state.deadline}
                    />
                </div>
            <div>
                <input placeholder="new date"
                onChange={event => this.setState({newDeadline: event.target.value})}
                />
                <button onClick={() => this.changeDeadline()}>
                    Submit
                </button>
            </div>
            </div>
        )
    }
}
export default App;