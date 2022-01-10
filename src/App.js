import React from 'react';
import TodoForm from './components/TodoForm';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }
  handleAddTask = task => {
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
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddTask={this.handleAddTask}/>
      </div>
    );
  }
}

export default App;
