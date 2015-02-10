var helpers = require('./helpers');
var React = require('react');
var EditorArgument = require('./EditorArgumentComponent');
var _ = require('underscore');

var EditorName = React.createClass({
  displayName: 'EditorName',
  getInitialState: function() {
    return {
      name: this.props.name,
      arguments: this.props.arguments
    };
  },
  handleChange: function (event) {
    this.setState(_.extend(this.state, {name: event.target.value}));
  },
  render: function() {
    var topLineStyles = { 
      backgroundColor: "black",
    }
    var nameStyles = {
      color: "white",
      fontFamily: "monospace", 
      backgroundColor: "rgba(0, 0, 0, 0)",
      paddingLeft: 4,
      border: 0
    };
    return(
      <div style={topLineStyles}>
        <input
          style={nameStyles}
          value={this.state.name}
          onChange={this.handleChange}
          size={this.state.name.length}
        />
        {this.state.arguments.map(function(argument){
          return <EditorArgument argument={argument} />;
        })}
      </div>
    );
  }
});

module.exports = EditorName;