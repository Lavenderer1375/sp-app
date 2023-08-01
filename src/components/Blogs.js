import React, { Component } from 'react';
import querString from 'query-string';

export default class Blogs extends Component {
  parseQuery = () => {
    console.log(this.props.location.search);
    const result = querString.parse(this.props.location.search)
    console.log(result);
  };
  render() {
    const { author } = this.props.match.params;
    return (
      <div>
        <h1>Blogs:</h1>
        <p>The author is: {author}</p>
        <button onClick={this.parseQuery}>Show Query</button>
      </div>
    );
  }
}
