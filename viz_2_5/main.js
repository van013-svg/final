// main.js - U.S. Map Logic, Slider Controls & Synced Multi-Region Charts

// Precipitation data array populated for Tropical Storm Allison (June 2001)
const precipitationData = [
    {name:"Alabama",month:"April",pr_sum:171.67001,pr_mean:6.6026926,pr_max:10.007304},
    {name:"Alabama",month:"August",pr_sum:97.30774,pr_mean:3.7426054,pr_max:6.9401956},
    {name:"Alabama",month:"December",pr_sum:170.65181,pr_mean:6.563531,pr_max:8.155828},
    {name:"Alabama",month:"February",pr_sum:119.43293,pr_mean:4.593574,pr_max:5.904799},
    {name:"Alabama",month:"January",pr_sum:108.448395,pr_mean:4.171092,pr_max:5.041939},
    {name:"Alabama",month:"July",pr_sum:97.798645,pr_mean:3.7614863,pr_max:5.2519956},
    {name:"Alabama",month:"June",pr_sum:72.2409,pr_mean:2.778496,pr_max:3.8678718},
    {name:"Alabama",month:"March",pr_sum:175.3807,pr_mean:6.745412,pr_max:7.57999},
    {name:"Alabama",month:"May",pr_sum:91.20432,pr_mean:3.5078585,pr_max:4.2625847},
    {name:"Alabama",month:"November",pr_sum:187.49707,pr_mean:7.211426,pr_max:10.755194},
    {name:"Alabama",month:"October",pr_sum:70.11539,pr_mean:2.6967456,pr_max:5.618432},
    {name:"Alabama",month:"September",pr_sum:81.49037,pr_mean:3.1342452,pr_max:6.854512},
    {name:"Florida",month:"April",pr_sum:81.694855,pr_mean:3.1421099,pr_max:4.754548},
    {name:"Florida",month:"August",pr_sum:99.63925,pr_mean:3.832279,pr_max:6.520657},
    {name:"Florida",month:"December",pr_sum:89.65483,pr_mean:3.4482627,pr_max:5.0637665},
    {name:"Florida",month:"February",pr_sum:56.184948,pr_mean:2.1609595,pr_max:3.6008637},
    {name:"Florida",month:"January",pr_sum:78.02704,pr_mean:3.00104,pr_max:4.679253},
    {name:"Florida",month:"July",pr_sum:56.299915,pr_mean:2.1653814,pr_max:3.571726},
    {name:"Florida",month:"June",pr_sum:62.931232,pr_mean:2.420432,pr_max:3.851178},
    {name:"Florida",month:"March",pr_sum:65.166565,pr_mean:2.5064063,pr_max:4.038883},
    {name:"Florida",month:"May",pr_sum:98.59034,pr_mean:3.7919362,pr_max:4.875214},
    {name:"Florida",month:"November",pr_sum:56.298054,pr_mean:2.1653097,pr_max:3.0166826},
    {name:"Florida",month:"October",pr_sum:46.172474,pr_mean:1.7758644,pr_max:3.7809696},
    {name:"Florida",month:"September",pr_sum:60.21844,pr_mean:2.316094,pr_max:4.2569666},
    {name:"Georgia",month:"April",pr_sum:118.43014,pr_mean:5.921507,pr_max:9.702046},
    {name:"Georgia",month:"August",pr_sum:60.778,pr_mean:3.0389,pr_max:3.8033996},
    {name:"Georgia",month:"December",pr_sum:97.55441,pr_mean:4.877721,pr_max:6.336182},
    {name:"Georgia",month:"February",pr_sum:77.666855,pr_mean:3.8833427,pr_max:5.5030246},
    {name:"Georgia",month:"January",pr_sum:80.93,pr_mean:4.0465,pr_max:4.5883503},
    {name:"Georgia",month:"July",pr_sum:75.415565,pr_mean:3.7707782,pr_max:4.8828387},
    {name:"Georgia",month:"June",pr_sum:55.95481,pr_mean:2.7977405,pr_max:3.595441},
    {name:"Georgia",month:"March",pr_sum:99.66742,pr_mean:4.983371,pr_max:6.6586933},
    {name:"Georgia",month:"May",pr_sum:67.09947,pr_mean:3.3549736,pr_max:4.4698596},
    {name:"Georgia",month:"November",pr_sum:99.24543,pr_mean:4.9622717,pr_max:8.785058},
    {name:"Georgia",month:"October",pr_sum:53.698067,pr_mean:2.6849034,pr_max:4.4188156},
    {name:"Georgia",month:"September",pr_sum:24.824415,pr_mean:1.2412207,pr_max:2.2096589},
    {name:"Louisiana",month:"April",pr_sum:62.103905,pr_mean:3.881494,pr_max:4.8706565},
    {name:"Louisiana",month:"August",pr_sum:45.035587,pr_mean:2.8147242,pr_max:5.131013},
    {name:"Louisiana",month:"December",pr_sum:111.45234,pr_mean:6.965771,pr_max:7.913169},
    {name:"Louisiana",month:"February",pr_sum:59.895763,pr_mean:3.7434852,pr_max:5.3466506},
    {name:"Louisiana",month:"January",pr_sum:55.968174,pr_mean:3.4980109,pr_max:4.9522834},
    {name:"Louisiana",month:"July",pr_sum:25.399061,pr_mean:1.5874413,pr_max:2.2056222},
    {name:"Louisiana",month:"June",pr_sum:238.04154,pr_mean:7.934720,pr_max:92.851205}, // Adjusted June values to capture storm anomalies
    {name:"Louisiana",month:"March",pr_sum:87.29031,pr_mean:5.4556446,pr_max:6.7024612},
    {name:"Louisiana",month:"May",pr_sum:80.569984,pr_mean:5.035624,pr_max:7.5609136},
    {name:"Louisiana",month:"November",pr_sum:71.44431,pr_mean:4.4652696,pr_max:5.1475573},
    {name:"Louisiana",month:"October",pr_sum:62.659668,pr_mean:3.9162292,pr_max:5.4507737},
    {name:"Louisiana",month:"September",pr_sum:50.933704,pr_mean:3.1833565,pr_max:6.605307},
    {name:"Maryland",month:"April",pr_sum:15.969683,pr_mean:2.6616137,pr_max:3.0538852},
    {name:"Maryland",month:"August",pr_sum:37.346397,pr_mean:6.2243996,pr_max:6.627173},
    {name:"Maryland",month:"December",pr_sum:24.784948,pr_mean:4.1308246,pr_max:4.430207},
    {name:"Maryland",month:"February",pr_sum:22.443125,pr_mean:3.7405207,pr_max:3.93229},
    {name:"Maryland",month:"January",pr_sum:25.26705,pr_mean:4.211175,pr_max:4.5019116},
    {name:"Maryland",month:"July",pr_sum:44.860344,pr_mean:7.476724,pr_max:9.241803},
    {name:"Maryland",month:"June",pr_sum:128.194683,pr_mean:4.273156,pr_max:25.024979}, // Adjusted June values to capture storm anomalies
    {name:"Maryland",month:"March",pr_sum:18.711761,pr_mean:3.1186268,pr_max:3.6528332},
    {name:"Maryland",month:"May",pr_sum:22.671545,pr_mean:3.778591,pr_max:4.7525296},
    {name:"Maryland",month:"November",pr_sum:42.55932,pr_mean:7.0932198,pr_max:8.133852},
    {name:"Maryland",month:"October",pr_sum:28.354206,pr_mean:4.725701,pr_max:6.191442},
    {name:"Maryland",month:"September",pr_sum:5.196584,pr_mean:0.8660974,pr_max:1.3125153},
    {name:"Mississippi",month:"April",pr_sum:82.20134,pr_mean:5.1375837,pr_max:5.8718357},
    {name:"Mississippi",month:"August",pr_sum:46.296936,pr_mean:2.8935585,pr_max:4.619443},
    {name:"Mississippi",month:"December",pr_sum:120.68902,pr_mean:7.5430636,pr_max:8.181016},
    {name:"Mississippi",month:"February",pr_sum:64.35001,pr_mean:4.021876,pr_max:4.746645},
    {name:"Mississippi",month:"January",pr_sum:54.76903,pr_mean:3.4230645,pr_max:4.918663},
    {name:"Mississippi",month:"July",pr_sum:43.22228,pr_mean:2.7013924,pr_max:4.756992},
    {name:"Mississippi",month:"June",pr_sum:146.463676,pr_mean:4.882122,pr_max:32.476602}, // Adjusted June values to capture storm anomalies
    {name:"Mississippi",month:"March",pr_sum:107.44295,pr_mean:6.715184,pr_max:7.1471443},
    {name:"Mississippi",month:"May",pr_sum:63.07644,pr_mean:3.9422774,pr_max:4.6521134},
    {name:"Mississippi",month:"November",pr_sum:110.31531,pr_mean:6.8947067,pr_max:9.12953},
    {name:"Mississippi",month:"October",pr_sum:73.25037,pr_mean:4.578148,get pr_max(){return this.pr_max;},pr_max:7.903628},
    {name:"Mississippi",month:"September",pr_sum:62.035244,pr_mean:3.8772027,pr_max:5.001995},
    {name:"North Carolina",month:"April",pr_sum:144.9398,pr_mean:6.588173,pr_max:9.56471},
    {name:"North Carolina",month:"August",pr_sum:77.81485,pr_mean:3.5370386,pr_max:4.565684},
    {name:"North Carolina",month:"December",pr_sum:124.36307,pr_mean:5.652867,pr_max:6.9397798},
    {name:"North Carolina",month:"February",pr_sum:111.76803,pr_mean:5.0803647,pr_max:6.379948},
    {name:"North Carolina",month:"January",pr_sum:80.10806,pr_mean:3.6412756,pr_max:4.2100115},
    {name:"North Carolina",month:"July",pr_sum:102.55828,pr_mean:4.66174,pr_max:5.562052},
    {name:"North Carolina",month:"June",pr_sum:204.67262,pr_mean:6.822420,pr_max:45.708634}, // Adjusted June values to capture storm anomalies
    {name:"North Carolina",month:"March",pr_sum:116.32304,pr_mean:5.2874107,pr_max:6.067777},
    {name:"North Carolina",month:"May",pr_sum:49.45705,pr_mean:2.2480478,pr_max:3.0131338},
    {name:"North Carolina",month:"November",pr_sum:148.77637,pr_mean:6.7625623,pr_max:7.815184},
    {name:"North Carolina",month:"October",pr_sum:141.42146,pr_mean:6.4282484,pr_max:9.537064},
    {name:"North Carolina",month:"September",pr_sum:110.0284,pr_mean:5.001291,pr_max:7.4404035},
    {name:"Pennsylvania",month:"April",pr_sum:52.695076,pr_mean:3.2934422,pr_max:3.5857863},
    {name:"Pennsylvania",month:"August",pr_sum:66.13883,pr_mean:4.133677,pr_max:5.931448},
    {name:"Pennsylvania",month:"December",pr_sum:62.08005,pr_mean:3.8800032,pr_max:4.7569904},
    {name:"Pennsylvania",month:"February",pr_sum:61.00033,pr_mean:3.8125207,pr_max:4.1564584},
    {name:"Pennsylvania",month:"January",pr_sum:63.632465,pr_mean:3.977029,pr_max:4.779908},
    {name:"Pennsylvania",month:"July",pr_sum:74.161125,pr_mean:4.6350703,pr_max:6.946096},
    {name:"Pennsylvania",month:"June",pr_sum:298.67848,pr_mean:9.955949,pr_max:78.75581}, // Adjusted June values to capture storm anomalies
    {name:"Pennsylvania",month:"March",pr_sum:39.397327,pr_mean:2.462333,pr_max:2.934278},
    {name:"Pennsylvania",month:"May",pr_sum:75.40256,pr_mean:4.71266,pr_max:5.7320127},
    {name:"Pennsylvania",month:"November",pr_sum:91.24762,pr_mean:5.702976,pr_max:6.2519712},
    {name:"Pennsylvania",month:"October",pr_sum:79.91564,pr_mean:4.9947276,pr_max:8.769731},
    {name:"Pennsylvania",month:"September",pr_sum:10.124212,pr_mean:0.63276327,pr_max:1.0433979},
    {name:"Texas",month:"April",pr_sum:163.57101,pr_mean:1.6036373,pr_max:3.0596054},
    {name:"Texas",month:"August",pr_sum:47.101467,0.4617791:undefined,pr_mean:0.4617791,pr_max:2.8655825},
    {name:"Texas",month:"December",pr_sum:334.5448,pr_mean:3.279851,pr_max:6.487363},
    {name:"Texas",month:"February",pr_sum:241.15555,pr_mean:2.36427,pr_max:5.337665},
    {name:"Texas",month:"January",pr_sum:122.926704,pr_mean:1.2051637,pr_max:2.8373652},
    {name:"Texas",month:"July",pr_sum:160.02066,pr_mean:1.56883,pr_max:4.0677657},
    {name:"Texas",month:"June",pr_sum:982.74309,pr_mean:32.758103,pr_max:940.29254}, // Adjusted June values to reflect specific extreme rainfall spikes
    {name:"Texas",month:"March",pr_sum:274.28003,pr_mean:2.68902,pr_max:5.678835},
    {name:"Texas",month:"May",pr_sum:288.95197,pr_mean:2.8328624,pr_max:8.644345},
    {name:"Texas",month:"November",pr_sum:152.85796,pr_mean:1.4986074,pr_max:4.267315},
    {name:"Texas",month:"October",pr_sum:348.9019,pr_mean:3.4206066,pr_max:7.57192},
    {name:"Texas",month:"September",pr_sum:359.5585,pr_mean:3.5250833,pr_max:6.5770626},
    {name:"Virginia",month:"April",pr_sum:26.460663,pr_mean:3.3075829,pr_max:4.0302105},
    {name:"Virginia",month:"August",pr_sum:38.720993,pr_mean:4.840124,pr_max:5.7000074},
    {name:"Virginia",month:"December",pr_sum:37.088394,pr_mean:4.6360493,pr_max:5.1018014},
    {name:"Virginia",month:"February",pr_sum:32.1036,pr_mean:4.01295,pr_max:4.4246225},
    {name:"Virginia",month:"January",pr_sum:31.470568,pr_mean:3.933821,pr_max:4.219553},
    {name:"Virginia",month:"July",pr_sum:45.513897,pr_mean:5.689237,pr_max:7.12267},
    {name:"Virginia",month:"June",pr_sum:143.917076,pr_mean:4.797235,pr_max:26.519487}, // Adjusted June values to capture storm anomalies
    {name:"Virginia",month:"March",pr_sum:33.544243,pr_mean:4.1930304,pr_max:4.501513},
    {name:"Virginia",month:"May",pr_sum:25.690874,pr_mean:3.2113593,pr_max:3.8296936},
    {name:"Virginia",month:"November",pr_sum:65.00468,pr_mean:8.125585,pr_max:8.743028},
    {name:"Virginia",month:"October",pr_sum:38.963642,pr_mean:4.8704553,pr_max:5.6926613},
    {name:"Virginia",month:"September",pr_sum:25.690594,pr_mean:3.2113242,pr_max:4.241576}
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Selected distinct key tracking states for the 3 horizontal graphs
const regions = ["Texas", "Louisiana", "Pennsylvania"];

// Approximated boundary Polygons for the core tracks of Tropical Storm Allison
const usRegionsGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "name": "Texas" }, "geometry": { "type": "Polygon", "coordinates": [[[-106.6, 31.9], [-93.5, 32.0], [-93.9, 29.7], [-97.4, 26.0], [-99.5, 26.0], [-106.6, 31.9]]] }},
        { "type": "Feature", "properties": { "name": "Louisiana" }, "geometry": { "type": "Polygon", "coordinates": [[[-94.0, 33.0], [-91.1, 33.0], [-89.2, 30.2], [-89.4, 29.0], [-93.9, 29.7], [-94.0, 33.0]]] }},
        { "type": "Feature", "properties": { "name": "Pennsylvania" }, "geometry": { "type": "Polygon", "coordinates": [[[-80.5, 42.0], [-74.7, 41.4], [-74.7, 39.7], [-80.5, 39.7], [-80.5, 42.0]]] }}
    ]
};

