function makeSandwich12(...ingredients: string[]): void {
    console.log('Customer ordered sandwich with the following ingredients:');
    for (let i=0; i<ingredients.length; i++) {
        console.log(ingredients[i]);
    }    
}
