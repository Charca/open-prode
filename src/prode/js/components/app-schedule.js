/** @jsx React.DOM */
var React = require('react');
var Match = require('../components/app-match.js');

var Schedule = React.createClass({
	render:function() {
    	return <div className="scheduleTable"><Match /></div>
	}
});

module.exports = Schedule;