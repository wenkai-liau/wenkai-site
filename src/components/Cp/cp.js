import { Grid, makeStyles, Tab, Tabs, Tooltip, Typography, } from '@material-ui/core';
import { AccessTime, Code } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import codeforces from "../../images/codeforces.png"
import leetcode from "../../images/leetcode.png"
import TabPanel from '../../common/tabPanel';
import CodeforcesPage from './codeforcesPage';
import UpcomingEventPage from './upcomingEventPage';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '2% 1%',
    // backgroundColor: 'grey'
  },
  imgContainer: {
    display: 'flex',
    height: 400,
    justifyContent: 'center'
  },
}));

const CP = (props) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(3);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const createText = (text, icon) => {
    return (
        <Grid container item alignItems="center">
            {icon}
            <Typography variant="caption" style={{marginLeft: 5}}>
            {text}
            </Typography>
        </Grid>
    )
  }

    return (
        <Grid item container className={classes.container}>

        <Tabs onChange={handleTabChange} value={tabValue} textColor="primary" indicatorColor="primary">
            <Tab className={classes.tabStyles} value={0} label={createText("Leetcode", <img item src={leetcode} width={24} height={24} style={{alignSelf: 'center'}}/>)}/>
            <Tab className={classes.tabStyles} value={1} label={createText("Atcoder", <Code/>)}/>
            <Tab className={classes.tabStyles} value={2} label={createText("Codeforces", <img item src={codeforces} width={24} height={24} style={{alignSelf: 'center'}}/>)}/>
            <Tab className={classes.tabStyles} value={3} label={createText("Upcoming", <AccessTime/>)}/>
        </Tabs>

        <TabPanel value={tabValue} index={0}>
            Item One
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
            <CodeforcesPage/>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <UpcomingEventPage/>
        </TabPanel>

        </Grid>
    )
}

export default CP;