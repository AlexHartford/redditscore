import React, { Component } from 'react';
import logo from './logo.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div id="userInput" style={{"padding-top": "10vmin"}}>
          <TextField>
            
          </TextField>
        </div>
        <div style={{"padding-top": "1vmin", "width": "100vmin"}}>
          <Button variant="contained" color="primary">
            Predict Score!
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
