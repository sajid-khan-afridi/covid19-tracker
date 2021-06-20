import React, {useEffect, useState} from 'react';
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

  const [globalData, setGlobalData]=useState();
  
  useEffect(()=>{
    async function fetchGlobalData(){
      const apiResponse=await fetch('https://api.covid19api.com/summary');
      const dataFromAPI=await apiResponse.json();
      // console.log(dataFromAPI.Global.NewConfirmed);
      console.log(dataFromAPI.Global);
      setGlobalData(dataFromAPI);
    }
  fetchGlobalData();
  },[])

  return (
    <div className={classes.root}>
      {/* <Paper elevation={0} />
      <Paper /> */}
        <Paper elevation={3}>
          <Typography variant="h4" gutterBottom style={{color: 'black'}}>
           {globalData&&globalData.Global&&globalData.Global.TotalConfirmed} 
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'black' , fontWeight:'bold'}}>
              Global Data as of Today
          </Typography>
        </Paper>

        <Paper elevation={3}>
        <Typography variant="h4" gutterBottom style={{color: 'orange'}}>
            {globalData&&globalData.Global&&globalData.Global.NewConfirmed}
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'orange' , fontWeight:'bold'}}>
              Active
          </Typography>

        </Paper>

        <Paper elevation={3}>
        <Typography variant="h4" gutterBottom style={{color: 'green'}}>
              {globalData&&globalData.Global&&globalData.Global.TotalRecovered}
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'green' , fontWeight:'bold'}}>
              Recovered
          </Typography>
          
        </Paper>

        <Paper elevation={3}>
        <Typography variant="h4" gutterBottom style={{color: 'red'}}>
        {globalData&&globalData.Global&&globalData.Global.TotalDeaths}
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'red' , fontWeight:'bold'}}>
              Fatalities
          </Typography>
        </Paper>
    </div>
  );
}