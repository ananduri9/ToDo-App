var React = require('react');
var PropTypes = require('prop-types');

function Signup() {
	return (
		<div className="front">
			<h4>Sign Up</h4>
			<form acceptCharset="UTF-8" action="/signup" className="new_user" id="new_user" method="post">
			    <input name="utf8" type="hidden" value="&#x2713;" />
			    <input name="authenticity_token" type="hidden" value="NNb6+J/j46LcrgYUC60wQ2titMuJQ5lLqyAbnbAUkdo=" /><br/>

				<label htmlFor="user_name">User Name</label><br/>
				<input id="user_name" name="user[uname]" type="text" /><br/>
				
				<label htmlFor="user_email">Email</label><br/>
				<input id="user_email" name="user[email]" type="email" /><br/>
				
				<label htmlFor="user_password">Password</label><br/>
				<input id="user_password" name="user[password]" type="password" /><br/>

				<label htmlFor="user_password_confirmation">Password Confirmation</label><br/>
				<input id="user_password_confirmation" name="user[password_confirmation]" type="password" /><br/>

				<input className="btn btn-primary" name="commit" type="submit" value="Create my account" />
			</form>
		</div>
	)
}

function Logup() {
	return (
		<div className="front">
			<h4>Log In</h4>
			<form acceptCharset="UTF-8" action="/login" method="post">

			    <input name="utf8" type="hidden" value="&#x2713;" /><br/>
			    <input name="authenticity_token" type="hidden" value="NNb6+J/j46LcrgYUC60wQ2titMuJQ5lLqyAbnbAUkdo=" /><br/>
			    
			    <label htmlFor="session_email">Email</label><br/>
			    <input id="session_email" name="email" type="text" /><br/>
			    
			    <label htmlFor="session_password">Password</label><br/>
			    <input id="session_password" name="apassword" type="password" /><br/>
			    
			    <input className="btn btn-primary" name="commit" type="submit" value="Log in" />
			</form>
		</div>
	)
}


class Frontpage extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			message: 'Sign In'
		}

		this.signIn = this.signIn.bind(this);
		this.logIn = this.logIn.bind(this);
	}

	signIn(){
		this.setState(function(){
			return {message: 'Sign In'};
		})
	}

	logIn(){
		this.setState(function(){
			return {message: 'Log In'};
		})
	}

	render () {
		var message = this.state.message;

		return (
			<div>
				<div>
					{message === 'Sign In' && <Signup />}
					{message === 'Log In' && <Logup />}
				</div>
				<p className='bottomRow'><span onClick={this.signIn.bind(null)}>Sign Up</span><span onClick={this.logIn.bind(null)}>Log In</span></p>
			</div>
		)
	}
}
module.exports = Frontpage;