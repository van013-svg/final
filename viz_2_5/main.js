// --- 1. Raw Data Extraction ---
// Parsed directly from your dataset to map months smoothly
const climateData = [
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "April", tas_max: 284.82 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "August", tas_max: 299.45 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "December", tas_max: 277.38 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "February", tas_max: 275.94 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "January", tas_max: 272.43 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "July", tas_max: 300.48 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "June", tas_max: 297.94 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "March", tas_max: 280.80 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "May", tas_max: 290.51 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "November", tas_max: 285.24 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "October", tas_max: 290.11 },
    { name: "Anhui", month: "April", pr_max: 0.00012098, month_y: "September", tas_max: 292.91 },
    { name: "Anhui", month: "August", pr_max: 0.00008426, month_y: "August", tas_max: 299.45 },
    { name: "Anhui", month: "December", pr_max: 0.00001584, month_y: "December", tas_max: 277.38 },
    { name: "Anhui", month: "February", pr_max: 0.00005657, month_y: "February", tas_max: 275.94 },
    { name: "Anhui", month: "January", pr_max: 0.00001153, month_y: "January", tas_max: 272.43 },
    { name: "Anhui", month: "July", pr_max: 0.00006765, month_y: "July", tas_max: 300.48 },
    { name: "Anhui", month: "June", pr_max: 0.00005851, month_y: "June", tas_max: 297.94 },
    { name: "Anhui", month: "March", pr_max: 0.00008662, month_y: "March", tas_max: 280.80 },
    { name: "Anhui", month: "May", pr_max: 0.00013840, month_y: "May", tas_max: 290.51 },
    { name: "Anhui", month: "November", pr_max: 0.00004823, month_y: "November", tas_max: 285.24 },
    { name: "Anhui", month: "October", pr_max: 0.00003492, month_y: "October", tas_max: 290.11 },
    { name: "Anhui", month: "September", pr_max: 0.00001284, month_y: "September", tas_max: 292.91 },
    
    { name: "Hubei", month: "April", pr_max: 0.00008673, month_y: "April", tas_max: 285.70 },
    { name: "Hubei", month: "August", pr_max: 0.00007205, month_y: "August", tas_max: 299.38 },
    { name: "Hubei", month: "December", pr_max: 0.00000523, month_y: "December", tas_max: 277.28 },
    { name: "Hubei", month: "February", pr_max: 0.00004889, month_y: "February", tas_max: 275.92 },
    { name: "Hubei", month: "January", pr_max: 0.00001553, month_y: "January", tas_max: 273.13 },
    { name: "Hubei", month: "July", pr_max: 0.00004182, month_y: "July", tas_max: 300.97 },
    { name: "Hubei", month: "June", pr_max: 0.00004158, month_y: "June", tas_max: 297.87 },
    { name: "Hubei", month: "March", pr_max: 0.00006188, month_y: "March", tas_max: 282.32 },
    { name: "Hubei", month: "May", pr_max: 0.00015252, month_y: "May", tas_max: 289.82 },
    { name: "Hubei", month: "November", pr_max: 0.00003305, month_y: "November", tas_max: 283.83 },
    { name: "Hubei", month: "October", pr_max: 0.00004171, month_y: "October", tas_max: 289.68 },
    { name: "Hubei", month: "September", pr_max: 0.00003348, month_y: "September", tas_max: 293.60 },

    { name: "Hunan", month: "April", pr_max: 0.00011499, month_y: "April", tas_max: 287.52 },
    { name: "Hunan", month: "August", pr_max: 0.00010258, month_y: "August", tas_max: 299.27 },
    { name: "Hunan", month: "December", pr_max: 0.00002055, month_y: "December", tas_max: 278.23 },
    { name: "Hunan", month: "February", pr_max: 0.00005641, month_y: "February", tas_max: 278.28 },
    { name: "Hunan", month: "January", pr_max: 0.00001681, month_y: "January", tas_max: 274.29 },
    { name: "Hunan", month: "July", pr_max: 0.00004189, month_y: "July", tas_max: 300.68 },
    { name: "Hunan", month: "June", pr_max: 0.00012298, month_y: "June", tas_max: 297.48 },
    { name: "Hunan", month: "March", pr_max: 0.00005856, month_y: "March", tas_max: 285.23 },
    { name: "Hunan", month: "May", pr_max: 0.00017125, month_y: "May", tas_max: 293.67 },
    { name: "Hunan", month: "November", pr_max: 0.00003973, month_y: "November", tas_max: 285.25 },
    { name: "Hunan", month: "October", pr_max: 0.00004342, month_y: "October", tas_max: 290.73 },
    { name: "Hunan", month: "September", pr_max: 0.00001720, month_y: "September", tas_max: 293.60 },

    { name: "Jiangsu", month: "April", pr_max: 0.00006783, month_y: "April", tas_max: 285.48 },
    { name: "Jiangsu", month: "August", pr_max: 0.00008655, month_y: "August", tas_max: 299.15 },
    { name: "Jiangsu", month: "December", pr_max: 0.00001368, month_y: "December", tas_max: 278.02 },
    { name: "Jiangsu", month: "February", pr_max: 0.00004521, month_y: "February", tas_max: 275.56 },
    { name: "Jiangsu", month: "January", pr_max: 0.00000774, month_y: "January", tas_max: 272.61 },
    { name: "Jiangsu", month: "July", pr_max: 0.00006764, month_y: "July", tas_max: 299.93 },
    { name: "Jiangsu", month: "June", pr_max: 0.00004906, month_y: "June", tas_max: 297.80 },
    { name: "Jiangsu", month: "March", pr_max: 0.00006081, month_y: "March", tas_max: 280.48 },
    { name: "Jiangsu", month: "May", pr_max: 0.00009213, month_y: "May", tas_max: 291.83 },
    { name: "Jiangsu", month: "November", pr_max: 0.00005172, month_y: "November", tas_max: 286.06 },
    { name: "Jiangsu", month: "October", pr_max: 0.00003208, month_y: "October", tas_max: 290.29 },
    { name: "Jiangsu", month: "September", pr_max: 0.00001960, month_y: "September", tas_max: 293.36 }
];

