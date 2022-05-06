window.onload = init;
function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 2,
    }),
    target: "js-map",
  });

  const openStreetMap = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: false,
    title: "OpenStreetMap",
  });

  const openStreetHumanitarian = new ol.layer.Tile({
    source: new ol.source.OSM({
      url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    }),
    visible: false,
    title: "OpenStreetMapHumanitarian",
  });

  const stamenTerrain = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: "http://tile.stamen.com/terrain/{z}/{x}/{y}.png",
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>',
      visible: false,
      title: "Stamen Terrain",
    }),
  });

  const mapLayers = new ol.layer.Group({
    layers: [openStreetMap, openStreetHumanitarian, stamenTerrain],
  });

  map.addLayer(mapLayers);
}
