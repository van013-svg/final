// main.js - Map Logic, Shared Limits, & Horizontal Synced Controls

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
    {name:"Shandong",month:"March",pr_sum:28.191977,pr_mean:1.0843068,pr_max:1.781577},
    {name:"Shandong",month:"May",pr_sum:60.642136,pr_mean:2.3323898,pr_max:4.3422184},
    {name:"Shandong",month:"November",pr_sum:58.03797,pr_mean:2.2322297,pr_max:3.1168227},
    {name:"Shandong",month:"October",pr_sum:39.351383,pr_mean:1.5135148,pr_max:1.987463},
    {name:"Shandong",month:"September",pr_sum:7.538385,pr_mean:0.28993788,pr_max:1.1736186}
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const targetRegions = ["Hebei", "Henan", "Shandong"];
let chartInstances = {};

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

const map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    touchZoom: false
}).setView([36.5, 116.0], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

let geojsonLayer;
let currentMonth = "January";
let currentMetric = "pr_sum";

function getColor(value, metric) {
    if (value === null || value === undefined) return '#e2e8f0';
    if (metric === 'pr_sum') {
        return value > 120 ? '#084594' : value > 80 ? '#2171b5' : value > 40 ? '#4292c6' : value > 10 ? '#9ecae1' : '#f7fbff';
    } else if (metric === 'pr_mean') {
        return value > 4 ? '#005a32' : value > 2.5 ? '#41ab5d' : value > 1 ? '#74c476' : value > 0.3 ? '#c7e9c0' : '#f7fcf5';
    } else {
        return value > 5 ? '#4a148c' : value > 3 ? '#7b1fa2' : value > 1.5 ? '#9c27b0' : value > 0.4 ? '#e040fb' : '#f3e5f5';
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
        weight: 2,
        opacity: 1,
        color: '#cbd5e0',
        dashArray: '',
        fillOpacity: 0.8
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

// ── DAILY RESOLUTION TIME LOGIC & HIGH CONTRAST CHARTS ──
function getDaysInMonth(monthName) {
    const monthDays = {
        "January": 31, "February": 28, "March": 31, "April": 30, 
        "May": 31, "June": 30, "July": 31, "August": 31, 
        "September": 30, "October": 31, "November": 30, "December": 31
    };
    return monthDays[monthName] || 30;
}

function generateDailyData(region, month, metric, numDays) {
    const monthlyAggregate = getMetricValue(region, month, metric);
    if (monthlyAggregate === null) return new Array(numDays).fill(0);

    let dailyPoints = [];
    if (metric === 'pr_sum') {
        const baseDaily = monthlyAggregate / numDays;
        for (let day = 1; day <= numDays; day++) {
            let variance = Math.sin(day * 0.8) * Math.cos(day * 0.3);
            dailyPoints.push(Math.max(0, baseDaily * (1 + variance * 0.9)));
        }
    } else if (metric === 'pr_mean') {
        for (let day = 1; day <= numDays; day++) {
            let variance = Math.sin(day * 0.5) * 0.4;
            dailyPoints.push(Math.max(0, monthlyAggregate + variance));
        }
    } else {
        for (let day = 1; day <= numDays; day++) {
            let spikeFactor = Math.abs(Math.sin(day * 1.2));
            if (day % 7 === 0) spikeFactor = 1.0; 
            dailyPoints.push(monthlyAggregate * (0.2 + spikeFactor * 0.8));
        }
    }
    return dailyPoints;
}

function initLineCharts() {
    // Distinct vibrant color profiles mapped to Hebei, Henan, and Shandong
    const colors = { "Hebei": "#4ade80", "Henan": "#38bdf8", "Shandong": "#c084fc" };
    const bgColors = { "Hebei": "rgba(74, 222, 128, 0.03)", "Henan": "rgba(56, 189, 248, 0.03)", "Shandong": "rgba(192, 132, 252, 0.03)" };

    const totalDays = getDaysInMonth(currentMonth);
    const dayLabels = Array.from({ length: totalDays }, (_, i) => (i + 1).toString());

    let allGeneratedData = {};
    let globalMax = 0;

    targetRegions.forEach(region => {
        const dataArr = generateDailyData(region, currentMonth, currentMetric, totalDays);
        allGeneratedData[region] = dataArr;
        const regionalMax = Math.max(...dataArr, 0);
        if (regionalMax > globalMax) globalMax = regionalMax;
    });

    const sharedYMax = globalMax * 1.15;

    targetRegions.forEach(region => {
        const isLeftmost = (region === "Hebei");
        const ctx = document.getElementById(`chart-${region.toLowerCase()}`).getContext('2d');
        
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
                            text: 'Precipitation (mm/day)',
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

    targetRegions.forEach(region => {
        const dataArr = generateDailyData(region, currentMonth, currentMetric, totalDays);
        allGeneratedData[region] = dataArr;
        const regionalMax = Math.max(...dataArr, 0);
        if (regionalMax > globalMax) globalMax = regionalMax;
    });

    const sharedYMax = globalMax * 1.15;

    targetRegions.forEach(region => {
        const chart = chartInstances[region];
        if (!chart) return;

        chart.data.labels = dayLabels;
        chart.data.datasets[0].data = allGeneratedData[region];
        chart.options.scales.y.max = sharedYMax > 0 ? sharedYMax : 10;
        chart.update('none'); 
    });
}

// ── CONTROL EVENT LISTENERS ──
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

// Intro Animation
(function () {
    const intro = document.getElementById("flood-intro");
    if (!intro) return;

    const eyebrow = intro.querySelector(".flood-eyebrow");
    const line1 = document.getElementById("flood-line1");
    const line2 = document.getElementById("flood-line2");
    const body = document.getElementById("flood-body");
    const cta = document.getElementById("flood-cta");

    function show(el, delay) {
        if (!el) return;
        setTimeout(() => el.classList.add("flood-visible"), delay);
    }

    show(eyebrow, 400);
    show(line1, 900);
    show(line2, 1700);
    show(body, 2700);
    show(cta, 3500);

    if (cta) cta.addEventListener("click", () => {
        intro.classList.add("fade-out");
        setTimeout(() => intro.classList.add("hidden"), 950);
    });
})();

// Timed annotation: show for 10 seconds, then fade into a button
document.addEventListener("DOMContentLoaded", () => {
  const annotation = document.getElementById("map-annotation");
  const toggleButton = document.getElementById("annotation-toggle");

  if (!annotation || !toggleButton) return;

  function hideAnnotation() {
    annotation.classList.add("is-hidden");
    toggleButton.classList.add("is-visible");
  }

  function showAnnotation() {
    annotation.classList.remove("is-hidden");
    toggleButton.classList.remove("is-visible");

    setTimeout(hideAnnotation, 10000);
  }

  setTimeout(hideAnnotation, 10000);

  toggleButton.addEventListener("click", showAnnotation);
});