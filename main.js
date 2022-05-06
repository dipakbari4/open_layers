window.onload = init;
function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [9836226.743377415, 2581030.8139030603],
      zoom: 13,
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    target: "js-map",
  });

  map.on("click", function (e) {
    console.log(e.coordinate);
  });
}
