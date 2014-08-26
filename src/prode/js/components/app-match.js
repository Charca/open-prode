/** @jsx React.DOM */
var React = require('react');

var Match = React.createClass({
	getMatchId:function() {
		return "{match: match}";
	},
	render:function() {
    	return ( <div>
    		<input type="radio" name="pepe"/>
    		<div>Home</div>
    		<input type="radio" name="pepe"/>
    		<div>Visitor</div>
    		<input type="radio" name="pepe"/>
    		</div>
    	
    	
    	)
	}
});

module.exports = Match;