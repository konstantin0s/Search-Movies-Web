import React from 'react'

class MovieRow extends React.Component {

  viewMovie = () => {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table className="container" key={this.props.movie.id}>
    <tbody className="row">
      < tr className = "col col-md-12" >
        <td>
          <img alt="poster" width="120" src={this.props.movie.poster_src}/>
        </td>
        <td>
          <h3>{this.props.movie.title}</h3>
          <p className="overview">{this.props.movie.overview}</p>
          <input className="btn btn-primary" type="button" onClick={this.viewMovie} target="_blank" value="View"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow