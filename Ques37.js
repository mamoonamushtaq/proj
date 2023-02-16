function make_shirt1(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love JavaScript'; }
    console.log("".concat(size, " sized shirt\n").concat(message));
}
make_shirt1();
make_shirt1('Medium');
make_shirt1('Extra Large', 'See, I fit in this');
