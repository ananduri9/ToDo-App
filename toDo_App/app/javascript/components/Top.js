var React = require('react');
var PropTypes = require('prop-types');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var NavLink = require('react-router-dom').NavLink;
var List = require('./List');
var Notes = require('./Notes');
var Form = require('./Form');
var NoteForm = require('./NoteForm');


function Top (props) {
	var name = props.name;
	var listRoute = '/users/' + props.uid
	var notesRoute = '/users/notes'

	return (
		<div>
			<p className="listheader">Hello {name}</p>
			<p>What do you need to get done today?</p>
			<Router>
				<div className='container'>
					<div className="reactRouterList">
						<NavLink exact activeClassName="active" className="activeList" to={listRoute}>
						  To Do
						</NavLink>
						<NavLink activeClassName="active" className="activeList" to={notesRoute}>
						  Notes
						</NavLink>
					</div>
					
					<Route exact path={listRoute} component={() => <List array={props.array} uid={props.uid}/>}/>
					<Route exact path={listRoute} component={() => <Form id={props.uid}/>}/>


					<Route path={notesRoute} component={() => <Notes array={props.noteArray} uid={props.uid} />}/>
					<Route path={notesRoute} component={() => <NoteForm id={props.uid}/>}/>
				</div>
			</Router>
		</div>
	)
}

Top.propTypes = {
	name: PropTypes.string.isRequired,
	uid: PropTypes.number.isRequired,
	array: PropTypes.array,
	noteArray: PropTypes.array
}

module.exports = Top;