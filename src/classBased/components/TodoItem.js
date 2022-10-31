import React from "react";
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  componentWillUnmount = () => {
    console.log('Cleaning up...')
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = e => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false
      });
    }
  };

  render() {
    const { todo, handleChangeProps, delTodoProps, setUpdate } = this.props;

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}> 
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
            className={styles.checkbox}
          />
          <button 
            type="button"
            onClick={() => delTodoProps(todo.id)}
          >
            Delete
          </button>
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <input type="text" className={styles.textInput} style={editMode} value={todo.title} onChange={e => {
          setUpdate(e.target.value, todo.id)
        }} onKeyDown={this.handleUpdatedDone} />
      </li>
    );
  }
}

export default TodoItem