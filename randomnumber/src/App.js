import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello World!</h2>
                </div>
                <Body />
            </div>
        );
    }
}



class Body extends Component {
    constructor(props){
        super(props);

        this.state = {
            r: 0
        };
        this.getRandomNumber = this.getRandomNumber.bind(this);
    }

    getRandomNumber(){
        this.setState({r: Math.floor(Math.random()*10) })
    }

    render(){
        return(
            <div>
                <p className="App-intro">
                    Click the below button to generate random numbers
                </p>
                <button onClick={this.getRandomNumber}> Random Number</button>
                <Numbers myNumber={this.state.r}/>

            </div>
        );
    }
}


export default App;