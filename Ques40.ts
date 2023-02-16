class Album12 {
    artistName: string;
    albumTitle: string;
    noOfTracks?: number;

    constructor(artistName: string, albumTitle: string, noOfTracks?: number) {
        this.artistName = artistName;
        this.albumTitle = albumTitle;
        if (noOfTracks) {
            this.noOfTracks = noOfTracks;
        }
    }
}

function make_album12(artistName: string, albumTitle: string, noOfTracks?: number): Album12 {
    const album = new Album12(artistName, albumTitle, noOfTracks);
    return album;
}

const firstAlbum12 = make_album12('Ahmed Bukhatir', 'Ya adheeman');
console.log(firstAlbum12);

const secondAlbum12 = make_album12('Ahmed Bukhatir', 'Ya man yara');
console.log(secondAlbum12);

const thirdAlbum12 = make_album12('Muhammad Al-Husayn', 'Yal Halaqati', 1);
console.log(thirdAlbum12);
