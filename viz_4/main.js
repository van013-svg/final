// main.js - US Northeast Map Logic, Slider Controls & Synced Multi-Region Charts

// Realistic Hurricane Sandy precipitation data (already provided by you)
const precipitationData = [
    {name:"Connecticut",month:"April",pr_sum:14.3773,pr_mean:3.5943,pr_max:3.7243},
    {name:"Connecticut",month:"August",pr_sum:6.9237,pr_mean:1.7309,pr_max:1.7357},
    {name:"Connecticut",month:"December",pr_sum:33.6567,pr_mean:8.4142,pr_max:8.5241},
    {name:"Connecticut",month:"February",pr_sum:12.5971,pr_mean:3.1493,pr_max:3.2497},
    {name:"Connecticut",month:"January",pr_sum:13.5201,pr_mean:3.3800,pr_max:4.0728},
    {name:"Connecticut",month:"July",pr_sum:23.3702,pr_mean:5.8425,pr_max:6.1191},
    {name:"Connecticut",month:"June",pr_sum:13.2456,pr_mean:3.3114,pr_max:3.3754},
    {name:"Connecticut",month:"March",pr_sum:8.7175,pr_mean:2.1794,pr_max:2.2363},
    {name:"Connecticut",month:"May",pr_sum:11.7602,pr_mean:2.9400,pr_max:3.2283},
    {name:"Connecticut",month:"November",pr_sum:37.4059,pr_mean:9.3515,pr_max:10.0493},
    {name:"Connecticut",month:"October",pr_sum:16.6250,pr_mean:4.1563,pr_max:4.5573},
    {name:"Connecticut",month:"September",pr_sum:7.5254,pr_mean:1.8813,pr_max:2.0931},
    {name:"Maryland",month:"April",pr_sum:11.9449,pr_mean:1.9908,pr_max:2.2126},
    {name:"Maryland",month:"August",pr_sum:5.6862,pr_mean:0.9477,pr_max:1.2245},
    {name:"Maryland",month:"December",pr_sum:40.9192,pr_mean:6.8199,pr_max:7.7648},
    {name:"Maryland",month:"February",pr_sum:20.1242,pr_mean:3.3540,pr_max:3.9856},
    {name:"Maryland",month:"January",pr_sum:22.9344,pr_mean:3.8224,pr_max:4.6496},
    {name:"Maryland",month:"July",pr_sum:28.1868,pr_mean:4.6978,pr_max:5.1850},
    {name:"Maryland",month:"June",pr_sum:19.9491,pr_mean:3.3248,pr_max:3.6455},
    {name:"Maryland",month:"March",pr_sum:11.1941,pr_mean:1.8657,pr_max:2.1931},
    {name:"Maryland",month:"May",pr_sum:28.8880,pr_mean:4.8147,pr_max:5.5190},
    {name:"Maryland",month:"November",pr_sum:35.9232,pr_mean:5.9872,pr_max:7.2838},
    {name:"Maryland",month:"October",pr_sum:30.5517,pr_mean:5.0919,pr_max:5.5390},
    {name:"Maryland",month:"September",pr_sum:18.9911,pr_mean:3.1652,pr_max:3.8908},
    {name:"New Jersey",month:"April",pr_sum:4.3277,pr_mean:2.1638,pr_max:2.1638},
    {name:"New Jersey",month:"August",pr_sum:2.4233,pr_mean:1.2116,pr_max:1.2116},
    {name:"New Jersey",month:"December",pr_sum:17.7368,pr_mean:8.8684,pr_max:8.8684},
    {name:"New Jersey",month:"February",pr_sum:6.4513,pr_mean:3.2257,pr_max:3.2257},
    {name:"New Jersey",month:"January",pr_sum:7.3699,pr_mean:3.6850,pr_max:3.6850},
    {name:"New Jersey",month:"July",pr_sum:11.2190,pr_mean:5.6095,pr_max:5.6095},
    {name:"New Jersey",month:"June",pr_sum:8.4182,pr_mean:4.2091,pr_max:4.2091},
    {name:"New Jersey",month:"March",pr_sum:3.6634,pr_mean:1.8317,pr_max:1.8317},
    {name:"New Jersey",month:"May",pr_sum:5.3810,pr_mean:2.6905,pr_max:2.6905},
    {name:"New Jersey",month:"November",pr_sum:15.6422,pr_mean:7.8211,pr_max:7.8211},
    {name:"New Jersey",month:"October",pr_sum:9.1452,pr_mean:4.5726,pr_max:4.5726},
    {name:"New Jersey",month:"September",pr_sum:4.4619,pr_mean:2.2310,pr_max:2.2310},
    {name:"New York",month:"April",pr_sum:115.3747,pr_mean:4.8073,pr_max:6.2546},
    {name:"New York",month:"August",pr_sum:110.8218,pr_mean:4.6176,pr_max:6.4241},
    {name:"New York",month:"December",pr_sum:119.7187,pr_mean:4.9883,pr_max:7.8640},
    {name:"New York",month:"February",pr_sum:66.1278,pr_mean:2.7553,pr_max:3.0941},
    {name:"New York",month:"January",pr_sum:37.4636,pr_mean:1.5610,pr_max:2.2110},
    {name:"New York",month:"July",pr_sum:99.2209,pr_mean:4.1342,pr_max:6.0651},
    {name:"New York",month:"June",pr_sum:94.0819,pr_mean:3.9201,pr_max:6.7083},
    {name:"New York",month:"March",pr_sum:60.5526,pr_mean:2.5230,pr_max:3.3102},
    {name:"New York",month:"May",pr_sum:89.0124,pr_mean:3.7088,pr_max:4.3053},
    {name:"New York",month:"November",pr_sum:128.8756,pr_mean:5.3698,pr_max:7.5386},
    {name:"New York",month:"October",pr_sum:91.2145,pr_mean:3.8006,pr_max:4.8447},
    {name:"New York",month:"September",pr_sum:65.5652,pr_mean:2.7319,pr_max:4.0732},
    {name:"Pennsylvania",month:"April",pr_sum:38.3228,pr_mean:2.3952,pr_max:3.3167},
    {name:"Pennsylvania",month:"August",pr_sum:37.3838,pr_mean:2.3365,pr_max:3.5031},
    {name:"Pennsylvania",month:"December",pr_sum:100.0871,pr_mean:6.2554,pr_max:8.8236},
    {name:"Pennsylvania",month:"February",pr_sum:42.3613,pr_mean:2.6476,pr_max:2.9902},
    {name:"Pennsylvania",month:"January",pr_sum:40.9246,pr_mean:2.5578,pr_max:3.4286},
    {name:"Pennsylvania",month:"July",pr_sum:103.2689,pr_mean:6.4543,pr_max:6.8820},
    {name:"Pennsylvania",month:"June",pr_sum:66.2950,pr_mean:4.1434,pr_max:5.2464},
    {name:"Pennsylvania",month:"March",pr_sum:35.0663,pr_mean:2.1916,pr_max:2.8063},
    {name:"Pennsylvania",month:"May",pr_sum:65.2748,pr_mean:4.0797,pr_max:4.7092},
    {name:"Pennsylvania",month:"November",pr_sum:78.2807,pr_mean:4.8925,pr_max:6.8034},
    {name:"Pennsylvania",month:"October",pr_sum:63.2597,pr_mean:3.9537,pr_max:4.5590},
    {name:"Pennsylvania",month:"September",pr_sum:39.9710,pr_mean:2.4982,pr_max:3.3228}
];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Updated to match your data array names
const regions = ["Connecticut", "Maryland", "New Jersey", "New York", "Pennsylvania"];

