import { Component } from 'react';

export class Filter extends Component {
  handleFilter = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input onChange={this.handleFilter} placeholder="Enter name" />
      </div>
    );
  }
}
