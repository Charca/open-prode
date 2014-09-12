/** @jsx React.DOM */
var React = require('react');
var MatchLabel = require('../components/app-match-label.js');
var Schedule = require('../components/app-schedule.js');
var Button = require('../components/app-button.js');
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
        		<Button label="Previous" onClick={this.handlePrevious}/>
        		<Button label="Save" onClick={this.handleSave}/>
        		<Button label="Next" onClick={this.handleNext}/>
      		</div>
    	)
  	},
  	handlePrevious: function() {
  		console.log("Previous");
  	},
  	handleNext: function() {
		console.log("Next");
  	},
  	handleSave: function() {
  		console.log("Save");
  	}
});

module.exports = App;