// Approximated bounding Polygons for US Northeast States (Leaflet uses [Lat, Lon])
const usStatesGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "name": "Connecticut" }, "geometry": { "type": "Polygon", "coordinates": [[[-73.5, 42.0], [-71.8, 42.0], [-71.8, 41.3], [-72.5, 41.2], [-73.5, 41.0], [-73.5, 42.0]]] }},
        { "type": "Feature", "properties": { "name": "Maryland" }, "geometry": { "type": "Polygon", "coordinates": [[[-79.5, 39.7], [-75.0, 39.7], [-75.1, 38.0], [-76.3, 37.9], [-77.0, 38.3], [-77.9, 39.4], [-79.5, 39.5], [-79.5, 39.7]]] }},
        { "type": "Feature", "properties": { "name": "New Jersey" }, "geometry": { "type": "Polygon", "coordinates": [[[-75.2, 39.9], [-74.7, 41.4], [-73.9, 41.0], [-74.0, 40.0], [-74.9, 38.9], [-75.6, 39.4], [-75.2, 39.9]]] }},
        { "type": "Feature", "properties": { "name": "New York" }, "geometry": { "type": "Polygon", "coordinates": [[[-79.8, 42.0], [-79.0, 42.8], [-79.0, 43.6], [-75.2, 45.0], [-73.3, 45.0], [-71.8, 41.0], [-74.0, 40.5], [-75.1, 41.4], [-79.8, 42.0]]] }},
        { "type": "Feature", "properties": { "name": "Pennsylvania" }, "geometry": { "type": "Polygon", "coordinates": [[[-80.5, 42.0], [-74.7, 41.4], [-75.2, 39.9], [-75.7, 39.7], [-79.5, 39.7], [-80.5, 39.7], [-80.5, 42.0]]] }}
    ]
};

