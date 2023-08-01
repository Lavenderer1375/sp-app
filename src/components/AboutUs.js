import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Programmers from './Programmers';
import Drivers from './Drivers';

export default class AboutUs extends Component {
  reset = () => {
    this.props.history.replace('/blogs');
    // this.props.history.push('/blogs')
  };
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <button onClick={this.reset}>Reset</button>
        <ul>
          <li>
            <Link to="/aboutus/programmers">Programmers</Link>
          </li>
          <li>
            <Link to="/aboutus/drivers">Drivers</Link>
          </li>
        </ul>
        <div>
          <Route path="/aboutus/programmers" component={Programmers} />
          <Route path="/aboutus/drivers" component={Drivers}/>
        </div>
      </div>
    );
  }
}
