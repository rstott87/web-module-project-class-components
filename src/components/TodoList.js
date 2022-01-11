// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
class TodoList extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <div>
                {this.props.tasks.map(
                    item => ( <Todo handleToggleTask={this.props.handleToggleTask} task={item} key={item.id} />)
                )}
            </div>
        )
    }
  };

export default TodoList