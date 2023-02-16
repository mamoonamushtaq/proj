const makeSandwich12 = (...ingredients: string[]): void => {
    console.log('Customer ordered sandwich with the following ingredients:');
    for (let i=0; i<ingredients.length; i++) {
        console.log(ingredients[i]);
    }
};

makeSandwich12('chicken patty', 'pickles', 'jalapeno', 'sweet onions', 'chipotle sause');
makeSandwich12('veggie patty', 'lettuce', 'jalapeno', 'sweet onions', 'mustard sause');
makeSandwich12('roasted beef', 'jalapeno', 'bbq sauce');
