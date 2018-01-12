var React = require('react');
var PropTypes = require('prop-types');


class All extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			values: []
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(index){
		this.setState(function(){
			return {line: this.state.values.push(index)};
		})
		this.props.sendData(index);
	}

	render () {


	var array = this.props.array;
	var userid = this.props.uid;

		return (
			<ol className="todos">
				<ul className="first">
					<li className="listitem">Completed?</li>
			  		<li className="listitem" id="todo">To Do</li>
			  		<li className="listitem" id="deadline">Deadline</li>
			  		<li className="listitem" id="delete">Delete</li>
		  		</ul><br/>
				  {array.map(function(item, index){
				  	return (
				  		<div key={index}>
				  			{(this.state.values.includes(index)) 
						  	  ?	<div className="todoitem" style={{textDecoration:'line-through'}}>
						  			<input type="checkbox" onClick={this.handleChange.bind(null, index)} name="complete" value="react" /> 
				
							  		<p className="listitem" key={item}>{item.message}</p>
							  		<p className="listitem">{item.deadline}</p>


						  			<form acceptCharset="UTF-8" action="/to_dos" className="listitem" method="post">
							  			<input type="hidden" name="uid" value={userid} />
							  			<input type="hidden" name="tid" value={item.id} />
						  				<input className="bttn-delete" name="commit" type="submit" value="Delete" />
						  			</form>
						  		</div>
						  	  :	<div className="todoitem">
						  			<input type="checkbox" onClick={this.handleChange.bind(null, index)} name="complete" value="react" /> 
				
							  		<p className="listitem" key={item}>{item.message}</p>
							  		<p className="listitem">{item.deadline}</p>


						  			<form acceptCharset="UTF-8" action="/to_dos" className="listitem" method="post">
							  			<input type="hidden" name="uid" value={userid} />
							  			<input type="hidden" name="tid" value={item.id} />
						  				<input className="bttn-delete" name="commit" type="submit" value="Delete" />
						  			</form>
						  		</div>
						    }
					  	</div>
				  	)
				  }, this)}
			</ol>
		)
	}
}

All.propTypes = {
	uid: PropTypes.number.isRequired,
	array: PropTypes.array
}


class Active extends React.Component {

	render () {


	var array = this.props.array;
	var userid = this.props.uid;

		return (
			<ol className="todos">
				<ul className="first">
			  		<li className="listitem" id="todo">To Do</li>
			  		<li className="listitem" id="deadline">Deadline</li>
			  		<li className="listitem" id="delete">Delete</li>
		  		</ul><br/>
				  {array.map(function(item, index){
				  	return (
				  		<div className="todoitem" key={index}>
		
					  		<p id="todoelt" className="listitem" key={item}>{item.message}</p>
					  		<p className="listitem">{item.deadline}</p>


				  			<form acceptCharset="UTF-8" action="/to_dos" className="listitem" method="post">
					  			<input type="hidden" name="uid" value={userid} />
					  			<input type="hidden" name="tid" value={item.id} />
				  				<input className="bttn-delete" name="commit" type="submit" value="Delete" />
				  			</form>
				  		</div>
				  	)
				  }, this)}
			</ol>
		)
	}
}

Active.propTypes = {
	uid: PropTypes.number.isRequired,
	array: PropTypes.array
}

class Complete extends React.Component {


	render () {


	var array = this.props.array;
	var userid = this.props.uid;

		return (
			<ol className="todos">
				<ul className="first">
			  		<li className="listitem" id="todo">To Do</li>
			  		<li className="listitem" id="deadline">Deadline</li>
			  		<li className="listitem" id="delete">Delete</li>
		  		</ul><br/>
				  {array.map(function(item, index){
				  	return (
				  		<div className="todoitem" key={index}>
		
					  		<p id="todoelt" className="listitem" key={item}>{item.message}</p>
					  		<p className="listitem">{item.deadline}</p>


				  			<form acceptCharset="UTF-8" action="/to_dos" className="listitem" method="post">
					  			<input type="hidden" name="uid" value={userid} />
					  			<input type="hidden" name="tid" value={item.id} />
				  				<input className="bttn-delete" name="commit" type="submit" value="Delete" />
				  			</form>
				  		</div>
				  	)
				  }, this)}
			</ol>
		)
	}
}

Complete.propTypes = {
	uid: PropTypes.number.isRequired,
	array: PropTypes.array
}




class List extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			type: 'all',
			activated: props.array.slice(),
			completed: []
		}

		this.changeType = this.changeType.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
	}

	changeType(message){
		this.setState(function(){
			if (message === 'all'){
				return {type: 'all'};
			}
			else if (message === 'active'){
				return {type: 'active'};
			}
			else if (message === 'complete'){
				return {type: 'complete'};
			}
		})
	}

	handleComplete(index){
		this.setState(function(){
			var temp = this.props.array.slice();
			var num = this.state.activated.indexOf(this.props.array[index]);
			if (num > -1){
				this.state.activated.splice(num, 1);
			}
			if (this.state.completed.indexOf(this.props.array[index]) == -1){
				return {completed: this.state.completed.concat(temp.splice(index, 1)),
					};
			}
			else{
				return {};
			}
			
		})
	}


	render () {
		return (
			<div>
				<div className="center">
					{this.state.type === 'all' && 
						<ul className="itemType">
							<li style={{fontWeight: 'bold'}} onClick={this.changeType.bind(null, 'all')}>All</li>
							<li onClick={this.changeType.bind(null, 'active')}>Active</li>
							<li onClick={this.changeType.bind(null, 'complete')}>Completed</li>
						</ul>}
					{this.state.type === 'active' && 
						<ul className="itemType">
							<li onClick={this.changeType.bind(null, 'all')}>All</li>
							<li style={{fontWeight: 'bold'}} onClick={this.changeType.bind(null, 'active')}>Active</li>
							<li onClick={this.changeType.bind(null, 'complete')}>Completed</li>
						</ul>}
					{this.state.type === 'complete' && 
						<ul className="itemType">
							<li onClick={this.changeType.bind(null, 'all')}>All</li>
							<li onClick={this.changeType.bind(null, 'active')}>Active</li>
							<li style={{fontWeight: 'bold'}} onClick={this.changeType.bind(null, 'complete')}>Completed</li>
						</ul>}
				</div>
				<div>
					{this.state.type === 'all' && <All array={this.props.array} uid={this.props.uid} sendData={this.handleComplete}/>}
					{this.state.type === 'active' && <Active array={this.state.activated} uid={this.props.uid} />}
					{this.state.type === 'complete' && <Complete array={this.state.completed} uid={this.props.uid} />}
				</div>
			</div>
		)
	}
}

List.propTypes = {
	uid: PropTypes.number.isRequired,
	array: PropTypes.array
}

module.exports = List;