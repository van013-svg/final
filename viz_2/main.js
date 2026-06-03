// main.js - Map Logic, Slider Controls & Synced Multi-Region Charts

const precipitationData = [
    {name:"Anhui",month:"April",pr_sum:100.871155,pr_mean:4.5850525,pr_max:10.453002},
    {name:"Anhui",month:"August",pr_sum:75.83407,pr_mean:3.4470031,pr_max:7.280239},
    {name:"Anhui",month:"December",pr_sum:11.997292,pr_mean:0.5453314,pr_max:1.3681773},
    {name:"Anhui",month:"February",pr_sum:5.5650144,pr_mean:2.410557,pr_max:4.8872867},
    {name:"Anhui",month:"January",pr_sum:9.599905,pr_mean:0.43635932,pr_max:0.9962103},
    {name:"Anhui",month:"July",pr_sum:101.636955,pr_mean:4.6198616,pr_max:5.8446803},
    {name:"Anhui",month:"June",pr_sum:73.09329,pr_mean:3.3224223,pr_max:5.055658},
    {name:"Anhui",month:"March",pr_sum:81.03973,pr_mean:3.683624,pr_max:7.483668},
    {name:"Anhui",month:"May",pr_sum:141.8596,pr_mean:6.448164,pr_max:11.957413},
    {name:"Anhui",month:"November",pr_sum:58.333588,pr_mean:2.6515267,pr_max:4.167222},
    {name:"Anhui",month:"October",pr_sum:42.838055,pr_mean:1.9471843,pr_max:3.017188},
    {name:"Anhui",month:"September",pr_sum:11.398584,pr_mean:0.5181175,pr_max:1.1093187},
    {name:"Hubei",month:"April",pr_sum:128.56174,pr_mean:4.5914907,pr_max:7.493876},
    {name:"Hubei",month:"August",pr_sum:118.93836,pr_mean:4.2477984,pr_max:6.225026},
    {name:"Hubei",month:"December",pr_sum:5.546491,pr_mean:0.19808897,pr_max:0.45209098},
    {name:"Hubei",month:"February",pr_sum:74.4009,pr_mean:2.657175,pr_max:4.224004},
    {name:"Hubei",month:"January",pr_sum:24.660147,pr_mean:0.88071954,pr_max:1.3418885},
    {name:"Hubei",month:"July",pr_sum:73.344604,pr_mean:2.61945,pr_max:3.6133683},
    {name:"Hubei",month:"June",pr_sum:74.492935,pr_mean:2.660462,pr_max:3.5925248},
    {name:"Hubei",month:"March",pr_sum:113.9387,pr_mean:4.069239,pr_max:5.3464913},
    {name:"Hubei",month:"May",pr_sum:265.4238,pr_mean:9.479422,pr_max:13.177361},
    {name:"Hubei",month:"November",pr_sum:63.42099,pr_mean:2.2650354,pr_max:2.8556325},
    {name:"Hubei",month:"October",pr_sum:74.69715,pr_mean:2.6677554,pr_max:3.6038175},
    {name:"Hubei",month:"September",pr_sum:40.014973,pr_mean:1.4291061,pr_max:2.8929641},
    {name:"Hunan",month:"April",pr_sum:241.80814,pr_mean:7.5565042,pr_max:9.935178},
    {name:"Hunan",month:"August",pr_sum:125.35185,pr_mean:3.9172454,pr_max:8.862945},
    {name:"Hunan",month:"December",pr_sum:31.114544,pr_mean:0.9723295,pr_max:1.7755153},
    {name:"Hunan",month:"February",pr_sum:136.40224,pr_mean:4.26257,pr_max:4.8734455},
    {name:"Hunan",month:"January",pr_sum:40.256016,pr_mean:1.2580005,pr_max:1.4526097},
    {name:"Hunan",month:"July",pr_sum:73.49217,pr_mean:2.2966304,pr_max:3.619183},
    {name:"Hunan",month:"June",pr_sum:135.5817,pr_mean:4.236928,pr_max:10.62516},
    {name:"Hunan",month:"March",pr_sum:128.99612,pr_mean:4.031129,pr_max:5.0592003},
    {name:"Hunan",month:"May",pr_sum:272.8097,pr_mean:8.525303,pr_max:14.795588},
    {name:"Hunan",month:"November",pr_sum:84.042656,pr_mean:2.626333,pr_max:3.432719},
    {name:"Hunan",month:"October",pr_sum:84.82446,pr_mean:2.6507645,pr_max:3.7512345},
    {name:"Hunan",month:"September",pr_sum:33.760273,pr_mean:1.0550085,pr_max:1.4860456},
    {name:"Jiangsu",month:"April",pr_sum:42.981064,pr_mean:2.6863165,pr_max:5.860438},
    {name:"Jiangsu",month:"August",pr_sum:81.767426,pr_mean:5.110464,pr_max:7.4781613},
    {name:"Jiangsu",month:"December",pr_sum:9.250931,pr_mean:0.5781832,pr_max:1.1816311},
    {name:"Jiangsu",month:"February",pr_sum:27.832878,pr_mean:1.7395549,pr_max:3.9062247},
    {name:"Jiangsu",month:"January",pr_sum:5.0821643,pr_mean:0.31763527,pr_max:0.66863793},
    {name:"Jiangsu",month:"July",pr_sum:73.68251,pr_mean:4.605157,pr_max:5.8439436},
    {name:"Jiangsu",month:"June",pr_sum:58.89453,pr_mean:3.6809082,pr_max:4.2385354},
    {name:"Jiangsu",month:"March",pr_sum:44.85351,pr_mean:2.8033445,pr_max:5.253693},
    {name:"Jiangsu",month:"May",pr_sum:55.85252,pr_mean:3.4907825,pr_max:7.960109},
    {name:"Jiangsu",month:"November",pr_sum:42.665066,pr_mean:2.6665666,pr_max:4.4686823},
    {name:"Jiangsu",month:"October",pr_sum:26.792295,pr_mean:1.6745185,pr_max:2.7719316},
    {name:"Jiangsu",month:"September",pr_sum:12.126846,pr_mean:0.7579279,pr_max:1.6935483}
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const regions = ["Anhui", "Hubei", "Hunan", "Jiangsu"];

const chinaProvincesGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "name": "Anhui" }, "geometry": { "type": "Polygon", "coordinates": [[[116.5, 33.8], [117.8, 34.3], [118.3, 32.5], [119.5, 31.4], [118.2, 30.1], [116.6, 30.0], [116.5, 33.8]]] }},
        { "type": "Feature", "properties": { "name": "Hubei" }, "geometry": { "type": "Polygon", "coordinates": [[[110.0, 32.5], [113.5, 31.8], [116.1, 31.5], [115.5, 29.8], [114.0, 29.8], [111.0, 30.0], [110.0, 32.5]]] }},
        { "type": "Feature", "properties": { "name": "Hunan" }, "geometry": { "type": "Polygon", "coordinates": [[[110.0, 30.0], [113.0, 29.7], [114.1, 28.5], [113.8, 25.5], [111.5, 25.0], [109.5, 26.5], [110.0, 30.0]]] }},
        { "type": "Feature", "properties": { "name": "Jiangsu" }, "geometry": { "type": "Polygon", "coordinates": [[[118.8, 34.6], [121.5, 34.3], [121.9, 31.8], [120.5, 31.0], [119.5, 31.4], [118.3, 32.5], [118.8, 34.6]]] }}
    ]
};

