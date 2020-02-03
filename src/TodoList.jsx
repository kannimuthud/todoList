import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import './todoList.css';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.ticked = this.ticked.bind(this);
    this.unticked=this.unticked.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        done: false,
      };

      this.setState((state) => {
        return {
          items: state.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";
    // console.log(this.state.items);
    e.preventDefault()
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems

    });
  }
  ticked(key) {

    let a = this.state.items.map((val) => {
      if (val.key === key) {
        val.done = !val.done
      }
      return val;
    })
    this.setState({
      items: a

    })
    console.log(this.state.items)
  }
  unticked(key) {

    let b = this.state.items.map((val) => {
      if (val.key === key) {
        val.done = false
      }
      return val;
    })
    this.setState({
      items: b

    })
    console.log(this.state.items)
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input id="val" ref={(a) => this._inputElement = a} placeholder="Enter item"></input>

            <button type="submit" > add </button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
          delete={this.deleteItem}
          tick={this.ticked}
          untick={this.unticked} />
      </div>);
  }
}

export default TodoList;