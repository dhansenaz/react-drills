import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()


    this.state = {
      filterString: '',

      superHeroes: [
        "batman",
        "superman",
        "aquaman",
        "wonderwoman"
      ]

    }
  }
  handleChange(filter) {
    this.setState({ filterString: filter })
  }

  render() {
    let superHeroesToDisplay = this.state.superHeroes.filter( (element, index) => {
      return element.includes( this.state.filterString )
    }).map( (element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange(e.target.value)} type="text" />
        {superHeroesToDisplay}
      </div>
    );
  }
}

export default App;
