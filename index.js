var React = require('react');
var uuid = require('node-uuid');
var Main = require('./react_components/main');

function atom() {
	return {
		value: "atom",
		id: uuid.v4(), 
		type: "atom"
	};
}

function list(n) {
	var l = [];
	for (var i = 0; i < n; i ++){
		l.push(atom());
	}
	return {items: l, id: uuid.v4(), type: "list"};
}

yellow_list = list(4)
yellow_list.color = 'yellow'

blue_list = list(4)
blue_list.color = 'blue'

green_list = {items: [yellow_list, blue_list], id: uuid.v4(), type: "list", color: 'green'};

branches = {
	type: "branches",
	id: uuid.v4(),
	branches: [
		{
			type: "branch",
			conditional: atom(),
			value: list(2),
			id: uuid.v4()
		},
		{
			type: "branch",
			conditional: list(2),
			value: list(3),
			id: uuid.v4()
		}
	] 
};

ast = green_list; //branches;

state = {ast: ast, arguments: ["hi", "there"]};

React.render(<Main state={state} />,
			document.body);
