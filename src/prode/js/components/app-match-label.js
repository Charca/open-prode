/** @jsx React.DOM */
var React = require('react');

var MatchLabel = React.createClass({
    render:function() {
    	return <div>Schedule &#8470; {this.props.scheduleNumber}</div>
	}
});

module.exports = MatchLabel;