// Map dynamically re-centered over the US Mid-Atlantic/Northeast (Lat: 41.0, Lon: -76.0)
const map = L.map('map', {
    zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, touchZoom: false
}).setView([41.0, -76.0], 6.0);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

let geojsonLayer;
let currentMonth = "January";
let currentMetric = "pr_sum";
let chartInstances = {};

function getColor(value, metric) {
    if (value === null || value === undefined) return '#e2e8f0';
    if (metric === 'pr_sum') {
        return value > 120 ? '#084594' : value > 80  ? '#2171b5' : value > 40  ? '#4292c6' : value > 10  ? '#9ecae1' : '#f7fbff';
    } else if (metric === 'pr_mean') {
        return value > 8   ? '#005a32' : value > 5   ? '#41ab5d' : value > 3   ? '#74c476' : value > 1   ? '#c7e9c0' : '#f7fcf5';
    } else {
        return value > 8   ? '#4a148c' : value > 6   ? '#7b1fa2' : value > 4   ? '#9c27b0' : value > 2   ? '#e040fb' : '#f3e5f5';
    }
}

function getMetricValue(provinceName, month, metric) {
    const record = precipitationData.find(d => d.name.toLowerCase() === provinceName.toLowerCase() && d.month === month);
    return record ? record[metric] : null;
}

function style(feature) {
    const value = getMetricValue(feature.properties.name, currentMonth, currentMetric);
    return { fillColor: getColor(value, currentMetric), weight: 2, opacity: 1, color: '#cbd5e0', fillOpacity: 0.8 };
}

function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({ weight: 3, color: '#4a5568', fillOpacity: 0.9 });
    layer.bringToFront();
    infoPanel.update(layer.feature.properties);
    
    const card = document.getElementById(`card-${layer.feature.properties.name.toLowerCase().replace(/\s+/g, '-')}`);
    if (card) card.style.borderColor = '#38bdf8';
}

function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
    infoPanel.update();
    
    const card = document.getElementById(`card-${e.target.feature.properties.name.toLowerCase().replace(/\s+/g, '-')}`);
    if (card) card.style.borderColor = 'rgba(125, 211, 252, 0.15)';
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({ mouseover: highlightFeature, mouseout: resetHighlight, click: zoomToFeature });
}

