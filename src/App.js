import React, { Component } from 'react';

import Search from './components/Search';
import Genre from './components/Genre';
import ShowContainer from './components/ShowContainer';

const baseURL = 'https://api.tvmaze.com/shows'

export default class App extends Component {

  state = {
    shows : [],
    search : ""
  }

  componentDidMount(){
    fetch(baseURL)
    .then(response => response.json())
    .then(result => {
      this.setState({ shows : result})
    })
  }


  handleSearch = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({ [name] : value })
  }

  filteredShows = () => {
    return this.state.shows.filter(show => {
      if(this.state.search === ''){
        return true
      } else {
        return show.name.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })
  }


  render() {
    return (
      <div className="App"> 
        <div className="filters">
          <Search handleSearch={ this.handleSearch }/>
          <Genre shows={ this.state.shows }/>
        </div>
        <ShowContainer  shows={ this.filteredShows() }/>
      </div>
    )
  }
}

