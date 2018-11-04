import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import ButtonAppBar from './ButtonAppBar';
import Result from './Result';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: deepOrange,
  },
  status: {
    danger: 'red',
  },
});

const makeItDeepOrange = createMuiTheme({
  palette: {
    primary: deepOrange
  }
})

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      loading: false,
      score: '',
      input: '',
    }

    this.predict = this.predict.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  predict() {
    this.setState({score: ''});
    this.setState({loading: true}, () => {
      setTimeout(() => {
        this.setState({score: Math.floor(Math.random() * 300) - 100})
      this.setState({loading: false});
      }, 1500);
    });
  };

  renderResult() {
    if (this.state.score !== '') {
      return (
        <Result score={this.state.score}/>
      )
    }
  }

  handleInput(e) {
    this.setState({
        input: e.target.value
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <ButtonAppBar></ButtonAppBar>
        <div className="App" style={{"textAlign": "center"}}>
          <Card fullwidth='true' style={{height: '80px', background: '#FF5722'}}>
          <CardContent>
            <Typography variant="h5" style={{color: '#ffffff', fontWeight: 'bold'}} gutterBottom>
              A machine learning approach to predicting how badly you'll get roasted for your sub-par reddit comments
            </Typography>
          </CardContent>
          </Card>
          <div id="userInput" style={{"padding": "10vmin"}}>
            <MuiThemeProvider theme={makeItDeepOrange}>
              <TextField fullWidth autoFocus placeholder='What are your thoughts?' onChange={this.handleInput} value={this.state.input}/>
            </MuiThemeProvider>
          </div>
          <div>
            <Button variant="contained" color="secondary" style={{fontWeight: 'bold'}} disabled={this.state.loading || this.state.input === ''} onClick={this.predict}>
              Submit Comment
            </Button>
          </div>
          <br/>
          <br/>
          <br/>
          <div>
            {this.renderResult()}
          </div>
          <div>
            <Fade
              in={this.state.loading}
              style={{
                transitionDelay: this.state.loading ? '600ms' : '0ms',
              }}
              unmountOnExit
            >
              <CircularProgress color="secondary"/>
            </Fade>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
