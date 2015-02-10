var React = require('react');
var NodeMixins = require('./Mixins');
var helpers = require('./helpers');

var Branch = React.createClass({
  displayName: 'Branch',
  mixins: [NodeMixins],
  render: function() {
    this.currentAST()
    return ( 
      <div>
        <div>{helpers.createNode(this.props.ast, this.currentAST().conditional.id, undefined)}</div>
        <div style={{marginLeft: "1em"}}>{helpers.createNode(this.props.ast, this.currentAST().value.id, undefined)}</div>
      </div>
    );
  }
});

module.exports = Branch;