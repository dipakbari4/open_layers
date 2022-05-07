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
      attribution:
        '<a id="home-link" target="_top" href="http://maps.stamen.com/">Map tiles</a> by <a target="_top" href="http://stamen.com">Stamen Design</a>, under <a target="_top" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data © <a target="_top" href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>.',
      visible: false,
      title: "Stamen Terrain",
    }),
  });

  const mapLayers = new ol.layer.Group({
    layers: [openStreetMap, openStreetHumanitarian],
  });

  map.addLayer(mapLayers);

  map.on("click", (event) => {
    console.log(event.coordinate);
  });
}
