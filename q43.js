const show_magicians = function(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const make_great = function(magicians) {
    return magicians.map(magician => {
        return `${magician}, the Great`;
    });
}

const magiciansList = ['Quentin Coldwater', 'Eliot Waugh', 'Alice Quinn'];
const magiciansListNew = make_great(magiciansList);
show_magicians(magiciansList);
console.log('---------------------');
show_magicians(magiciansListNew);