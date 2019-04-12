import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <header className="nav-header">
          <form className="nav-form">
            <label className="nav-name">
                <input type="text" name="name" placeholder="name"/>
            </label>
            <br /><br />
            <label className="nav-pass">
                <input type="password" name="password" placeholder="password"/>
            </label>
                <button className="nav-send" type="submit" value="Submit">send</button>
          </form>
        </header>
      </div>
    );
  }
}

export default Nav;