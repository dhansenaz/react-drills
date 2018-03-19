import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()


    this.state = {
      movies:
      [
      "Black Panther",
      "Tomb Raider",
      "Saving Private Ryan",
      "Captain America"
    ]
  }
  }
  render() {
    let moviesToDisplay = this.state.movies.map((element,index)=>{
        return(
          <h2 key={index}>{element}</h2>
        )
    })
    return (
      <div className="App">
        {moviesToDisplay}
      </div>
    );
  }
}

export default App;
