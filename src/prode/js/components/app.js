/** @jsx React.DOM */
var React = require('react');
var MatchLabel = require('../components/app-match-label.js');
var Schedule = require('../components/app-schedule.js');
var SaveScheduleButton = require('../components/app-save-schedule-button.js');
var NextPreviousButton = require('../components/app-next-previous-button.js');
//var json = require('../../json/schedule.json');
var firebaseRefs = new Firebase('https://glowing-heat-2258.firebaseio.com/');

var App = React.createClass({

	firebaseRefs: firebaseRefs,

	getInitialState: function() {
		return {
			schedule: {
				scheduleNumber: '',
				matches: []
			}
		}
	},
	componentWillMount: function() {
		this.firebaseRefs.on('value', function(data) {
			this.setState({
        		schedule: data.val()
        	});
    	}.bind(this));
	},
	render: function() {
    	return (
      		<div>
        		<MatchLabel scheduleNumber={this.state.schedule.scheduleNumber}/>
        		<Schedule matches={this.state.schedule.matches}/>
        		<NextPreviousButton label="Previous"/>
        		<SaveScheduleButton />
        		<NextPreviousButton label="Next"/>
      		</div>
    	)
  	}
});

module.exports = App;