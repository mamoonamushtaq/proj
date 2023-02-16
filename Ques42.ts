function show_magicians12(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great12(magicians: string[]): string[] {
    return magicians.map(magician => {
        return `${magician}, the Great`;
    });
}

let magiciansList12: string[] = ['Quentin Coldwater', 'Eliot Waugh', 'Alice Quinn'];
magiciansList12 = make_great1(magiciansList12);
show_magicians12(magiciansList12);
