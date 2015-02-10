var React = require('react');
var NodeMixins = require('./Mixins');

var Atom = React.createClass({
  displayName: 'Atom',
  mixins: [NodeMixins],
  isEditing: function() {
    return false;
  },
  getInitialState: function () {
      return {value: this.currentAST().value, editing: false};
  },
  handleFocus: function (event) {
    this.setState({value: this.state.value, editing: true}, function() {
      var node = this.getDOMNode().firstChild;
      node.focus();
      node.setSelectionRange(this.state.value.length, this.state.value.length);
    }.bind(this));
  },
  handleBlur: function (event) {
    this.setState({value: this.state.value, editing: false});
  },
  handleChange: function (event) {
    this.setState({value: event.target.value});
  },
  render: function() {
  	var styles = {
      display: {
        color: "EE5949",
        border: 0,
        outline: "none",
        fontFamily: "monospace",
        width: .65 * (this.state.value.length || 1) + "em",
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
                value={this.state.value}
                onChange={this.handleChange}
                style={styles.display}
                disabled={!this.state.editing}
                onDoubleClick={this.handleFocus}
                onBlur={this.handleBlur}
              >
              </input>
            </span>
  	}
});

module.exports = Atom;