var React = require('react');
var NodeMixins = require('./Mixins');
var helpers = require('./helpers');
var Branch = require('./BranchComponent')

var Branches = React.createClass({
  displayName: 'Branches',
  mixins: [NodeMixins],
  render: function() {
    var styles = {
      padding: "1"
    };

    var branches = this.currentAST().branches.map(function(branch){
      return <Branch ast={this.props.ast} id={branch.id} key={branch.id} />
    }.bind(this));
    return <ul style={styles}>{branches}</ul>;
  }
});

module.exports = Branches;