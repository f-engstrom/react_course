import React, {Component} from 'react';
import './App.css';
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
    
    
    state = {animal:"dag"}
    
    animalHandler =(event)=>{
        
        this.setState({animal:event.target.value});
    }
    
    render() {
        return (
            <div className="App">
                <UserOutput animal={this.state.animal}/>
                <UserInput animal={this.state.animal} change={this.animalHandler}/>
            </div>
        );
    }
}

export default App;
