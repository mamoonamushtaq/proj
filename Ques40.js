var Album1 = /** @class */ (function () {
    function Album1(artistName, albumTitle, noOfTracks) {
        this.artistName = artistName;
        this.albumTitle = albumTitle;
        if (noOfTracks) {
            this.noOfTracks = noOfTracks;
        }
    }
    return Album1;
}());
function make_album1(artistName, albumTitle, noOfTracks) {
    var album = new Album1(artistName, albumTitle, noOfTracks);
    return album;
}
var firstAlbum1 = make_album1('Ahmed Bukhatir', 'Ya adheeman');
console.log(firstAlbum1);
var secondAlbum1 = make_album1('Ahmed Bukhatir', 'Ya man yara');
console.log(secondAlbum1);
var thirdAlbum1 = make_album1('Muhammad Al-Husayn', 'Yal Halaqati', 1);
console.log(thirdAlbum1);
