var React = require('react');
var NodeMixins = require('./mixins');
var helpers = require('./helpers');

var List = React.createClass({
  displayName: 'List',
  mixins: [NodeMixins],
  render: function() {
    var styles = {
      // boxShadow: "1px 1px 1px #888888",
      // backgroundColor: this.currentAST().color
    }

    var listItems = this.currentAST().items;
    var items = [];
    items.push('(');
    for (var i=0; i<listItems.length; i++) {
      var listItem = listItems[i];
      items.push(helpers.createNode(this.props.ast ,listItem.id , listItem.id, this.props.modifyState));
      if (i<listItems.length-1) items.push('-');
    }
    items.push(')');
    return <span style={styles}>{items}</span>;
  }
});

module.exports = List;