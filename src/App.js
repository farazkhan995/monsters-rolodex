import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
class App extends Component  {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((users) => this.setState({monsters:users}));
  }
  
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster)=> 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <input className= "search-box" type= "search" placeholder='search monster' onChange={(event) => {
        this.setState({searchField: event.target.value})
      }} />
      <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
  }
 

export default App;
