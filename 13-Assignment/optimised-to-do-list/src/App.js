import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unfinishedTasks: [],
      finishedTasks: [],
      newTask: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    const { newTask, unfinishedTasks } = this.state;
    if (newTask.trim() !== "") {
      this.setState({
        unfinishedTasks: [
          ...unfinishedTasks,
          { id: Date.now(), text: newTask },
        ],
        newTask: "",
      });
    }
  };

  finishTask = (task) => {
    this.setState((prevState) => ({
      finishedTasks: [...prevState.finishedTasks, task],
      unfinishedTasks: prevState.unfinishedTasks.filter(
        (t) => t.id !== task.id
      ),
    }));
  };

  unfinishTask = (task) => {
    this.setState((prevState) => ({
      unfinishedTasks: [...prevState.unfinishedTasks, task],
      finishedTasks: prevState.finishedTasks.filter((t) => t.id !== task.id),
    }));
  };

  render() {
    const { unfinishedTasks, finishedTasks, newTask } = this.state;

    return (
      <div className="App">
        <h1>დავალებების სია</h1>
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={this.handleInputChange}
            placeholder="დაამატეთ დავალება"
          />
          <button onClick={this.addTask}>დაამატეთ დავალება</button>
        </div>
        <div className="task-lists">
          <div className="task-list">
            <h2>შესასრულებელი დავალებები</h2>
            <ul>
              {unfinishedTasks.map((task) => (
                <li key={task.id}>
                  {task.text}
                  <button onClick={() => this.finishTask(task)}>
                    დაასრულეთ დავალება
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="task-list">
            <h2>დასრულებული დავალებები</h2>
            <ul>
              {finishedTasks.map((task) => (
                <li key={task.id}>
                  {task.text}
                  <button onClick={() => this.unfinishTask(task)}>
                    შესასრულებელი დავალებების სიაში გადატანა
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
