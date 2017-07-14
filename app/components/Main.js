import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { fetchStudents } from '../reducers/students'
import { fetchCampuses } from '../reducers/campuses'

import NewCampus from './NewCampus'
import NewStudent from './NewStudent'
import CurrentCampus from './CurrentCampus'
import CurrentStudent from './TheCurrentStudent';
import Campus from './Campus';
import Student from './Student';
import Home from './Home';
import Navbar from './Navbar';
import store from '../store';

export default class Main extends Component {

	componentDidMount(){
		const allStudents = fetchStudents()
		const allCampuses = fetchCampuses()
		store.dispatch(allStudents);
		store.dispatch(allCampuses);
	}

	render (){
		return (
			<BrowserRouter>
			<div>
			<Navbar />
				<Switch>
					<Route path='/making-campus' component={NewCampus} />
					<Route path='/making-student' component={NewStudent} />
					<Route path='/campuses/:campusId' component={CurrentCampus} />
					<Route path='/students/:studentId' component={CurrentStudent} />
					<Route path="/campuses" component={Campus} />
					<Route path="/students" component={Student} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
			</BrowserRouter>
		)
	}
}