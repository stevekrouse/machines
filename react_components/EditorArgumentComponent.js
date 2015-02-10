var helpers = require('./helpers');
var React = require('react');

var EditorArgument = React.createClass({
  displayName: 'EditorArgument',
  getInitialState: function() {
    return {
      argument: this.props.argument
    };
  },
  handleChange: function (event) {
    this.setState({argument: event.target.value});
  },
  render: function() {
    var styles = {
      color: "white",
      fontFamily: "monospace", 
      backgroundColor: "rgba(0, 0, 0, 0)",
      paddingLeft: 4,
      borderRight: 0,
      borderLeft: "1px solid white",
      borderTop: 0,
      borderBottom: 0
    }
    return(
      <input 
        style={styles}
        value={this.state.argument}
        onChange={this.handleChange}
        size={this.state.argument.length}
      />
    );
  }
});

module.exports = EditorArgument;