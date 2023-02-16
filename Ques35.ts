const animalsWithFur2: string[] = ['Cat', 'Dog', 'Bear'];

for (let i=0; i<animalsWithFur2.length; i++) {
    console.log(animalsWithFur2[i]);
}

console.log(`
------------
`);

for (let i=0; i<animalsWithFur2.length; i++) {
    if (animalsWithFur2[i] == 'Dog') console.log(`${animalsWithFur2[i]} makes a great pet`);
    else if (animalsWithFur2[i] == 'Cat') console.log(`${animalsWithFur2[i]} is a cute pet`);
    else console.log(`${animalsWithFur2[i]} has fur on its body`);
}

console.log(`
------------

All these animals have species with a variety of fur on their body.
Fur may be soft or silky with long or short hairs.
`);
