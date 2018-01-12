var React = require('react');
var PropTypes = require('prop-types');


class All extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			line: {textDecoration: 'none'}
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(index){
		this.setState(function(){
			return {line: {textDecoration: 'line-through'}};
		})
		this.props.sendData(index);
	}

	render () {


	var array = this.props.array;
	var userid = this.props.uid;

		return (
			<ol className="todos">
				<ul className="first">
			  		<li className="listitem">  Note</li>
		  		</ul><br/>
				  {array.map(function(item, index){
				  	return (
				  		<div className="todoitem" style={this.state.line} key={index}>
		
					  		<p id="noteitem" className="listitem" key={item}>{item.message}</p>

				  			<form acceptCharset="UTF-8" action="/notes" className="listitem" method="post">
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

All.propTypes = {
	uid: PropTypes.number.isRequired,
	array: PropTypes.array
}




class Notes extends React.Component {


	render () {
		console.log(this.state);
		return (
			<div>
				<div>
					{<All array={this.props.array} uid={this.props.uid} />}
				</div>
			</div>
		)
	}
}

Notes.propTypes = {
	uid: PropTypes.number.isRequired,
	array: PropTypes.array
}


module.exports = Notes;