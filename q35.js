const animalsWithFur = ['Cat', 'Dog', 'Bear'];

for (let i=0; i<animalsWithFur.length; i++) {
    console.log(animalsWithFur[i]);
}

console.log(`
------------
`);

for (let i=0; i<animalsWithFur.length; i++) {
    if (animalsWithFur[i] == 'Dog') console.log(`${animalsWithFur[i]} makes a great pet`);
    else if (animalsWithFur[i] == 'Cat') console.log(`${animalsWithFur[i]} is a cute pet`);
    else console.log(`${animalsWithFur[i]} has fur on its body`);
}

console.log(`
------------

All these anumals have species with variety of fur on their body.
Fur may be soft or silky with log or short hairs.
`
)