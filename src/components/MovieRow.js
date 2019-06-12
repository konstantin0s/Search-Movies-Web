import React, { Component } from 'react'

class MovieRow extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
<div>
      const movieRow = <table>
    <tbody key={this.props.movie.id}>
  <tr>
    <td>
            <img className="poster" alt="poster" src={this.props.movie.img_src} />     </td>           <td>             <h2>{this.props.movie.title}</h2>           </td>
          <td>
            <p>{this.props.movie.overview}</p>
          </td>
  </tr>
</tbody>     </table>
</div>
    );
  }
}

export default MovieRow;