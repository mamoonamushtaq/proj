var makeSandwich1 = function () {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log('Customer ordered sandwich with the following ingredients:');
    for (var i = 0; i < ingredients.length; i++) {
        console.log(ingredients[i]);
    }
};
makeSandwich1('chicken patty', 'pickles', 'jalapeno', 'sweet onions', 'chipotle sause');
makeSandwich1('veggie patty', 'lettuce', 'jalapeno', 'sweet onions', 'mustard sause');
makeSandwich1('roasted beef', 'jalapeno', 'bbq sauce');
