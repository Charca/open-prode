/** @jsx React.DOM */
var React = require('react');

var Button = React.createClass({
    render:function() {
    	return <button onClick={this.props.onClick}>{this.props.label}</button>
	}
});

module.exports = Button;