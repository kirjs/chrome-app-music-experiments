function assignOrchestra(result, orchestra, index, all) {
  result[orchestra] = index / all.length;
  return result;
}

function SongToColor(orchestras, yearRange) {
  this.orchestras = orchestras;
  this.orchestrasMap = orchestras.reduce(assignOrchestra, {});
  this.yearRange = yearRange;
  this.yearDifference = yearRange[1] - yearRange[0];
}

SongToColor.prototype.getColor = function (song) {
  var hue = this.orchestrasMap[song.orchestra];
  var saturation = 1;
  var lightness = 0.2;//0.4 - ((song.year - this.yearRange[0]) / this.yearDifference ) / 4;
  return hslToHex(hue, saturation, lightness);
};
