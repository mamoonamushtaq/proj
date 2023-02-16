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

const magiciansList12: string[] = ['Quentin Coldwater', 'Eliot Waugh', 'Alice Quinn'];
const magiciansListNew12: string[] = make_great12(magiciansList12);
show_magicians12(magiciansList12);
console.log('---------------------');
show_magicians12(magiciansListNew12);
