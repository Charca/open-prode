/** @jsx React.DOM */
var React = require('react');
var MatchLabel = require('../components/app-match-label.js');
var Schedule = require('../components/app-schedule.js');
var SaveScheduleButton = require('../components/app-save-schedule-button.js');

var App = React.createClass({
	render: function() {
    	return (
      		<div>
        		<MatchLabel />
        		<Schedule />
        		<SaveScheduleButton />
      		</div>
    	)
  	}
});

module.exports = App;