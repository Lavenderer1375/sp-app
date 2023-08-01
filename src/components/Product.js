import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const {id} = this.props.match.params
    return (
      <div>
        <h1>This is product number: {id}</h1>
      </div>
    );
  }
}
