/** @jsx React.DOM */
var React = require('react');
var MatchLabel = require('../components/app-match-label.js');
var Schedule = require('../components/app-schedule.js');
var SaveScheduleButton = require('../components/app-save-schedule-button.js');
var json = require('../../json/schedule.json');

var App = React.createClass({

	schedule: json,

	render: function() {
    	return (
      		<div>
        		<MatchLabel scheduleNumber={this.schedule.scheduleNumber}/>
        		<Schedule matches={this.schedule.matches}/>
        		<SaveScheduleButton />
      		</div>
    	)
  	}
});

module.exports = App;