var ASTTransformations = require("../ast_transformations") 

NodeMixins = {
  currentAST: function(){
    return ASTTransformations.subtreeById(this.props.ast, this.props.id);
  }
}

module.exports = NodeMixins;