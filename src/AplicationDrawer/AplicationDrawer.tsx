import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from "../screens/Dashboard";
  
  const useStyles = makeStyles(() => ({
	pageContainer: {
		minHeight: '100%',
	},
	RoutingElements: {
		overflow: 'auto',
	},
	AplicationBar: {
		position: 'relative',
		marginBottom: '-64px',
		clear: 'both',
	},
}));

const AplicationDrawer = ()  => {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.pageContainer}>
                <div className={classes.AplicationBar}>
                    <AppBar/>
                </div>
                <div className={classes.RoutingElements}>
                    <Switch>
                        <Route path='/' exact component={Dashboard} />
                    </Switch>  
                </div>
            </div>
        </Router>
  );
};

export default AplicationDrawer;
