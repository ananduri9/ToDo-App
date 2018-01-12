var React = require("react");
var PropTypes = require('prop-types');

class Welcome extends React.Component {
  render() {
    return (
    	<div className='welcome'>
    		<h1>Welcome to ToDo</h1>
    		<h6>Your home for all your notes and reminders</h6>
    	</div>
    )
  }
}
module.exports = Welcome;
