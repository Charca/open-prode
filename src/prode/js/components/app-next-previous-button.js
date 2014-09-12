/** @jsx React.DOM */
var React = require('react');

var NextPreviousButton = React.createClass({
	handleClick:function() {
      	console.log("Next/Previous schedule clicked")
    },
    render:function() {
    	return <button onClick={this.handleClick}>{this.props.label}</button>
	}
});

module.exports = NextPreviousButton;