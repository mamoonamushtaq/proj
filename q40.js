const Album = function(artistName, albumTitle, noOfTracks) {
    this.artistName = artistName;
    this.albumTitle = albumTitle;
    if (noOfTracks) {
        this.noOfTracks = noOfTracks;
    }
}

const make_album = function(artistName, albumTitle, noOfTracks) {
    const album = new Album(artistName, albumTitle, noOfTracks);
    return album;
}

const firstAlbum = make_album('Ahmed Bukhatir', 'Ya adheeman');
console.log(firstAlbum);

const secondAlbum = make_album('Ahmed Bukhatir', 'Ya man yara');
console.log(secondAlbum);

const thirdAlbum = make_album('Muhammad Al-Husayn', 'Yal Halaqati', 1);
console.log(thirdAlbum);
