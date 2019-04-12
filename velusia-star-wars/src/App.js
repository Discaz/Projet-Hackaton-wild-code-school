import React, { Component } from 'react';
import './App.css';
import Flowers from './components/Flowers'
import Nav from './components/nav'
import DisplayProfile from './components/displayProfile'
import DisplayAbdou from './components/displayAbdou'

import Category from './components/Category'

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
          <div className="background">
            <Nav />
          </div>
          <Category />
          <div className="displayCards">
          
          <div >
          <DisplayProfile profile={this.state.profile}/>
          </div>
          
          <div>
          <DisplayAbdou />
          </div>
          </div>
          <Flowers />

        </div>
      );
    }
  }
}

export default App;
