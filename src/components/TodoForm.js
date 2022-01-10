
import React from "react";

class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
        }
    }
    
    changeHanlder = e => {
        this.setState({
            input: e.target.value,
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTask(this.state.input);
        this.setState({
            input: ''
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name="mainInput" 
                    value={this.state.input}
                    onChange={this.changeHanlder} />
                    <button>Add ToDo</button>
                </label>
            </form>
        )
    }
};

export default TodoForm;