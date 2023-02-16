function Car(manufacturer, model, ...moreArgs) { // using rest arguments in variadic function
    this.manufacturer = manufacturer;
    this.model = model;
    if (moreArgs && moreArgs[0]) { // third argument is assumed to be color
        this.color = moreArgs[0];
    }
    if (moreArgs && moreArgs[1]) {
        this.year = moreArgs[1];
    }
}

const myCar = new Car('Suzuki', 'Cultus');
console.log(myCar);

const myCar2 = new Car('Suzuki', 'Cultus', color='White', year=2010);
console.log(myCar2);
