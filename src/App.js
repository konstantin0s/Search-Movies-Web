import React, { Component } from 'react';
import './App.css';
import cartoon from './cartoon.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
          <div className="App">
<table>
  <tbody>
    <tr>
      <td>
        <img style={{width: '50px'}} src={cartoon} />
      </td>
      <td>
        MoviesDB Search
      </td>
    </tr>
  </tbody>
</table>
    </div>
    );
  }
}

export default App;