function show_magicians1(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great1(magicians) {
    return magicians.map(function (magician) {
        return "".concat(magician, ", the Great");
    });
}
var magiciansList1 = ['Quentin Coldwater', 'Eliot Waugh', 'Alice Quinn'];
magiciansList1 = make_great1(magiciansList1);
show_magicians1(magiciansList1);
