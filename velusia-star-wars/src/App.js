import React, { Component } from 'react';

import './App.css';
import DisplayProfile from './components/displayProfile'


class App extends Component {

  state ={
    profile: [],
    loading: true
  }

  getProfile = () => {
    fetch('https://melroune.github.io/starwars-api/api/all.json')
    .then(res => res.json())
    .then(res => this.setState({ profile: res, loading:false}))

  }

  componentDidMount() {
    this.getProfile()
  }
  
  render() {
    if (this.state.loading) {
      return (<div>loading</div>)

    } else {
      return (
        <div className="App">
          <DisplayProfile profile={this.state.profile}/>
        </div>
      );
    }
  }
}

export default App;
