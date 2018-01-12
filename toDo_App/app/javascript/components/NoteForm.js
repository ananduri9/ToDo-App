var React = require('react');
var PropTypes = require('prop-types');


function CreateNote(props) {
	return (
		<form acceptCharset="UTF-8" action="/note" className="new_todo" method="post">
			<input name="utf8" type="hidden" value="&#x2713;" />
		    <input name="authenticity_token" type="hidden" value="NNb6+J/j46LcrgYUC60wQ2titMuJQ5lLqyAbnbAUkdo=" /><br/>

		    <input type="hidden" name="id" value={props.id} />

		    <label htmlFor="Compose new note">Compose new note</label><br/>
			<input id="message" name="note[message]" type="text" /><br/>

			<input className="bottom btn btn-primary" name="commit" type="submit" value="Create Note" />
		</form>
	)
}

CreateNote.propTypes = {
	id: PropTypes.number.isRequired
}



class NoteForm extends React.Component {
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
			<div>
				<div>
					{message === '' && 
						<div className="buttonWrap">
							<button type="button" className="bottom btn btn-primary" onClick={this.makeForm.bind(null)}>Add a Note</button>
						</div>}
					{message === 'form' && <CreateNote id={this.props.id}/>}
				</div>
			</div>
		)
	}
}

NoteForm.propTypes = {
	id: PropTypes.number.isRequired
}

module.exports = NoteForm;