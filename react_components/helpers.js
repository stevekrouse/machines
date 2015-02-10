var React = require('react');
var ASTTransformations = require("../ast_transformations");

var createNode = function (ast, id, key){
  var Atom = require('./AtomComponent');
  var List = require('./ListComponent');
  var Branch = require('./BranchComponent');
  var Branches = require('./BranchesComponent');
  var currentAST = ASTTransformations.subtreeById(ast, id);

  // if (currentAST.type == "application") {
  //   return Application({id: id, ast: ast});
  // } else if (currentAST.type == "functionName") {
  //   return FunctionName({id: id, ast: ast});
  if (currentAST.type == "list") {
    return <List id={id} ast={ast} key={key} />;
  } 
  else if (currentAST.type == "atom") {
    return <Atom id={id} ast={ast} key={key} />;
  } 
  else if (currentAST.type == "branches") {
    return <Branches id={id} ast={ast} key={key} />;
  }
  else if (currentAST.type == "branch") {
    return <Branch id={id} ast={ast} key={key} />;
  }  
  else {
    throw("cannot handle ast of this type");
  }
}

module.exports = {createNode: createNode};