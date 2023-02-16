function makeSandwich1() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log('Customer ordered sandwich with the following ingredients:');
    for (var i = 0; i < ingredients.length; i++) {
        console.log(ingredients[i]);
    }
}
