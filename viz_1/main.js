// main.js - Map Logic & Slider Controls

const precipitationData = [
    {name:"Hebei",month:"April",pr_sum:37.62973,pr_mean:1.1759291,pr_max:1.6820132},
    {name:"Hebei",month:"August",pr_sum:178.77243,pr_mean:5.5866385,pr_max:7.716498},
    {name:"Hebei",month:"December",pr_sum:1.7973366,pr_mean:0.056166768,pr_max:0.1692605},
    {name:"Hebei",month:"February",pr_sum:4.5362053,pr_mean:0.14175642,pr_max:0.35838613},
    {name:"Hebei",month:"January",pr_sum:1.7427415,pr_mean:0.05446067,pr_max:0.22623241},
    {name:"Hebei",month:"July",pr_sum:120.3345,pr_mean:3.7604532,pr_max:7.720263},
    {name:"Hebei",month:"June",pr_sum:125.604454,pr_mean:3.9251392,pr_max:4.9989433},
    {name:"Hebei",month:"March",pr_sum:13.303282,pr_mean:0.41572756,pr_max:0.59623694},
    {name:"Hebei",month:"May",pr_sum:44.201168,pr_mean:1.3812865,pr_max:2.37623},
    {name:"Hebei",month:"November",pr_sum:32.050953,pr_mean:1.0015923,pr_max:2.747311},
    {name:"Hebei",month:"October",pr_sum:17.256237,pr_mean:0.5392574,pr_max:0.88787067},
    {name:"Hebei",month:"September",pr_sum:38.82139,pr_mean:1.2131684,pr_max:3.149966},
    {name:"Henan",month:"April",pr_sum:79.915764,pr_mean:3.3298235,pr_max:5.1241775},
    {name:"Henan",month:"August",pr_sum:66.21092,pr_mean:2.7587883,pr_max:5.0395727},
    {name:"Henan",month:"December",pr_sum:19.18745,pr_mean:0.7994771,pr_max:1.1304765},
    {name:"Henan",month:"February",pr_sum:23.109266,pr_mean:0.9628861,pr_max:1.9272546},
    {name:"Henan",month:"January",pr_sum:16.094736,pr_mean:0.670614,pr_max:1.1504738},
    {name:"Henan",month:"July",pr_sum:90.810974,pr_mean:3.7837906,pr_max:5.7379527},
    {name:"Henan",month:"June",pr_sum:81.99419,pr_mean:3.4164245,pr_max:4.135277},
    {name:"Henan",month:"March",pr_sum:60.25843,pr_mean:2.510768,pr_max:3.3890386},
    {name:"Henan",month:"May",pr_sum:99.125725,pr_mean:4.1302385,pr_max:5.689757},
    {name:"Henan",month:"November",pr_sum:54.43893,pr_mean:2.2682889,pr_max:2.7790358},
    {name:"Henan",month:"October",pr_sum:57.246655,pr_mean:2.3852773,pr_max:3.0094395},
    {name:"Henan",month:"September",pr_sum:35.911663,pr_mean:1.4963193,pr_max:4.9705744},
    {name:"Shandong",month:"April",pr_sum:28.752478,pr_mean:1.1058645,pr_max:2.2174764},
    {name:"Shandong",month:"August",pr_sum:79.868645,pr_mean:3.071871,pr_max:4.5055175},
    {name:"Shandong",month:"December",pr_sum:10.40455,pr_mean:0.40017498,pr_max:0.9607381},
    {name:"Shandong",month:"February",pr_sum:5.5650144,pr_mean:0.21403901,pr_max:0.8286908},
    {name:"Shandong",month:"January",pr_sum:13.685696,pr_mean:0.5263729,pr_max:0.867823},
    {name:"Shandong",month:"July",pr_sum:128.97125,pr_mean:4.960433,pr_max:7.9550753},
    {name:"Shandong",month:"June",pr_sum:119.89764,pr_mean:4.6114473,pr_max:6.229517},
    {name:"Shandong",month:"March",pr_sum:28.191977,pr_mean:1.0843068,pr_max:1.781577}, // Fixed Syntax Error Here
    {name:"Shandong",month:"May",pr_sum:60.642136,pr_mean:2.3323898,pr_max:4.3422184},
    {name:"Shandong",month:"November",pr_sum:58.03797,pr_mean:2.2322297,pr_max:3.1168227},
    {name:"Shandong",month:"October",pr_sum:39.351383,pr_mean:1.5135148,pr_max:1.987463},
    {name:"Shandong",month:"September",pr_sum:7.538385,pr_mean:0.28993788,pr_max:1.1736186}
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const chinaProvincesGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "Hebei" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [114.5, 36.0], [113.5, 36.3], [113.4, 38.0], [114.2, 40.0], [115.0, 40.5], 
                    [117.3, 40.6], [119.0, 40.0], [119.3, 40.4], [119.8, 40.0], [119.2, 39.5],
                    [118.0, 39.2], [117.6, 38.5], [116.3, 38.0], [115.4, 36.1], [114.5, 36.0]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Henan" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [110.4, 34.6], [111.0, 35.3], [112.4, 35.2], [114.3, 36.1], [115.4, 36.1],
                    [116.2, 34.6], [116.4, 33.9], [115.1, 32.2], [114.1, 31.4], [112.3, 32.3],
                    [111.0, 32.2], [110.4, 33.2], [111.2, 34.0], [110.4, 34.6]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Shandong" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [115.4, 36.1], [116.3, 38.0], [117.6, 38.5], [118.1, 37.9], [119.2, 37.2],
                    [121.0, 37.7], [122.5, 37.5], [122.6, 36.9], [121.0, 36.1], [119.5, 35.4],
                    [119.3, 34.8], [117.2, 34.6], [116.2, 34.6], [115.4, 36.1]
                ]]
            }
        }
    ]
};

