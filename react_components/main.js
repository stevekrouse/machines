var React = require('react');
var Editor = require('./editor/editor')
var ASTTransformations = require("../ast_transformations");

var Main = React.createClass({
  displayName: 'Main',
  getInitialState: function() {
    return state;
  },
  modifyState: function (cursor, newState, callback) {
    this.setState(ASTTransformations.replaceSubtree(this.state, cursor, newState), callback);
  },
  render: function() {
    return <Editor 
              modifyState={this.modifyState}
              name="func" 
              arguments={this.state.arguments} 
              ast={this.state.ast} 
              id={this.state.ast.id} 
           />;
  }
});

module.exports = Main;