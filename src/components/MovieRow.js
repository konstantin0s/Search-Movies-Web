import React from 'react';
import axios from 'axios';

const imageUrl = "https://www.themoviedb.org/movie/"

class MovieRow extends React.Component {
  state = {
    data: []
  }

  viewMovie = () => {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }


  render() {
    return (
      <div className="masterbody">
        <table className="container" key={this.props.movie.id}>
          <tbody className="row">
            <tr className="col-md-12 body-container"
            >
              <td className="vote">
                <h4 className="pws">Vote Average: </h4>

                <div className="percent">
                  <div className="isvote">
                    <h4> {this.props.movie.vote_average} </h4>
                  </div>
                </div>

              </td>
              <td className="image-container">
                <img className="img-fluid rounded" alt="poster" src={this.props.movie.poster_src} />
              </td>
              <td className="desc-container">

                <h3><i className="fa fa-quote-left"></i>
                  {
                    this.props.movie.title
                  }
                  <i className="fa fa-quote-right"></i>
                </h3>
                <h4 className="language">Language: {this.props.movie.original_language.toUpperCase()}</h4>
                <p className="overview">{this.props.movie.overview}</p>
                <h3 className="relesead">Released Date: {this.props.movie.release_date}</h3>
                <div className="view-button">
                  <a className="btn btn-primary view" href="!#"
                    onClick={this.viewMovie} target="_blank"
                  >View More</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default MovieRow;