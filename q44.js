const makeSandwich = function(...ingredients) {
    console.log('Customer ordered sandwich with the following ingredients:');
    for (let i=0; i<ingredients.length; i++) {
        console.log(ingredients[i]);
    }    
}

makeSandwich('chicken patty', 'pickles', 'jalapeno', 'sweet onions', 'chipotle sause');
makeSandwich('veggie patty', 'lettuce', 'jalapeno', 'sweet onions', 'mustard sause');
makeSandwich('roasted beef', 'jalapeno', 'bbq sauce');