/** @jsx React.DOM */
var React = require('react');

var SaveScheduleButton = React.createClass({
	handleClick:function() {
      	console.log("Save schedule clicked")
    },
    render:function() {
    	return <button onClick={this.handleClick}>Save schedule</button>
	}
});

module.exports = SaveScheduleButton;