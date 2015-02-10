var helpers = require('./helpers');
var React = require('react');
var EditorName = require('./EditorNameComponent');
var EditorArgument = require('./EditorArgumentComponent');

var Editor = React.createClass({
  displayName: 'Editor',
  getInitialState: function() {
    return {
      name: this.props.name || "untitled",
      arguments: this.props.arguments || [],
      ast: this.props.ast,
      id: this.props.id
    };
  },
  render: function() {
    var bodyStyles ={
        backgroundColor: "rgb(84, 83, 83)"
    };
    return(
      <div>
        <EditorName 
            name={this.state.name || "untitled"} 
            arguments={this.state.arguments || []} 
        />
        <div style={bodyStyles}>
          {helpers.createNode(this.props.ast, this.props.id, undefined)}
        </div>
      </div>
    );
  }
});

module.exports = Editor;