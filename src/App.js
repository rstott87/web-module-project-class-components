import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './Todo.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }
  handleClearPurchased = ()=> {
    //1. Capture our click
    //2. Change our state setState
    //3. Retain our previous state.
    //4. change groceries: remove all items where purchased == true

    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(item => {
        return !item.completed;
      })
    });
  }
  handleToggleTask = (selectedItem) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(item => {
        if(item.id === selectedItem.id) {
          return({
            ...item,
            completed: !item.completed
          })
        } else {
          return item;
        }
      })
    });
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

  render() {
    return (
      <div>
          <div>
            <h2>Welcome to your Todo App!</h2>
            <TodoForm handleAddTask={this.handleAddTask}/>
          </div>
          <div>
            <TodoList handleToggleTask={this.handleToggleTask} tasks={this.state.tasks}/>
            <button onClick={this.handleClearPurchased}className="clear-btn">Clear Purchased</button>
        </div>
      </div>

    );
  }
}

export default App;
