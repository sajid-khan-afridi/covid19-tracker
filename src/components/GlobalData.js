import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

export default function GlobalData() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper elevation={0} />
      <Paper /> */}
        <Paper elevation={3}>
          <Typography variant="h4" gutterBottom>
              1000
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
              Global Data as of Today
          </Typography>
        </Paper>

        <Paper elevation={3}>
        <Typography variant="h4" gutterBottom style={{color: 'orange'}}>
              1000
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'orange' , fontWeight:'bold'}}>
              Active
          </Typography>

        </Paper>

        <Paper elevation={3}>
        <Typography variant="h4" gutterBottom style={{color: 'green'}}>
              1000
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'green' , fontWeight:'bold'}}>
              Recovered
          </Typography>
          
        </Paper>

        <Paper elevation={3}>
        <Typography variant="h4" gutterBottom style={{color: 'red'}}>
              1000
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'red' , fontWeight:'bold'}}>
              Fatalities
          </Typography>
        </Paper>
    </div>
  );
}