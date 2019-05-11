import React, {Component} from 'react';
import {TitleConsumer} from "../Context";

class TodoCard extends Component {
    render() {
        return (
            <TitleConsumer>
                {({title,text,clickHandler}) => (
                    <div className='todo-card'>
                        <h1>{title}</h1>
                        <div>{text}</div>
                        <button onClick={clickHandler} > Click me</button>
                    </div>)}
            </TitleConsumer>)
    }
}

export default TodoCard;