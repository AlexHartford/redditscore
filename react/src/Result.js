import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import upvote from './assets/upvote.png';
import downvote from './assets/downvote.png';
import upvoteGray from './assets/upvote-gray.png';
import downvoteGray from './assets/downvote-gray.png';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
};

function displayScore(score) {
  if (score <= 0) 
  {
    return (
      <div>
        <img src={upvoteGray} className="upvoteGray" alt="upvoteGray" style={{height: '48px', width: 'auto'}}/>
        <div style={{color: '#505CA1', fontSize: '48px', fontWeight: 'bold'}}>{score}</div>
        <img src={downvote} className="downvote" alt="downvote" style={{height: '48px', width: 'auto'}}/>
      </div>
    );
  } 
  else if (score > 1) 
  {
    return (
      <div>
        <img src={upvote} className="upvote" alt="upvote" style={{height: '48px', width: 'auto'}}/>
        <div style={{color: '#FF5722', fontSize: '48px', fontWeight: 'bold'}}>{score}</div>
        <img src={downvoteGray} className="downvoteGray" alt="downvoteGray" style={{height: '48px', width: 'auto'}}/>
      </div>
    );
  }
  return (
    <div>
      <img src={upvoteGray} className="upvoteGray" alt="upvoteGray" style={{height: '48px', width: 'auto'}}/>
      <div style={{color: '#878A8C', fontSize: '48px', fontWeight: 'bold'}}>{score}</div>
      <img src={downvoteGray} className="downvoteGray" alt="downvoteGray" style={{height: '48px', width: 'auto'}}/>
    </div>
  );
}

function Result(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div>
        {displayScore(props.score)}
      </div>
    </div>
  );
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Result);