// --- 2. State & Constants ---
const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let activeMetric = "tas_max"; // Default active variable tracker
let selectedMonthIndex = 0;   // Controlled by the timeline slider
const chartInstances = {};

// --- 3. Leaflet Map Initialization ---
const map = L.map('map').setView([30.5 /* Latitude */, 114.3 /* Longitude */], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// --- 4. Chart Generation (Chart.js Layouts) ---
function getMetricLabel(metric) {
    return metric === "tas_max" ? "Max Temperature (K)" : "Max Precipitation (kg m⁻² s⁻¹)";
}

function getMetricColor(metric) {
    return metric === "tas_max" ? "rgba(229, 62, 62, 1)" : "rgba(49, 130, 206, 1)";
}

function getMetricBgColor(metric) {
    return metric === "tas_max" ? "rgba(229, 62, 62, 0.2)" : "rgba(49, 130, 206, 0.2)";
}

function initializeCharts() {
    const provinces = ["anhui", "hubei", "hunan", "jiangsu"];
    
    provinces.forEach(prov => {
        const canvasId = `chart-${prov}`;
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        // Extract chronologically compiled array metrics for lines
        const provinceProperName = prov.charAt(0).toUpperCase() + prov.slice(1);
        const chronologicalData = monthsArray.map(m => {
            const row = climateData.find(d => d.name === provinceProperName && (d.month === m || d.month_y === m));
            return row ? row[activeMetric] : 0;
        });

        chartInstances[prov] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: monthsArray.map(m => m.substring(0, 3)),
                datasets: [{
                    label: getMetricLabel(activeMetric),
                    data: chronologicalData,
                    borderColor: getMetricColor(activeMetric),
                    backgroundColor: getMetricBgColor(activeMetric),
                    borderWidth: 2,
                    fill: true,
                    pointBackgroundColor: monthsArray.map((_, i) => i === selectedMonthIndex ? '#000' : getMetricColor(activeMetric)),
                    pointRadius: monthsArray.map((_, i) => i === selectedMonthIndex ? 6 : 3)
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: false }
                }
            }
        });
    });
}

function updateChartsData() {
    Object.keys(chartInstances).forEach(prov => {
        const chart = chartInstances[prov];
        const provinceProperName = prov.charAt(0).toUpperCase() + prov.slice(1);

        // Regenerate data according to selection changes
        const updatedData = monthsArray.map(m => {
            const row = climateData.find(d => d.name === provinceProperName && (d.month === m || d.month_y === m));
            return row ? row[activeMetric] : 0;
        });

        chart.data.datasets[0].label = getMetricLabel(activeMetric);
        chart.data.datasets[0].data = updatedData;
        chart.data.datasets[0].borderColor = getMetricColor(activeMetric);
        chart.data.datasets[0].backgroundColor = getMetricBgColor(activeMetric);

        // Highlight currently indexed month step indicator node points
        chart.data.datasets[0].pointBackgroundColor = monthsArray.map((_, i) => i === selectedMonthIndex ? '#2b6cb0' : getMetricColor(activeMetric));
        chart.data.datasets[0].pointRadius = monthsArray.map((_, i) => i === selectedMonthIndex ? 7 : 3);
        
        chart.update();
    });
}

// --- 5. Interactive Event Listeners Configuration ---
function setupInteractionControls() {
    const monthSlider = document.getElementById('month-slider');
    const monthDisplay = document.getElementById('month-display');
    
    // Wire timeline slider 
    if (monthSlider && monthDisplay) {
        monthSlider.addEventListener('input', (e) => {
            selectedMonthIndex = parseInt(e.target.value);
            monthDisplay.textContent = monthsArray[selectedMonthIndex];
            updateChartsData();
        });
    }

    // Connect side-by-side metric buttons
    const btnTas = document.getElementById('btn-tas');
    const btnPr = document.getElementById('btn-pr');

    if (btnTas && btnPr) {
        btnTas.addEventListener('click', () => {
            activeMetric = "tas_max";
            btnTas.classList.add('active');
            btnPr.classList.remove('active');
            updateChartsData();
        });

        btnPr.addEventListener('click', () => {
            activeMetric = "pr_max";
            btnPr.classList.add('active');
            btnTas.classList.remove('active');
            updateChartsData();
        });
    }

    // Simple splash page intro animation handler integration 
    const introSection = document.getElementById('flood-intro');
    const ctaButton = document.getElementById('flood-cta');
    if (ctaButton && introSection) {
        ctaButton.addEventListener('click', () => {
            introSection.style.opacity = '0';
            setTimeout(() => introSection.style.display = 'none', 500);
        });
    }
}

// --- 6. Orchestrated Application Init Block ---
document.addEventListener("DOMContentLoaded", () => {
    initializeCharts();
    setupInteractionControls();
});