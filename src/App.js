import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }
  handleAddTask = task =>  {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
          <div>
            <h2>Welcome to your Todo App!</h2>
            <TodoForm handleAddTask={this.handleAddTask}/>
          </div>
          <div>
            <TodoList handleToggleTask={this.handleToggleTask} tasks={this.state.tasks}/>
            <button>Clear Completed</button>
        </div>
      </div>

    );
  }
}

export default App;