const infoPanel = L.control({position: 'topright'});
infoPanel.onAdd = function () {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
infoPanel.update = function (props) {
    if (props) {
        const valSum = getMetricValue(props.name, currentMonth, 'pr_sum');
        const valMean = getMetricValue(props.name, currentMonth, 'pr_mean');
        const valMax = getMetricValue(props.name, currentMonth, 'pr_max');
        this._div.innerHTML = `<h4>${props.name}</h4><b>Month:</b> ${currentMonth}<br/><br/>` +
            (valSum !== null ? `Total Rainfall: <b>${valSum.toFixed(1)}</b> mm<br/>Mean Daily: <b>${valMean.toFixed(2)}</b> mm<br/>Max Peak Day: <b>${valMax.toFixed(1)}</b> mm` : `<span class="no-data-msg">No data found</span>`);
    } else {
        this._div.innerHTML = '<h4>Regional Statistics</h4>Hover over a state';
    }
};
infoPanel.addTo(map);

const mapLegend = L.control({position: 'bottomright'});
mapLegend.onAdd = function () {
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
        grades = [0, 1, 3, 5, 8];
        this._div.innerHTML += `<strong>Mean Daily (mm)</strong><br>`;
    } else {
        grades = [0, 2, 4, 6, 8];
        this._div.innerHTML += `<strong>Max Recorded (mm)</strong><br>`;
    }
    for (let i = 0; i < grades.length; i++) {
        this._div.innerHTML += '<i style="background:' + getColor(grades[i] + 0.01, currentMetric) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
};
mapLegend.addTo(map);

function updateMapLayer() {
    if (geojsonLayer) { map.removeLayer(geojsonLayer); }
    geojsonLayer = L.geoJson(usStatesGeoJSON, { style: style, onEachFeature: onEachFeature }).addTo(map);
    infoPanel.update();
    mapLegend.updateLegend();
}

function getDaysInMonth(monthName) {
    const monthDays = {
        "January": 31, "February": 28, "March": 31, "April": 30, 
        "May": 31, "June": 30, "July": 31, "August": 31, 
        "September": 30, "October": 31, "November": 30, "December": 31
    };
    return monthDays[monthName] || 30;
}

// Emulates the structural variations modeling Hurricane Sandy's landfall timeframe (late October)
function generateDailyData(region, month, metric, numDays) {
    const monthlyAggregate = getMetricValue(region, month, metric);
    if (monthlyAggregate === null) return [];

    let dailyPoints = [];
    for (let day = 1; day <= numDays; day++) {
        let weight = 0.2; 
        // Sandy made landfall on Oct 29-30, 2012. Heavy remnants shifted through early November.
        if (month === "October" && day >= 27 && day <= 31) {
            weight = (region === "New Jersey" || region === "New York" || region === "Maryland") ? 5.5 : 3.0;
        } else if (month === "November" && day >= 1 && day <= 3) {
            weight = 2.5;
        }
        let cyclicVar = Math.sin(day * 0.9) * Math.cos(day * 0.4);
        let pointBase = (monthlyAggregate / numDays) * (1 + cyclicVar * 0.5) * weight;
        dailyPoints.push(Math.max(0, pointBase));
    }
    return dailyPoints;
}

function initLineCharts() {
    const colors = { 
        "Connecticut": "#4ade80",
        "Maryland": "#38bdf8",
        "New Jersey": "#c084fc",
        "New York": "#f472b6",
        "Pennsylvania": "#fb923c"
    };
    
    const bgColors = { 
        "Connecticut": "rgba(74, 222, 128, 0.03)", 
        "Maryland": "rgba(56, 189, 248, 0.03)", 
        "New Jersey": "rgba(192, 132, 252, 0.03)", 
        "New York": "rgba(244, 114, 182, 0.03)",
        "Pennsylvania": "rgba(251, 146, 60, 0.03)"
    };

    const totalDays = getDaysInMonth(currentMonth);
    const dayLabels = Array.from({ length: totalDays }, (_, i) => (i + 1).toString());

    let allGeneratedData = {};
    let globalMax = 0;

    regions.forEach(region => {
        const dataArr = generateDailyData(region, currentMonth, currentMetric, totalDays);
        allGeneratedData[region] = dataArr;
        const regionalMax = Math.max(...dataArr, 0);
        if (regionalMax > globalMax) globalMax = regionalMax;
    });

    const sharedYMax = globalMax * 1.15;

    regions.forEach(region => {
        const isLeftmost = (region === "Connecticut");
        const elementId = `chart-${region.toLowerCase().replace(/\s+/g, '-')}`;
        const canvas = document.getElementById(elementId);
        if (!canvas) return; // Safeguard if structural DOM items match 4 entries instead of 5
        
        const ctx = canvas.getContext('2d');
        
        chartInstances[region] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dayLabels,
                datasets: [{
                    label: `${currentMetric}`,
                    data: allGeneratedData[region],
                    borderColor: colors[region],
                    backgroundColor: bgColors[region],
                    borderWidth: 2,
                    tension: 0.2,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { 
                        beginAtZero: true,
                        min: 0,
                        max: sharedYMax > 0 ? sharedYMax : 10,
                        display: isLeftmost, 
                        ticks: { color: '#bfdbfe', font: { size: 9 } }, 
                        grid: { color: isLeftmost ? 'rgba(125, 211, 252, 0.08)' : 'transparent' },
                        title: {
                            display: isLeftmost,
                            text: 'Rainfall (mm/day)',
                            color: '#bfdbfe',
                            font: { size: 10, weight: 'bold' }
                        }
                    },
                    x: { 
                        ticks: { color: '#bfdbfe', font: { size: 8 }, maxTicksLimit: 6 }, 
                        grid: { color: 'rgba(125, 211, 252, 0.03)' },
                        title: {
                            display: true,
                            text: 'Days',
                            color: '#bfdbfe',
                            font: { size: 10, weight: '600' }
                        }
                    }
                }
            }
        });
    });
}

