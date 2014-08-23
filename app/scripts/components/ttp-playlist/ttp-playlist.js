Polymer('ttp-playlist', {


  ready: function () {
    this.searchString = '';
    this.songs = [];
  },

  searchStringChanged: function (old, filter) {
    if( filter.length === 0 ){
      this.songs = this.allSongs;
    }
    if (filter.length < 2) {
      return;
    }
    filter = filter.toLowerCase();
    if (this.allSongs) {

      this.songs = this.allSongs.filter(function (song) {
        return song.orchestra.toLowerCase().indexOf(filter) > -1 || song.year.toString().indexOf(filter) > -1;
      });

    }
  },


  bySearchString: function (songs) {
    console.log(this.searchString);
    return songs;
  },
  loadSongs: function (songs) {
    var allOrchestras = _(songs).pluck('orchestra').unique().value();
    this.songColorizer = new SongToColor(allOrchestras, [1900, 1980]);
    songs.sort(function (a, b) {
      return a.orchestra < b.orchestra ? 1 : -1;
    });

    songs = songs.map(function (song) {
      song.color = this.songColorizer.getColor(song);
      return song;
    }, this);


    this.songs = songs;
    this.allSongs = songs.slice();
  }

});
