import React from 'react';
import './App.css';
import DisplayEmployee from "./DisplayEmployee";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: null
    };
  }

  componentDidMount = () => {
    this.getEmployee();
  };

  getEmployee = () => {
    // Send the request
    axios.get('https://randomuser.me/api?nat=fr')
    // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
          this.setState({
            employee: data.results[0],
          });
        });
  };

  render() {
    return (
        <div className="App">
          {
            this.state.employee ? (
              <DisplayEmployee employee={this.state.employee} /> ) :
                ( <p>No data yet</p> )
          }
          <button type="button" onClick={this.getEmployee}>Get employee</button>
        </div>
    );
  }
}

export default App;
