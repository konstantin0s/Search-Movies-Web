import React from 'react'

class MovieRow extends React.Component {

  viewMovie = () => {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return (
      <div className="masterbody">
        <table className="container" key={this.props.movie.id}>
          <tbody className="row">
            < tr className="col-md-12" >
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
                <p className="overview">{this.props.movie.overview}</p>
                <input className="btn btn-primary" type="button" onClick={this.viewMovie} target="_blank" value="View" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default MovieRow;