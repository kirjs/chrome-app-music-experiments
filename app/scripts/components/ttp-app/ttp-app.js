'use strict';
Polymer('ttp-app', {

  loadSongs: function (response) {

    this.$.playlist.loadSongs(response.detail.response.slice(0, 200));

  },
  ready: function () {
    this.addEventListener('build-tanda', function (e) {
      this.$.tandaBuilder.addSong(e.detail);
    }, this);

    this.addEventListener('update-search-string', function (e) {
      this.$.playlist.searchString = e.detail;
    }, this);

  }

});