function updateAllLineCharts() {
    const totalDays = getDaysInMonth(currentMonth);
    const dayLabels = Array.from({ length: totalDays }, (_, i) => (i + 1).toString());

    let allGeneratedData = {};
    let globalMax = 0;

    regions.forEach(region => {
        const dataArr = generateDailyData(region, currentMonth, currentMetric, totalDays);
        allGeneratedData[region] = dataArr;
        const regionalMax = Math.max(...dataArr, 0);
        if (regionalMax > globalMax) globalMax = regionalMax;
    });

    const sharedYMax = globalMax * 1.15;

    regions.forEach(region => {
        const chart = chartInstances[region];
        if (!chart) return;

        chart.data.labels = dayLabels;
        chart.data.datasets[0].data = allGeneratedData[region];
        chart.options.scales.y.max = sharedYMax > 0 ? sharedYMax : 10;
        chart.update('none'); 
    });
}

const slider = document.getElementById('month-slider');
const monthDisplay = document.getElementById('month-display');
const metricSelect = document.getElementById('metric-select');

slider.addEventListener('input', function(e) {
    currentMonth = months[e.target.value];
    monthDisplay.textContent = currentMonth;
    updateMapLayer();
    updateAllLineCharts(); 
});

metricSelect.addEventListener('change', function(e) {
    currentMetric = e.target.value;
    updateMapLayer();
    updateAllLineCharts();
});

window.addEventListener('load', function() {
    updateMapLayer();
    initLineCharts();
    setTimeout(() => map.invalidateSize(), 100);
});

/* Intro panel animation timeline setup */
(function () {
    const intro = document.getElementById("flood-intro");
    if (!intro) return;

    const eyebrow = intro.querySelector(".flood-eyebrow");
    const line2 = document.getElementById("flood-line2");
    const cta = document.getElementById("flood-cta");

    function show(el, delay) {
        if (!el) return;
        setTimeout(() => el.classList.add("flood-visible"), delay);
    }

    show(eyebrow, 400);
    show(line2, 1200);
    show(cta, 2200);

    if (cta) cta.addEventListener("click", () => {
        intro.classList.add("fade-out");
        setTimeout(() => intro.classList.add("hidden"), 950);
    });
})();