// Initialize Map centered around central-eastern China with all zoom features disabled
const map = L.map('map', {
    zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, touchZoom: false
}).setView([31.0, 114.0], 4.5);

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
        return value > 200 ? '#084594' : value > 120 ? '#2171b5' : value > 60  ? '#4292c6' : value > 15  ? '#9ecae1' : '#f7fbff';
    } else if (metric === 'pr_mean') {
        return value > 6   ? '#005a32' : value > 4   ? '#41ab5d' : value > 2   ? '#74c476' : value > 0.5 ? '#c7e9c0' : '#f7fcf5';
    } else {
        return value > 12  ? '#4a148c' : value > 8   ? '#7b1fa2' : value > 4   ? '#9c27b0' : value > 1.5 ? '#e040fb' : '#f3e5f5';
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
    
    // UI highlight container matching graph box below
    const card = document.getElementById(`card-${layer.feature.properties.name.toLowerCase()}`);
    if (card) card.style.borderColor = '#38bdf8';
}

function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
    infoPanel.update();
    
    const card = document.getElementById(`card-${e.target.feature.properties.name.toLowerCase()}`);
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
        this._div.innerHTML = `<h4>${props.name} Province</h4><b>Month:</b> ${currentMonth}<br/><br/>` +
            (valSum !== null ? `Total Precipitation: <b>${valSum.toFixed(2)}</b> mm<br/>Mean Precipitation: <b>${valMean.toFixed(2)}</b> mm<br/>Max Precipitation: <b>${valMax.toFixed(2)}</b> mm` : `<span class="no-data-msg">No data found</span>`);
    } else {
        this._div.innerHTML = '<h4>Province Statistics</h4>Hover over a province';
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
        grades = [0, 15, 60, 120, 200];
        this._div.innerHTML += `<strong>Precipitation (mm)</strong><br>`;
    } else if (currentMetric === 'pr_mean') {
        grades = [0, 0.5, 2, 4, 6];
        this._div.innerHTML += `<strong>Mean Daily (mm)</strong><br>`;
    } else {
        grades = [0, 1.5, 4, 8, 12];
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

// ── SYNCED HORIZONTAL MULTI-CHART DAILY LOGIC WITH LOCKED Y-AXIS SCALE ──

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
    if (monthlyAggregate === null) return [];

    let dailyPoints = [];
    if (metric === 'pr_sum') {
        const baseDaily = monthlyAggregate / numDays;
        for (let day = 1; day <= numDays; day++) {
            let variance = Math.sin(day * 0.8) * Math.cos(day * 0.3);
            let dailyVal = baseDaily * (1 + variance * 0.9);
            dailyPoints.push(Math.max(0, dailyVal));
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

// ── SIDE-BY-SIDE DAILY LOGIC WITH CUSTOM DISTINCT AXIS LABELS & COLORS ──

function initLineCharts() {
    // New high-contrast distinct color scheme
    const colors = { 
        "Anhui": "#4ade80",   // Vivid Neon Green
        "Hubei": "#38bdf8",   // Electric Blue
        "Hunan": "#c084fc",   // Vibrant Purple
        "Jiangsu": "#f472b6"  // Hot Pink
    };
    
    const bgColors = { 
        "Anhui": "rgba(74, 222, 128, 0.03)", 
        "Hubei": "rgba(56, 189, 248, 0.03)", 
        "Hunan": "rgba(192, 132, 252, 0.03)", 
        "Jiangsu": "rgba(244, 114, 182, 0.03)" 
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
        const isLeftmost = (region === "Anhui"); // Check if this is the most left plot
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
                        ticks: { 
                            color: '#bfdbfe', 
                            font: { size: 9 } 
                        }, 
                        grid: { 
                            color: isLeftmost ? 'rgba(125, 211, 252, 0.08)' : 'transparent' 
                        },
                        title: {
                            display: isLeftmost,
                            text: 'Precipitation (mm/day)',
                            color: '#bfdbfe', // Swapped to match x-axis label color perfectly
                            font: { size: 10, weight: 'bold' }
                        }
                    },
                    x: { 
                        ticks: { color: '#bfdbfe', font: { size: 8 }, maxTicksLimit: 6 }, 
                        grid: { color: 'rgba(125, 211, 252, 0.03)' },
                        title: {
                            display: true,
                            text: 'Days',
                            color: '#bfdbfe', // Matches here
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
/* ── Flood intro animation ── */
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