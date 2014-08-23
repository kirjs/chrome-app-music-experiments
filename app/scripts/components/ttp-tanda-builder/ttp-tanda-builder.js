Polymer('ttp-tanda-builder', {
  placeholder: {
    color: '#ddd'

  },

  ready: function () {
    this.searchString = '';
    this.songs = [
      this.placeholder,
      this.placeholder,
      this.placeholder,
      this.placeholder

    ];
    this.extras = [];
  },
  addSong: function (song) {
    this.songs.pop();
    this.songs.unshift(song);
    this.fire('update-search-string', this.getSearchString());
  },
  getProperties: function( name ){
    return _(this.songs).pluck(name).filter(_.identity).unique().value().join(',');

  },
  getSearchString: function(){
    var result = [];
    result.push( this.getProperties('orchestra'));

    return result.join(',');

  }


});
