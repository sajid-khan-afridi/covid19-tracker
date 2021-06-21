import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';


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

  const [dataLoading, setDataLoading]=useState(false);
  
  useEffect(()=>{
    setDataLoading(true);
    async function fetchGlobalData(){
    const apiResponse=await fetch('https://api.covid19api.com/summary');
    const dataFromAPI=await apiResponse.json();
      // console.log(dataFromAPI.Global.NewConfirmed);
    console.log(dataFromAPI.Global);
    setGlobalData(dataFromAPI);
    setDataLoading(false);
    }
  fetchGlobalData();
  },[])

  const loading="Loading...";

  if(dataLoading){
    return (
      <div className={classes.root}>
        {/* <Paper elevation={0} />
        <Paper /> */}
          <Paper elevation={3}>
            <Typography variant="h4" gutterBottom style={{color: 'black'}}>
              {loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color: 'black' , fontWeight:'bold'}}>
                Global Data as of Today
            </Typography>
          </Paper>
  
          <Paper elevation={3}>
          <Typography variant="h4" gutterBottom style={{color: 'orange'}}>
              {loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color: 'orange' , fontWeight:'bold'}}>
                Active
            </Typography>
  
          </Paper>
  
          <Paper elevation={3}>
          <Typography variant="h4" gutterBottom style={{color: 'green'}}>
                {loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color: 'green' , fontWeight:'bold'}}>
                Recovered
            </Typography>
            
          </Paper>
  
          <Paper elevation={3}>
          <Typography variant="h4" gutterBottom style={{color: 'red'}}>
                 {loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color: 'red' , fontWeight:'bold'}}>
                Fatalities
            </Typography>
          </Paper>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {/* <Paper elevation={0} />
      <Paper /> */}
        <Paper elevation={3}>
          <Typography variant="h4" gutterBottom style={{color: 'black'}}>
          <NumberFormat value={globalData&&globalData.Global&&globalData.Global.TotalConfirmed} displayType={'text'} thousandSeparator={true} />
            
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'black' , fontWeight:'bold'}}>
              Global Data as of Today
          </Typography>
        </Paper>

        <Paper elevation={3}>
        <Typography variant="h4" gutterBottom style={{color: 'orange'}}>

        <NumberFormat value={globalData&&globalData.Global&&globalData.Global.NewConfirmed} displayType={'text'} thousandSeparator={true} />
            
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'orange' , fontWeight:'bold'}}>
              Active
          </Typography>

        </Paper>

        <Paper elevation={3}>
        <Typography variant="h4" gutterBottom style={{color: 'green'}}>

        <NumberFormat value={globalData&&globalData.Global&&globalData.Global.TotalRecovered} displayType={'text'} thousandSeparator={true} />

              
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'green' , fontWeight:'bold'}}>
              Recovered
          </Typography>
          
        </Paper>

        <Paper elevation={3}>
        <Typography variant="h4" gutterBottom style={{color: 'red'}}>
        <NumberFormat value={globalData&&globalData.Global&&globalData.Global.TotalDeaths} displayType={'text'} thousandSeparator={true} />
        
          </Typography>
          <Typography variant="subtitle2" gutterBottom style={{color: 'red' , fontWeight:'bold'}}>
              Fatalities
          </Typography>
        </Paper>
    </div>
  );
}