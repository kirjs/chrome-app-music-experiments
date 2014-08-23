Polymer('ttp-song', {

  ready: function () {


  },
  buildTanda: function () {
    this.fire('build-tanda', this.song);
  }

});
