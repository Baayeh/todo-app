import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    const { todos, handleChangeProps, delTodoProps, setUpdate } = this.props;
    return (
      <ul>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} delTodoProps={delTodoProps} setUpdate={setUpdate} />
          ))
        }
      </ul>
    );
  }
}

export default TodoList