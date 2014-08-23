describe('Song to color', function () {
  it('converts songs to color', function () {
    var artists = ['Francisco Canaro', 'Anibal troilo', 'Osvaldo Pugliese'];
    var colorizer = new SongToColor(artists, [1910, 1980]);


    expect(colorizer.getColor({
      orchestra: 'Francisco Canaro',
      year: 1945,
      cantor: 'Whatever'
    })).toEqual('##40bfbf');
  });
});
