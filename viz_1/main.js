// main.js - Map Logic, Shared Limits, & Horizontal Synced Controls

const climateData = [
    { "name": "Hubei", "month": "January", "pr_max": 0.00002582, "tas_max": 274.57 },
    { "name": "Hubei", "month": "February", "pr_max": 0.00003448, "tas_max": 276.87 },
    { "name": "Hubei", "month": "March", "pr_max": 0.00004637, "tas_max": 282.65 },
    { "name": "Hubei", "month": "April", "pr_max": 0.00011443, "tas_max": 287.30 },
    { "name": "Hubei", "month": "May", "pr_max": 0.00007921, "tas_max": 292.51 },
    { "name": "Hubei", "month": "June", "pr_max": 0.00005220, "tas_max": 297.66 },
    { "name": "Hubei", "month": "July", "pr_max": 0.00008094, "tas_max": 298.38 },
    { "name": "Hubei", "month": "August", "pr_max": 0.00005358, "tas_max": 299.30 },
    { "name": "Hubei", "month": "September", "pr_max": 0.00012105, "tas_max": 293.97 },
    { "name": "Hubei", "month": "October", "pr_max": 0.00003477, "tas_max": 287.49 },
    { "name": "Hubei", "month": "November", "pr_max": 0.00003398, "tas_max": 282.21 },
    { "name": "Hubei", "month": "December", "pr_max": 0.00001213, "tas_max": 275.22 },
    { "name": "Shandong", "month": "January", "pr_max": 0.00001004, "tas_max": 270.65 },
    { "name": "Shandong", "month": "February", "pr_max": 0.00000688, "tas_max": 274.43 },
    { "name": "Shandong", "month": "March", "pr_max": 0.00001692, "tas_max": 280.84 },
    { "name": "Shandong", "month": "April", "pr_max": 0.00001843, "tas_max": 288.02 },
    { "name": "Shandong", "month": "May", "pr_max": 0.00004245, "tas_max": 295.24 },
    { "name": "Shandong", "month": "June", "pr_max": 0.00007210, "tas_max": 296.62 },
    { "name": "Shandong", "month": "July", "pr_max": 0.00009207, "tas_max": 299.69 },
    { "name": "Shandong", "month": "August", "pr_max": 0.00005215, "tas_max": 297.94 },
    { "name": "Shandong", "month": "September", "pr_max": 0.00001358, "tas_max": 296.00 },
    { "name": "Shandong", "month": "October", "pr_max": 0.00002300, "tas_max": 287.21 },
    { "name": "Shandong", "month": "November", "pr_max": 0.00003607, "tas_max": 280.27 },
    { "name": "Shandong", "month": "December", "pr_max": 0.00000917, "tas_max": 273.87 }
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const targetRegions = ["Hubei", "Shandong"];
let chartInstances = {};

const chinaProvincesGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "Hubei" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [110.0, 32.0], [111.0, 32.5], [113.0, 31.8], [114.5, 31.5], [116.0, 30.0],
                    [115.0, 29.5], [114.0, 29.0], [112.0, 29.5], [109.0, 30.0], [110.0, 32.0]
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

// Set view balanced between Hubei and Shandong
const map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    touchZoom: false
}).setView([33.5, 116.0], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

let geojsonLayer;
let currentMonth = "January";
let currentMetric = "tas_max"; // Default starting metric

function getColor(value, metric) {
    if (value === null || value === undefined) return '#e2e8f0';
    if (metric === 'tas_max') {
        // Temperature scale (Kelvin values around 270K - 300K)
        return value > 295 ? '#bd0026' : value > 290 ? '#f03b20' : value > 280 ? '#fd8d3c' : value > 274 ? '#fecc5c' : '#ffffcc';
    } else {
        // Precipitation scale (Scientific notation thresholds)
        return value > 0.00010 ? '#084594' : value > 0.00007 ? '#2171b5' : value > 0.00004 ? '#4292c6' : value > 0.00001 ? '#9ecae1' : '#f7fbff';
    }
}

function getMetricValue(provinceName, month, metric) {
    const record = climateData.find(d => d.name.toLowerCase() === provinceName.toLowerCase() && d.month === month);
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
        const valTas = getMetricValue(props.name, currentMonth, 'tas_max');
        const valPr = getMetricValue(props.name, currentMonth, 'pr_max');
        this._div.innerHTML = `<h4>${props.name} Province</h4><b>Month:</b> ${currentMonth}<br/><br/>` +
            (valTas !== null ? `Max Temperature: <b>${valTas.toFixed(2)}</b> K<br/>Max Precipitation: <b>${valPr.toExponential(4)}</b>` : `<span class="no-data-msg">No data found</span>`);
    } else {
        this._div.innerHTML = '<h4>Province Statistics</h4>Hover over Hubei or Shandong';
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
    if (currentMetric === 'tas_max') {
        grades = [270, 274, 280, 290, 295];
        this._div.innerHTML += `<strong>Max Temp (Kelvin)</strong><br>`;
        for (let i = 0; i < grades.length; i++) {
            this._div.innerHTML += '<i style="background:' + getColor(grades[i] + 0.1, currentMetric) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
    } else {
        grades = [0.00000, 0.00001, 0.00004, 0.00007, 0.00010];
        this._div.innerHTML += `<strong>Max Precip (pr_max)</strong><br>`;
        for (let i = 0; i < grades.length; i++) {
            this._div.innerHTML += '<i style="background:' + getColor(grades[i] + 0.000001, currentMetric) + '"></i> ' +
                grades[i].toExponential(1) + (grades[i + 1] ? '&ndash;' + grades[i + 1].toExponential(1) + '<br>' : '+');
        }
    }
};
mapLegend.addTo(map);

function updateMapLayer() {
    if (geojsonLayer) { map.removeLayer(geojsonLayer); }
    geojsonLayer = L.geoJson(chinaProvincesGeoJSON, { style: style, onEachFeature: onEachFeature }).addTo(map);
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

function generateDailyData(region, month, metric, numDays) {
    const monthlyAggregate = getMetricValue(region, month, metric);
    if (monthlyAggregate === null) return new Array(numDays).fill(0);

    let dailyPoints = [];
    if (metric === 'tas_max') {
        // Temperature tracking: slight wave variance around the base monthly maximum
        for (let day = 1; day <= numDays; day++) {
            let variance = Math.sin(day * 0.4) * 2.5; 
            dailyPoints.push(monthlyAggregate - Math.abs(variance));
        }
    } else {
        // Precipitation tracking: spike variance across days
        for (let day = 1; day <= numDays; day++) {
            let spikeFactor = Math.abs(Math.sin(day * 1.2));
            if (day % 8 === 0) spikeFactor = 1.0; 
            dailyPoints.push(monthlyAggregate * (0.1 + spikeFactor * 0.9));
        }
    }
    return dailyPoints;
}

function initLineCharts() {
    const colors = { "Hubei": "#4ade80", "Shandong": "#c084fc" };
    const bgColors = { "Hubei": "rgba(74, 222, 128, 0.03)", "Shandong": "rgba(192, 132, 252, 0.03)" };

    const totalDays = getDaysInMonth(currentMonth);
    const dayLabels = Array.from({ length: totalDays }, (_, i) => (i + 1).toString());

    let allGeneratedData = {};
    let globalMax = 0;
    let globalMin = Infinity;

    targetRegions.forEach(region => {
        const dataArr = generateDailyData(region, currentMonth, currentMetric, totalDays);
        allGeneratedData[region] = dataArr;
        globalMax = Math.max(globalMax, ...dataArr);
        globalMin = Math.min(globalMin, ...dataArr);
    });

    targetRegions.forEach(region => {
        const el = document.getElementById(`chart-${region.toLowerCase()}`);
        if (!el) return; // Safely skip charts if standard DOM cards are omitted
        const ctx = el.getContext('2d');
        const isLeftmost = (region === targetRegions[0]);
        
        let yMin = 0;
        let yMax = globalMax * 1.05;
        if (currentMetric === 'tas_max') {
            yMin = globalMin * 0.98; // Pad context window around absolute zero variations
        }

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
                        beginAtZero: currentMetric !== 'tas_max',
                        min: yMin,
                        max: yMax,
                        display: true, 
                        ticks: { 
                            color: '#bfdbfe', 
                            font: { size: 9 },
                            callback: function(value) {
                                return currentMetric === 'tas_max' ? value.toFixed(0) : value.toExponential(1);
                            }
                        }, 
                        grid: { color: 'rgba(125, 211, 252, 0.08)' },
                        title: {
                            display: isLeftmost,
                            text: currentMetric === 'tas_max' ? 'Max Temp (Kelvin)' : 'Max Precip',
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
    let globalMin = Infinity;

    targetRegions.forEach(region => {
        const dataArr = generateDailyData(region, currentMonth, currentMetric, totalDays);
        allGeneratedData[region] = dataArr;
        globalMax = Math.max(globalMax, ...dataArr);
        globalMin = Math.min(globalMin, ...dataArr);
    });

    let yMin = 0;
    let yMax = globalMax * 1.05;
    if (currentMetric === 'tas_max') {
        yMin = globalMin * 0.98;
    }

    targetRegions.forEach(region => {
        const chart = chartInstances[region];
        if (!chart) return;

        chart.data.labels = dayLabels;
        chart.data.datasets[0].label = currentMetric;
        chart.data.datasets[0].data = allGeneratedData[region];
        chart.options.scales.y.beginAtZero = currentMetric !== 'tas_max';
        chart.options.scales.y.min = yMin;
        chart.options.scales.y.max = yMax;
        chart.update('none'); 
    });
}

// ── CONTROL EVENT LISTENERS ──
const slider = document.getElementById('month-slider');
const monthDisplay = document.getElementById('month-display');
const btnTas = document.getElementById('btn-tas');
const btnPr = document.getElementById('btn-pr');

slider.addEventListener('input', function(e) {
    currentMonth = months[e.target.value];
    monthDisplay.textContent = currentMonth;
    updateMapLayer();
    updateAllLineCharts();
});

// Event handlers for side-by-side action buttons
btnTas.addEventListener('click', function() {
    if (currentMetric === 'tas_max') return;
    currentMetric = 'tas_max';
    btnTas.classList.add('active');
    btnPr.classList.remove('active');
    updateMapLayer();
    updateAllLineCharts();
});

btnPr.addEventListener('click', function() {
    if (currentMetric === 'pr_max') return;
    currentMetric = 'pr_max';
    btnPr.classList.add('active');
    btnTas.classList.remove('active');
    updateMapLayer();
    updateAllLineCharts();
});

window.addEventListener('load', function() {
    updateMapLayer();
    initLineCharts();
    setTimeout(() => map.invalidateSize(), 100);
});

// Intro Animation Panel Logic
(function () {
    const intro = document.getElementById("flood-intro");
    if (!intro) return;

    const eyebrow = intro.querySelector(".flood-eyebrow");
    const line1 = document.getElementById("flood-line1");
    const body = document.getElementById("flood-body");
    const cta = document.getElementById("flood-cta");

    function show(el, delay) {
        if (!el) return;
        setTimeout(() => el.classList.add("flood-visible"), delay);
    }

    show(eyebrow, 400);
    show(line1, 900);
    show(body, 2700);
    show(cta, 3500);

    if (cta) cta.addEventListener("click", () => {
        intro.classList.add("fade-out");
        setTimeout(() => intro.classList.add("hidden"), 950);
    });
})();

// Timed annotation handling
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