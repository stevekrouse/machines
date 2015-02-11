var React = require('react');
var NodeMixins = require('./mixins');
var Main = require('../main');
var _ = require('lodash');

var Atom = React.createClass({
  displayName: 'Atom',
  mixins: [NodeMixins],
  handleFocus: function (event) {
    newState = _.extend(this.currentAST(), {editing: true})
    this.props.modifyState(this.props.id, newState, function() {
      var node = this.getDOMNode().firstChild;
      node.focus();
      node.setSelectionRange(this.currentAST().value.length, this.currentAST().value.length);
    }.bind(this));
  },
  handleBlur: function (event) {
    newState = _.extend(this.currentAST(), {editing: false})
    this.props.modifyState(this.props.id, newState)
  },
  handleChange: function (event) {
    var newState = _.extend(this.currentAST(), {value: event.target.value});
    this.props.modifyState(this.props.id, newState);
  },
  render: function() {
  	var styles = {
      display: {
        color: "EE5949",
        border: 0,
        outline: "none",
        fontFamily: "monospace",
        width: .65 * (this.currentAST().value.length || 1) + "em",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        MsUserSelect: "none",
        UserSelect: "none",
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0)"
      },
  	};
    return <span>
              <input
                type="text"
                value={this.currentAST().value}
                onChange={this.handleChange}
                style={styles.display}
                disabled={!this.currentAST().editing}
                onDoubleClick={this.handleFocus}
                onBlur={this.handleBlur}
              >
              </input>
            </span>
  	}
});

module.exports = Atom;