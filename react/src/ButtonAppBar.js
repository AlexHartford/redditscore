import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitlabIcon from './assets/gitlab-icon.png';
import RedditIcon from './assets/reddit-icon.png';
import RedditScoreLogo from './assets/redditscore-logo.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" className={classes.button} width='auto' href='http://reddit.com' target='_blank'>
            <img src={RedditIcon} className="reddit" alt="Reddit" style={{height: '50px', width: '50px'}}/>
          </Button>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <img src={RedditScoreLogo} className="logo" alt="redditscore" style={{height: 'auto', width: 'auto', maxHeight: '5%', maxWidth: '10%', marginLeft: 'auto'}}/>
          </Typography>
          <Button color="inherit" className={classes.button} width='auto' href='https://gitlab.com/alex_hartford/redditscore/' target='_blank'>
            <img src={GitlabIcon} className="gitlab" alt="Gitlab"/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);