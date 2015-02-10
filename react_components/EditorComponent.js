var helpers = require('./helpers');

var Editor = React.createClass({
  displayName: 'Editor',
  getInitialState: function() {
    return {
      name: this.props.name || "untitled",
      arguments = this.props.arguments || [],
      ast: this.props.ast, 
      id: this.props.id
    };
  },
  render: function() {
    return 
      <div>
         <EditorName name={name} arguments={arguments} />
         {helpers.createNode(this.props.ast, this.props.id, undefined)}
      </div>
  }
});
