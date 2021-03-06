import React, { Component } from 'react';
import './App.css';
import cartoon from './cartoon.png';
import MovieRow from './components/MovieRow';
import $ from 'jquery';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  componentWillMount() {
    this.performSearch("ant man")
  }


  performSearch(searchTerm) {
    // console.log("Perform search using moviedb")
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=` + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        // console.log("Fetched data successfully")
        console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        var movieRows = []

        results.map((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchHandler = (e) => {
    const searchTerm = e.target.value;
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody className="tbody">
            <tr>
              <td>
                <img className="float-left logo" src={cartoon} />
              </td>
              <td>
                <h2 className="title">MoviesDB - Search </h2>
              </td>
              <td style={{ width: '8px' }}>

              </td>
            </tr>
          </tbody>
        </table>
        <div className="container">
          <div className="form-group">
            <input onChange={this.searchHandler} className="form-control input" type="text" placeholder="Search..." />
          </div>
        </div>

        {
          this.state.rows
        }
      </div>
    );
  }
}

export default App;