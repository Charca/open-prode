/** @jsx React.DOM */
var React = require('react');
var Match = require('../components/app-match.js');

var Schedule = React.createClass({
	createMatch: function(match) {
		return (
			<Match number={match.number} home={match.home} visitor={match.visitor} />
		);
	},

	render:function() {
    	return (
    		<div className="scheduleTable">
    			{this.props.matches.map(this.createMatch)}
    		</div>
    	)
	}
});

module.exports = Schedule;