var animalsWithFur1 = ['Cat', 'Dog', 'Bear'];
for (var i = 0; i < animalsWithFur1.length; i++) {
    console.log(animalsWithFur1[i]);
}
console.log("\n------------\n");
for (var i = 0; i < animalsWithFur1.length; i++) {
    if (animalsWithFur1[i] == 'Dog')
        console.log("".concat(animalsWithFur1[i], " makes a great pet"));
    else if (animalsWithFur1[i] == 'Cat')
        console.log("".concat(animalsWithFur1[i], " is a cute pet"));
    else
        console.log("".concat(animalsWithFur1[i], " has fur on its body"));
}
console.log("\n------------\n\nAll these animals have species with a variety of fur on their body.\nFur may be soft or silky with long or short hairs.\n");
