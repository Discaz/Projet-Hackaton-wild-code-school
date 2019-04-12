import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'
import DisplayProfile from './components/displayProfile'
<<<<<<< HEAD
=======
import DisplayAbdou from './components/displayAbdou'

>>>>>>> 039cdabbd138bbf56abe7f8ea0ba6d60f2c5afd1
import Category from './components/Category'

class App extends Component {

  state ={
    profile: [],
    loading: true
  }

  getProfile = (e) => {

    fetch('https://melroune.github.io/starwars-api/api/all.json')
    .then(res => res.json())
    .then(res => console.log(res) || this.setState({ profile: res, loading:false}))

  }

  componentDidMount() {
    this.getProfile()
  }
  
  render() {
<<<<<<< HEAD
=======

>>>>>>> 039cdabbd138bbf56abe7f8ea0ba6d60f2c5afd1
    if (this.state.loading) {
      return (<div>loading</div>)

    } else {
      return (
        <div className="App">
          <div className="background">
  
            <Nav />
          </div>
          <Category />
<<<<<<< HEAD
          <DisplayProfile profile={this.state.profile}/>
        </div>
      );
    }
  
=======
          <div className="displayCards">
          
          <div >
          <DisplayProfile profile={this.state.profile}/>
          </div>
          
          <div>
          <DisplayAbdou />
          </div>
          </div>
        </div>
      );
    }
>>>>>>> 039cdabbd138bbf56abe7f8ea0ba6d60f2c5afd1
  }
}

export default App;
