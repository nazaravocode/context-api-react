import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {TitleProvider} from './Context';

class  App extends Component {
    state = {
        title: 'app',
        text: " hello"
    };
    clickHandler = () => {this.setState({title: 'After Click'})}
    acha = "Acha";
 render() {
     return (
         <TitleProvider value={{ text:this.state.text,
             title: this.state.title,
             clickHandler: this.clickHandler}}>
             <Dashboard/>
         </TitleProvider>

     )

 }

}

export default App;
