var Application = React.createClass({displayName: 'Application',
  mixins: [NodeMixins],
  render: function() {
    var currentAST = this.currentAST();

    console.log(currentAST.arguments);
    var funcAndArgs = currentAST.arguments.map((function(arg){
      return Node({id: arg.id, key: arg.id, ast: this.props.ast}, ' ');
    }).bind(this));
    funcAndArgs.pop(); // remove last whitespace

    funcAndArgs.unshift(' ');
    funcAndArgs.unshift(FunctionName({id: currentAST.functionName.id, key: currentAST.functionName.id, ast: this.props.ast}));

    funcAndArgs.unshift('(');
    funcAndArgs.push(')');

    return React.DOM.span({
      key: currentAST.id
    },
      funcAndArgs
    );
  }
});
