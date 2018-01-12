var React = require('react');
var PropTypes = require('prop-types');


function CreateToDo(props) {
	return (
		<form acceptCharset="UTF-8" action="/to_do" className="new_todo" method="post">
			<input name="utf8" type="hidden" value="&#x2713;" />
		    <input name="authenticity_token" type="hidden" value="NNb6+J/j46LcrgYUC60wQ2titMuJQ5lLqyAbnbAUkdo=" /><br/>

		    <input type="hidden" name="id" value={props.id} />

		    <label htmlFor="Compose new to_do">Compose new to_do</label><br/>
			<input id="message" name="to_do[message]" type="text" /><br/>

			<label htmlFor="deadline">Deadline</label><br/>
			<input id="deadline" name="to_do[deadline]" type="date" /><br/>

			<input className="bottom btn btn-primary" name="commit" type="submit" value="Create To Do" />
		</form>
	)
}

CreateToDo.propTypes = {
	id: PropTypes.number.isRequired
}




class Form extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			message: ''
		}

		this.makeForm = this.makeForm.bind(this);
	}

	makeForm(){
		this.setState(function(){
			return {message: 'form'};
		})
	}

	render () {
		var message = this.state.message;

		return (
			<div className="container">
				<div>
					{message === '' && 
						<div className="buttonWrap">
							<button type="button" className="bottom btn btn-primary" onClick={this.makeForm.bind(null)}>Add a to do</button>
						</div>}
					{message === 'form' && <CreateToDo id={this.props.id}/>}
				</div>
			</div>
		)
	}
}

Form.propTypes = {
	id: PropTypes.number.isRequired
}

module.exports = Form;