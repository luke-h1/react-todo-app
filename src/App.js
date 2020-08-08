/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: [],
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({
      [key]: value,
    });
  }




  addItem() {
    // create item w/ unique id
    const newItem = { 
      value: this.state.newItem.slice()
    };
    // copy of current list
    const list = [...this.state.list];
    // add item to list
    list.push(newItem);

    // update state w/ new list item & reset newItem input

    this.setState({
      list,
      newItem: '',
    });
  }

  deleteItem(id) {
  // copy current copy of list of items
    const list = [...this.state.list];

    // filter out item that is being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({list: updatedList});
  }

  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <div className="App">
        <div>
          Add an Item...
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput('newItem', e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add</button>
          <br />
          <ul>
            {this.state.list.map((item) => (
              <li>
                {item.value}
                <button
                  onClick={() => this.deleteItem(item.id)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
