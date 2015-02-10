var cons = {
  name: '-',
  englishName: 'cons',
  color: 'black',
  infix: true,
  typeSignature: 'a -> [a] -> [a]',
  isValidApplication: function(arguments) {
    return arguments.length === 2 &&
           arguments[1].type === 'list';
  },
  patterns: [
    {
      doesMatch: function(arguments){
        return true;
      },
      apply: function(arguments){
        var items = arguments[1].items;
        items.unshift(arguments[0]);

        return {
          id: uuid.v4(),
          type: 'list',
          items: items
        };
      }
    }
  ]
};

module.exports = cons;