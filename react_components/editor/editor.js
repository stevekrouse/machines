var helpers = require('../ast/helpers');
var React = require('react');
var EditorTop = require('./editorTop');
var EditorArgument = require('./editorArgument');

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
        <EditorTop
            name={this.state.name || "untitled"} 
            arguments={this.state.arguments || []} 
            modifyState={this.props.modifyState}  
        />
        <div style={bodyStyles}
             modifyState={this.props.modifyState}  
        >
          {helpers.createNode(this.props.ast, this.props.id, undefined, this.props.modifyState)}
        </div>
      </div>
    );
  }
});

module.exports = Editor;