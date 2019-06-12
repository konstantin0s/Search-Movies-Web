import React, { Component } from 'react';
import './App.css';
import cartoon from './cartoon.png';
import MovieRow from './components/MovieRow';

const movies = [
  { id: 0, img_src: 'http://watchingmovies.getenjoyment.net/images/cartoons/bugs-bunny.jpg', title: 'Bugs Bunny', overview: 'The Wabbit Who Came To Supper' },
  { id: 1, img_src: 'http://watchingmovies.getenjoyment.net/images/cartoons/bugsy.jpg', title: 'Bugs Bunny', overview: 'Falling Hare' },
  { id: 2, img_src: 'http://watchingmovies.getenjoyment.net/images/cartoons/daffyx.png', title: 'Looney Tunes', overview: 'Confusions Nutzy Spy' }
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        <p>This is my row</p>
      ]
     };
  }

componentWillMount() {
  var movieRows = [];
  movies.map(movie => {
    const movieRow = <MovieRow
    movie={movie}
    />
   movieRows.push(movieRow)
  })
  this.setState({ rows: movieRows});
}

  render() {
    return (
          <div className="App">
<table className="titleBar">
  <tbody>
    <tr>
      <td>
        <img style={{width: '40px'}} src={cartoon} />
      </td>
      <td>
                <h1> MoviesDB Search</h1>
      </td>
      <td style={{width: '8px'}}>

      </td>
    </tr>
  </tbody>
</table>
<input className="input" type="text" placeholder="Search..." />

{this.state.rows}
    </div>
    );
  }
}

export default App;