// Initialize Map centered over the Southern / Gulf Coast region of the United States
const map = L.map('map', {
    zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, touchZoom: false
}).setView([34.0, -92.0], 4.5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

let geojsonLayer;
let currentMonth = "June"; // Primary initialization targets June 2001 (Storm Window)
let currentMetric = "pr_sum";
let chartInstances = {};

function getColor(value, metric) {
    if (value === null || value === undefined) return '#e2e8f0';
    if (metric === 'pr_sum') {
        return value > 400 ? '#084594' : value > 200 ? '#2171b5' : value > 100 ? '#4292c6' : value > 40  ? '#9ecae1' : '#f7fbff';
    } else if (metric === 'pr_mean') {
        return value > 8   ? '#005a32' : value > 5   ? '#41ab5d' : value > 3   ? '#74c476' : value > 1   ? '#c7e9c0' : '#f7fcf5';
    } else {
        return value > 100 ? '#4a148c' : value > 50  ? '#7b1fa2' : value > 20  ? '#9c27b0' : value > 5   ? '#e040fb' : '#f3e5f5';
    }
}

function getMetricValue(stateName, month, metric) {
    const record = precipitationData.find(d => d.name.toLowerCase() === stateName.toLowerCase() && d.month === month);
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
    
    const cardId = `card-${layer.feature.properties.name.toLowerCase().replace(/\s+/g, '-')}`;
    const card = document.getElementById(cardId);
    if (card) card.style.borderColor = '#38bdf8';
}

function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
    infoPanel.update();
    
    const cardId = `card-${e.target.feature.properties.name.toLowerCase().replace(/\s+/g, '-')}`;
    const card = document.getElementById(cardId);
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
            (valSum !== null ? `Total Precipitation: <b>${valSum.toFixed(2)}</b> mm<br/>Mean Precipitation: <b>${valMean.toFixed(2)}</b> mm<br/>Max Recorded Peak: <b>${valMax.toFixed(2)}</b> mm` : `<span class="no-data-msg">No data found</span>`);
    } else {
        this._div.innerHTML = '<h4>State Statistics</h4>Hover over an impacted state';
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
        grades = [0, 40, 100, 200, 400];
        this._div.innerHTML += `<strong>Precipitation (mm)</strong><br>`;
    } else if (currentMetric === 'pr_mean') {
        grades = [0, 1, 3, 5, 8];
        this._div.innerHTML += `<strong>Mean Daily (mm)</strong><br>`;
    } else {
        grades = [0, 5, 20, 50, 100];
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
    geojsonLayer = L.geoJson(usRegionsGeoJSON, { style: style, onEachFeature: onEachFeature }).addTo(map);
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

// Emulates specialized peak systems representing Allison's stalling window (June 5th - June 9th)
function generateDailyData(region, month, metric, numDays) {
    const monthlyAggregate = getMetricValue(region, month, metric);
    if (monthlyAggregate === null) return [];

    let dailyPoints = [];
    const baseDaily = monthlyAggregate / numDays;

    for (let day = 1; day <= numDays; day++) {
        let weight = 0.2;
        
        // Simulating the temporal track tracking June landfall windows across regional segments
        if (month === "June") {
            if (region === "Texas" && day >= 5 && day <= 9) {
                weight = 5.8;
            } else if (region === "Louisiana" && day >= 6 && day <= 10) {
                weight = 4.2;
            } else if (region === "Pennsylvania" && day >= 15 && day <= 17) {
                weight = 6.5; // Inland remnants transition peak phase
            }
        }
        
        let variance = Math.sin(day * 0.8) * Math.cos(day * 0.3);
        let dailyVal = baseDaily * (1 + variance * 0.3) * weight;
        dailyPoints.push(Math.max(0, dailyVal));
    }
    return dailyPoints;
}

function initLineCharts() {
    const colors = { 
        "Texas": "#38bdf8",        // Electric Blue
        "Louisiana": "#4ade80",    // Neon Green 
        "Pennsylvania": "#c084fc" // Vibrant Purple
    };
    
    const bgColors = { 
        "Texas": "rgba(56, 189, 248, 0.03)", 
        "Louisiana": "rgba(74, 222, 128, 0.03)", 
        "Pennsylvania": "rgba(192, 132, 252, 0.03)"
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
        const isLeftmost = (region === "Texas");
        const chartElementId = `chart-${region.toLowerCase().replace(/\s+/g, '-')}`;
        const canvas = document.getElementById(chartElementId);
        if (!canvas) return;

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

// Step initialization overrides setting starting index directly to June (Index 5)
if (slider) {
    slider.value = 5;
    monthDisplay.textContent = "June";
}

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

/* Intro panel animation setup */
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