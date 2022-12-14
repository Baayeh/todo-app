import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: ''
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input type="text" className="input-text" placeholder="Add Todo..." name="title" value={this.state.title} onChange={this.onChange} />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    )
  }
}

export default InputTodo