// Initialize Map centered around central-eastern China
// Initialize Map with all zoom features disabled
const map = L.map('map', {
    zoomControl: false,         // Removes the +/- buttons from the top left
    scrollWheelZoom: false,     // Prevents zooming with the mouse scroll wheel
    doubleClickZoom: false,     // Prevents zooming when double-clicking
    boxZoom: false,             // Prevents zooming when holding shift and dragging a box
    touchZoom: false            // Prevents pinching to zoom on mobile devices/trackpads
}).setView([36.5, 116.0], 5);
// Add light tile background layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

let geojsonLayer;
let currentMonth = "January";
let currentMetric = "pr_sum";

// Setup dynamic map color palette with 5 binned categories
function getColor(value, metric) {
    if (value === null || value === undefined) return '#e2e8f0';
    
    if (metric === 'pr_sum') {
        // 5 Bins for Total Precipitation
        return value > 120 ? '#084594' : 
               value > 80  ? '#2171b5' :
               value > 40  ? '#4292c6' : 
               value > 10  ? '#9ecae1' : '#f7fbff';
    } else if (metric === 'pr_mean') {
        // 5 Bins for Mean Daily
        return value > 4   ? '#005a32' : 
               value > 2.5 ? '#41ab5d' : 
               value > 1   ? '#74c476' : 
               value > 0.3 ? '#c7e9c0' : '#f7fcf5';
    } else {
        // 5 Bins for Max Recorded
        return value > 5   ? '#4a148c' : // Deep Dark Purple
               value > 3   ? '#7b1fa2' : // Rich Purple
               value > 1.5 ? '#9c27b0' : // Amethyst Purple
               value > 0.4 ? '#e040fb' : '#f3e5f5';
    }
}

function getMetricValue(provinceName, month, metric) {
    const record = precipitationData.find(d => d.name.toLowerCase() === provinceName.toLowerCase() && d.month === month);
    return record ? record[metric] : null;
}

function style(feature) {
    const value = getMetricValue(feature.properties.name, currentMonth, currentMetric);
    return {
        fillColor: getColor(value, currentMetric),
        weight: 2,              // Thickness of the border line
        opacity: 1,             // Full opacity for the border line
        color: '#cbd5e0',       // Dark grey border color (Slate grey)
        dashArray: '',          // Made it a solid line instead of dashed ('3') for cleaner definition
        fillOpacity: 0.8        // Opacity of the binned color fill
    };
}

