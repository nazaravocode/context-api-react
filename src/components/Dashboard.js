import React, {Component} from 'react';
import TodoCard from './TodoCard'

class Dashdoard extends Component {
    state = {
        items: []
};
    render() {
        return <div className='dashboard'>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
            </div>
    }
}

export default Dashdoard;