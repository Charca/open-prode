/** @jsx React.DOM */
var React = require('react');

var Match = React.createClass({
	getMatchId: function() {
		return "match" + this.props.number;
	},
	render: function() {
    	return ( <div className="rowMatch">
        		<input type="radio" name={this.getMatchId()} className="radio"/>
        		<div className="teamHome">{this.props.home}</div>
        		<input type="radio" name={this.getMatchId()} className="radio"/>
        		<div className="teamVisitor">{this.props.visitor}</div>
        		<input type="radio" name={this.getMatchId()} className="radio"/>
    		</div>
    	)
	}
});

module.exports = Match;