function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({ weight: 3, color: '#4a5568', dashArray: '', fillOpacity: 0.9 });
    layer.bringToFront();
    infoPanel.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
    infoPanel.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({ mouseover: highlightFeature, mouseout: resetHighlight, click: zoomToFeature });
}

const infoPanel = L.control({position: 'topright'});
infoPanel.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
infoPanel.update = function (props) {
    if (props) {
        const valSum = getMetricValue(props.name, currentMonth, 'pr_sum');
        const valMean = getMetricValue(props.name, currentMonth, 'pr_mean');
        const valMax = getMetricValue(props.name, currentMonth, 'pr_max');
        this._div.innerHTML = `<h4>${props.name} Province</h4><b>Month:</b> ${currentMonth}<br/><br/>` +
            (valSum !== null ? `Total Precipitation: <b>${valSum.toFixed(2)}</b> mm<br/>Mean Precipitation: <b>${valMean.toFixed(2)}</b> mm<br/>Max Precipitation: <b>${valMax.toFixed(2)}</b> mm` : `<span class="no-data-msg">No data found</span>`);
    } else {
        this._div.innerHTML = '<h4>Province Statistics</h4>Hover over a province';
    }
};
infoPanel.addTo(map);

const mapLegend = L.control({position: 'bottomright'});
mapLegend.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info legend');
    this.updateLegend();
    return this._div;
};
mapLegend.updateLegend = function() {
    let grades;
    this._div.innerHTML = `<h4>Legend</h4>`;
    
    if (currentMetric === 'pr_sum') {
        grades = [0, 10, 40, 80, 120];
        this._div.innerHTML += `<strong>Precipitation (mm)</strong><br>`;
    } else if (currentMetric === 'pr_mean') {
        grades = [0, 0.3, 1, 2.5, 4];
        this._div.innerHTML += `<strong>Mean Daily (mm)</strong><br>`;
    } else {
        grades = [0, 0.4, 1.5, 3, 5];
        this._div.innerHTML += `<strong>Max Recorded (mm)</strong><br>`;
    }
    
    // Construct the 5-bin checklist items
    for (let i = 0; i < grades.length; i++) {
        this._div.innerHTML += '<i style="background:' + getColor(grades[i] + 0.01, currentMetric) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
};
mapLegend.addTo(map);

function updateMapLayer() {
    if (geojsonLayer) { map.removeLayer(geojsonLayer); }
    geojsonLayer = L.geoJson(chinaProvincesGeoJSON, { style: style, onEachFeature: onEachFeature }).addTo(map);
    infoPanel.update();
    mapLegend.updateLegend();
}

const slider = document.getElementById('month-slider');
const monthDisplay = document.getElementById('month-display');
const metricSelect = document.getElementById('metric-select');

slider.addEventListener('input', function(e) {
    currentMonth = months[e.target.value];
    monthDisplay.textContent = currentMonth;
    updateMapLayer();
});

metricSelect.addEventListener('change', function(e) {
    currentMetric = e.target.value;
    updateMapLayer();
});

// App Startup Initializer with render-safeguard timeouts
window.addEventListener('load', function() {
    // Initial draw of the provinces
    updateMapLayer();
    
    // Force Leaflet to recalculate its container boundaries 
    // right after the DOM settles to eliminate the grey block
    setTimeout(function() {
        map.invalidateSize();
    }, 100);
});
// 11. Optional Scroll Nav Button Event Handlers
document.getElementById("btn-next")?.addEventListener("click", () => {
    const events = Object.keys(floodEvents);
    let currentIndex = events.indexOf(activeEventKey);
    let nextIndex = (currentIndex + 1) % events.length;
    
    // Find matching button element and click it
    const nextKey = events[nextIndex];
    document.querySelector(`[data-event="${nextKey}"]`)?.click();
});

document.getElementById("btn-back")?.addEventListener("click", () => {
    const events = Object.keys(floodEvents);
    let currentIndex = events.indexOf(activeEventKey);
    let prevIndex = (currentIndex - 1 + events.length) % events.length;
    
    const prevKey = events[prevIndex];
    document.querySelector(`[data-event="${prevKey}"]`)?.click();
});