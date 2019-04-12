import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'
import DisplayProfile from './components/displayProfile'
import DisplayAbdou from './components/displayAbdou'

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
          <div className="displayCards">
          
          <div>
          <DisplayProfile profile={this.state.profile}/>
          </div>
          <div>
          <DisplayAbdou />
          </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
