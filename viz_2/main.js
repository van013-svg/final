<<<<<<< Updated upstream
// main.js - Refactored Map Logic, Button Toggles & Dynamic Multi-Region Charts

// Original raw row data provided converted to compressed processing lookup objects
// const rawClimateRows = [
//     {name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:284.82214},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:299.4544},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:277.3813},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:275.93506},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:272.4338},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:300.47678},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:297.9428},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:280.80023},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:290.5127},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:285.2441},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:290.11386},{name:"Anhui",month:"April",day:16,pr_max:0.000120983816,tas_max:292.9052},
//     {name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:284.82214},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:299.4544},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:277.3813},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:275.93506},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:272.4338},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:300.47678},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:297.9428},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:280.80023},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:290.5127},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:285.2441},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:290.11386},{name:"Anhui",month:"August",day:16,pr_max:8.426203e-05,tas_max:292.9052},
//     {name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:284.82214},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:299.4544},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:277.3813},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:275.93506},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:272.4338},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:300.47678},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:297.9428},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:280.80023},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:290.5127},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:285.2441},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:290.11386},{name:"Anhui",month:"December",day:16,pr_max:1.5835385e-05,tas_max:292.9052},
//     {name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:284.82214},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:299.4544},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:277.3813},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:275.93506},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:272.4338},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:300.47678},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:297.9428},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:280.80023},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:290.5127},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:285.2441},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:290.11386},{name:"Anhui",month:"February",day:15,pr_max:5.656582e-05,tas_max:292.9052},
//     {name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:284.82214},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:299.4544},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:277.3813},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:275.93506},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:272.4338},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:300.47678},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:297.9428},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:280.80023},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:290.5127},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:285.2441},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:290.11386},{name:"Anhui",month:"January",day:16,pr_max:1.1530212e-05,tas_max:292.9052},
//     {name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:284.82214},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:299.4544},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:277.3813},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:275.93506},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:272.4338},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:300.47678},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:297.9428},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:280.80023},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:290.5127},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:285.2441},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:290.11386},{name:"Anhui",month:"July",day:16,pr_max:6.764676e-05,tas_max:292.9052},
//     {name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:284.82214},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:299.4544},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:277.3813},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:275.93506},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:272.4338},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:300.47678},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:297.9428},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:280.80023},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:290.5127},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:285.2441},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:290.11386},{name:"Anhui",month:"June",day:16,pr_max:5.851456e-05,tas_max:292.9052},
//     {name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:284.82214},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:299.4544},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:277.3813},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:275.93506},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:272.4338},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:300.47678},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:297.9428},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:280.80023},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:290.5127},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:285.2441},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:290.11386},{name:"Anhui",month:"March",day:16,pr_max:8.661653e-05,tas_max:292.9052},
//     {name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:284.82214},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:299.4544},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:277.3813},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:275.93506},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:272.4338},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:300.47678},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:297.9428},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:280.80023},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:290.5127},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:285.2441},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:290.11386},{name:"Anhui",month:"May",day:16,pr_max:0.00013839598,tas_max:292.9052},
//     {name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:284.82214},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:299.4544},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:277.3813},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:275.93506},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:272.4338},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:300.47678},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:297.9428},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:280.80023},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:290.5127},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:285.2441},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:290.11386},{name:"Anhui",month:"November",day:16,pr_max:4.8231737e-05,tas_max:292.9052},
//     {name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:284.82214},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:299.4544},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:277.3813},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:275.93506},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:272.4338},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:300.47678},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:297.9428},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:280.80023},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:290.5127},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:285.2441},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:290.11386},{name:"Anhui",month:"October",day:16,pr_max:3.492116e-05,tas_max:292.9052},
//     {name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:284.82214},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:299.4544},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:277.3813},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:275.93506},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:272.4338},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:300.47678},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:297.9428},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:280.80023},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:290.5127},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:285.2441},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:290.11386},{name:"Anhui",month:"September",day:16,pr_max:1.2839338e-05,tas_max:292.9052},
    
//     {name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:285.7019},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:299.37894},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:277.28302},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:275.9181},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:273.13394},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:300.96927},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:297.86743},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:282.31693},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:289.82214},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:283.8319},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:289.6805},{name:"Hubei",month:"April",day:16,pr_max:8.6734675e-05,tas_max:293.60306},
//     {name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:285.7019},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:299.37894},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:277.28302},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:275.9181},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:273.13394},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:300.96927},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:297.86743},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:282.31693},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:289.82214},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:283.8319},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:289.6805},{name:"Hubei",month:"August",day:16,pr_max:7.204891e-05,tas_max:293.60306},
//     {name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:285.7019},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:299.37894},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:277.28302},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:275.9181},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:273.13394},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:300.96927},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:297.86743},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:282.31693},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:289.82214},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:283.8319},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:289.6805},{name:"Hubei",month:"December",day:16,pr_max:5.2325345e-06,tas_max:293.60306},
//     {name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:285.7019},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:299.37894},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:277.28302},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:275.9181},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:273.13394},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:300.96927},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:297.86743},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:282.31693},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:289.82214},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:283.8319},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:289.6805},{name:"Hubei",month:"February",day:15,pr_max:4.8888935e-05,tas_max:293.60306},
//     {name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:285.7019},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:299.37894},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:277.28302},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:275.9181},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:273.13394},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:300.96927},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:297.86743},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:282.31693},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:289.82214},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:283.8319},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:289.6805},{name:"Hubei",month:"January",day:16,pr_max:1.5531117e-05,tas_max:293.60306},
//     {name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:285.7019},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:299.37894},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:277.28302},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:275.9181},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:273.13394},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:300.96927},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:297.86743},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:282.31693},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:289.82214},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:283.8319},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:289.6805},{name:"Hubei",month:"July",day:16,pr_max:4.1821393e-05,tas_max:293.60306},
//     {name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:285.7019},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:299.37894},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:277.28302},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:275.9181},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:273.13394},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:300.96927},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:297.86743},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:282.31693},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:289.82214},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:283.8319},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:289.6805},{name:"Hubei",month:"June",day:16,pr_max:4.1580148e-05,tas_max:293.60306},
//     {name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:285.7019},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:299.37894},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:277.28302},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:275.9181},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:273.13394},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:300.96927},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:297.86743},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:282.31693},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:289.82214},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:283.8319},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:289.6805},{name:"Hubei",month:"March",day:16,pr_max:6.188069e-05,tas_max:293.60306},
//     {name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:285.7019},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:299.37894},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:277.28302},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:275.9181},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:273.13394},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:300.96927},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:297.86743},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:282.31693},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:289.82214},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:283.8319},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:289.6805},{name:"Hubei",month:"May",day:16,pr_max:0.00015251574,tas_max:293.60306},
//     {name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:285.7019},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:299.37894},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:277.28302},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:275.9181},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:273.13394},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:300.96927},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:297.86743},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:282.31693},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:289.82214},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:283.8319},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:289.6805},{name:"Hubei",month:"November",day:16,pr_max:3.3051303e-05,tas_max:293.60306},
//     {name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:285.7019},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:299.37894},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:277.28302},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:275.9181},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:273.13394},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:300.96927},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:297.86743},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:282.31693},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:289.82214},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:283.8319},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:289.6805},{name:"Hubei",month:"October",day:16,pr_max:4.171085e-05,tas_max:293.60306},
//     {name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:285.7019},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:299.37894},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:277.28302},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:275.9181},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:273.13394},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:300.96927},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:297.86743},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:282.31693},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:289.82214},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:283.8319},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:289.6805},{name:"Hubei",month:"September",day:16,pr_max:3.3483382e-05,tas_max:293.60306},
    
//     {name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:287.5192},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:299.27258},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:278.23114},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:278.27985},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:274.2917},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:300.6844},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:297.48074},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:285.22534},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:293.6725},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:285.24518},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:290.72833},{name:"Hunan",month:"April",day:16,pr_max:0.000114990486,tas_max:293.59656},
//     {name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:287.5192},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:299.27258},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:278.23114},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:278.27985},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:274.2917},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:300.6844},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:297.48074},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:285.22534},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:293.6725},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:285.24518},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:290.72833},{name:"Hunan",month:"August",day:16,pr_max:0.00010258038,tas_max:293.59656},
//     {name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:287.5192},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:299.27258},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:278.23114},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:278.27985},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:274.2917},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:300.6844},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:297.48074},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:285.22534},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:293.6725},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:285.24518},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:290.72833},{name:"Hunan",month:"December",day:16,pr_max:2.0549945e-05,tas_max:293.59656},
//     {name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:287.5192},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:299.27258},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:278.23114},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:278.27985},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:274.2917},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:300.6844},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:297.48074},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:285.22534},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:293.6725},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:285.24518},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:290.72833},{name:"Hunan",month:"February",day:15,pr_max:5.640562e-05,tas_max:293.59656},
//     {name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:287.5192},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:299.27258},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:278.23114},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:278.27985},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:274.2917},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:300.6844},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:297.48074},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:285.22534},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:293.6725},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:285.24518},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:290.72833},{name:"Hunan",month:"January",day:16,pr_max:1.6812612e-05,tas_max:293.59656},
//     {name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:287.5192},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:299.27258},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:278.23114},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:278.27985},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:274.2917},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:300.6844},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:297.48074},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:285.22534},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:293.6725},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:285.24518},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:290.72833},{name:"Hunan",month:"July",day:16,pr_max:4.1888692e-05,tas_max:293.59656},
//     {name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:287.5192},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:299.27258},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:278.23114},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:278.27985},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:274.2917},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:300.6844},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:297.48074},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:285.22534},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:293.6725},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:285.24518},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:290.72833},{name:"Hunan",month:"June",day:16,pr_max:0.00012297639,tas_max:293.59656},
//     {name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:287.5192},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:299.27258},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:278.23114},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:278.27985},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:274.2917},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:300.6844},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:297.48074},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:285.22534},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:293.6725},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:285.24518},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:290.72833},{name:"Hunan",month:"March",day:16,pr_max:5.8555557e-05,tas_max:293.59656},
//     {name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:287.5192},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:299.27258},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:278.23114},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:278.27985},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:274.2917},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:300.6844},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:297.48074},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:285.22534},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:293.6725},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:285.24518},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:290.72833},{name:"Hunan",month:"May",day:16,pr_max:0.00017124522,tas_max:293.59656},
//     {name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:287.5192},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:299.27258},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:278.23114},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:278.27985},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:274.2917},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:300.6844},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:297.48074},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:285.22534},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:293.6725},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:285.24518},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:290.72833},{name:"Hunan",month:"November",day:16,pr_max:3.9730545e-05,tas_max:293.59656},
//     {name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:287.5192},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:299.27258},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:278.23114},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:278.27985},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:274.2917},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:300.6844},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:297.48074},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:285.22534},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:293.6725},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:285.24518},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:290.72833},{name:"Hunan",month:"October",day:16,pr_max:4.3417065e-05,tas_max:293.59656},
//     {name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:287.5192},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:299.27258},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:278.23114},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:278.27985},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:274.2917},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:300.6844},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:297.48074},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:285.22534},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:293.6725},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:285.24518},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:290.72833},{name:"Hunan",month:"September",day:16,pr_max:1.7199602e-05,tas_max:293.59656},
    
//     {name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:285.48044},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:299.14883},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:278.02176},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:275.55856},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:272.6115},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:299.93222},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:297.80356},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:280.48},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:291.8321},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:286.0586},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:290.2926},{name:"Jiangsu",month:"April",day:16,pr_max:6.782914e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:285.48044},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:299.14883},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:278.02176},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:275.55856},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:272.6115},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:299.93222},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:297.80356},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:280.48},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:291.8321},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:286.0586},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:290.2926},{name:"Jiangsu",month:"August",day:16,pr_max:8.655279e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:285.48044},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:299.14883},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:278.02176},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:275.55856},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:272.6115},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:299.93222},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:297.80356},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:280.48},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:291.8321},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:286.0586},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:290.2926},{name:"Jiangsu",month:"December",day:16,pr_max:1.3676286e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:285.48044},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:299.14883},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:278.02176},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:275.55856},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:272.6115},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:299.93222},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:297.80356},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:280.48},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:291.8321},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:286.0586},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:290.2926},{name:"Jiangsu",month:"February",day:15,pr_max:4.5210934e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:285.48044},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:299.14883},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:278.02176},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:275.55856},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:272.6115},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:299.93222},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:297.80356},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:280.48},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:291.8321},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:286.0586},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:290.2926},{name:"Jiangsu",month:"January",day:16,pr_max:7.738865e-06,tas_max:293.3612},
//     {name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:285.48044},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:299.14883},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:278.02176},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:275.55856},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:272.6115},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:299.93222},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:297.80356},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:280.48},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:291.8321},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:286.0586},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:290.2926},{name:"Jiangsu",month:"July",day:16,pr_max:6.63823e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:285.48044},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:299.14883},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:278.02176},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:275.55856},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:272.6115},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:299.93222},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:297.80356},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:280.48},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:291.8321},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:286.0586},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:290.2926},{name:"Jiangsu",month:"June",day:16,pr_max:4.9057122e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:285.48044},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:299.14883},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:278.02176},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:275.55856},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:272.6115},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:299.93222},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:297.80356},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:280.48},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:291.8321},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:286.0586},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:290.2926},{name:"Jiangsu",month:"March",day:16,pr_max:6.0806633e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:285.48044},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:299.14883},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:278.02176},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:275.55856},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:272.6115},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:299.93222},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:297.80356},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:280.48},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:291.8321},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:286.0586},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:290.2926},{name:"Jiangsu",month:"May",day:16,pr_max:9.21309e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:285.48044},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:299.14883},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:278.02176},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:275.55856},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:272.6115},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:299.93222},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:297.80356},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:280.48},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:291.8321},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:286.0586},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:290.2926},{name:"Jiangsu",month:"November",day:16,pr_max:5.1720857e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:285.48044},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:299.14883},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:278.02176},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:275.55856},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:272.6115},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:299.93222},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:297.80356},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:280.48},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:291.8321},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:286.0586},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:290.2926},{name:"Jiangsu",month:"October",day:16,pr_max:3.2082542e-05,tas_max:293.3612},
//     {name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:285.48044},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:299.14883},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:278.02176},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:275.55856},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:272.6115},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:299.93222},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:297.80356},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:280.48},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:291.8321},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:286.0586},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:290.2926},{name:"Jiangsu",month:"September",day:16,pr_max:1.9601253e-05,tas_max:293.3612}
// ];
// 1. Define an empty array to hold your data globally
let rawClimateRows = [];

// 2. Fetch and parse the CSV
fetch('data/df_1998.csv') // Replace with your actual CSV file path
    .then(response => response.text())
    .then(csvText => {
        // Split text into rows and filter out empty lines
        const lines = csvText.split('\n').map(line => line.trim()).filter(line => line);
        
        // Remove the header row (,name,month,day,pr_max,tas_max)
        const headers = lines.shift().split(',');

        // Map the remaining lines into your object format
        rawClimateRows = lines.map(line => {
            const values = line.split(',');
            return {
                name: values[1],
                month: values[2],
                day: parseInt(values[3], 10),
                pr_max: parseFloat(values[4]),
                tas_max: parseFloat(values[5])
            };
        });

        // 3. Initialize your application here
        initApp();
    })
    .catch(error => console.error('Error loading the CSV file:', error));

// Move any logic that depends on rawClimateRows inside this function
function initApp() {
    console.log("Data loaded successfully!", rawClimateRows);
    // Your visualization or application logic goes here
}
// Helper to scale small raw precipitation units to readable graph profiles
const PR_SCALE_FACTOR = 100000; 

// Aggregate the data array to extract unique metric baselines per region & month
const processedPrecipitationData = [];
const aggregatedBaselines = {};

rawClimateRows.forEach(row => {
    const key = `${row.name}-${row.month}`;
    if (!aggregatedBaselines[key]) {
        aggregatedBaselines[key] = { name: row.name, month: row.month, pr_max: row.pr_max * PR_SCALE_FACTOR, tas_sum: 0, count: 0 };
    }
    // Kelvin to Celsius transformation: C = K - 273.15
    aggregatedBaselines[key].tas_sum += (row.tas_max - 273.15);
    aggregatedBaselines[key].count += 1;
});

Object.keys(aggregatedBaselines).forEach(k => {
    const item = aggregatedBaselines[k];
    processedPrecipitationData.push({
        name: item.name,
        month: item.month,
        pr_max: item.pr_max,
        tas_max: item.tas_sum / item.count // Mean of maximum daily temperatures
    });
});
=======
// main.js - Processed Multi-Row Climate Data Layout Engine

const rawClimateData = [
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:284.82214,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:299.4544,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:277.3813,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:275.93506,day:15},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:272.4338,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:300.47678,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:297.9428,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:280.80023,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:290.5127,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:285.2441,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:290.11386,day:16},
    {name:"Anhui",month:"April",pr_max:10.453002,tas_max:292.9052,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:284.82214,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:299.4544,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:277.3813,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:275.93506,day:15},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:272.4338,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:300.47678,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:297.9428,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:280.80023,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:290.5127,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:285.2441,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:290.11386,day:16},
    {name:"Anhui",month:"August",pr_max:7.280239,tas_max:292.9052,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:284.82214,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:299.4544,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:277.3813,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:275.93506,day:15},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:272.4338,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:300.47678,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:297.9428,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:280.80023,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:290.5127,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:285.2441,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:290.11386,day:16},
    {name:"Anhui",month:"December",pr_max:1.3681773,tas_max:292.9052,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:284.82214,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:299.4544,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:277.3813,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:275.93506,day:15},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:272.4338,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:300.47678,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:297.9428,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:280.80023,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:290.5127,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:285.2441,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:290.11386,day:16},
    {name:"Anhui",month:"February",pr_max:4.8872867,tas_max:292.9052,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:284.82214,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:299.4544,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:277.3813,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:275.93506,day:15},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:272.4338,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:300.47678,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:297.9428,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:280.80023,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:290.5127,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:285.2441,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:290.11386,day:16},
    {name:"Anhui",month:"January",pr_max:0.9962103,tas_max:292.9052,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:284.82214,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:299.4544,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:277.3813,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:275.93506,day:15},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:272.4338,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:300.47678,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:297.9428,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:280.80023,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:290.5127,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:285.2441,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:290.11386,day:16},
    {name:"Anhui",month:"July",pr_max:5.8446803,tas_max:292.9052,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:284.82214,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:299.4544,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:277.3813,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:275.93506,day:15},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:272.4338,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:300.47678,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:297.9428,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:280.80023,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:290.5127,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:285.2441,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:290.11386,day:16},
    {name:"Anhui",month:"June",pr_max:5.055658,tas_max:292.9052,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:284.82214,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:299.4544,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:277.3813,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:275.93506,day:15},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:272.4338,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:300.47678,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:297.9428,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:280.80023,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:290.5127,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:285.2441,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:290.11386,day:16},
    {name:"Anhui",month:"March",pr_max:7.483668,tas_max:292.9052,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:284.82214,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:299.4544,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:277.3813,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:275.93506,day:15},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:272.4338,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:300.47678,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:297.9428,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:280.80023,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:290.5127,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:285.2441,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:290.11386,day:16},
    {name:"Anhui",month:"May",pr_max:11.957413,tas_max:292.9052,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:284.82214,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:299.4544,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:277.3813,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:275.93506,day:15},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:272.4338,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:300.47678,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:297.9428,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:280.80023,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:290.5127,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:285.2441,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:290.11386,day:16},
    {name:"Anhui",month:"November",pr_max:4.167222,tas_max:292.9052,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:284.82214,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:299.4544,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:277.3813,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:275.93506,day:15},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:272.4338,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:300.47678,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:297.9428,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:280.80023,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:290.5127,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:285.2441,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:290.11386,day:16},
    {name:"Anhui",month:"October",pr_max:3.017188,tas_max:292.9052,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:284.82214,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:299.4544,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:277.3813,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:275.93506,day:15},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:272.4338,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:300.47678,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:297.9428,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:280.80023,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:290.5127,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:285.2441,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:290.11386,day:16},
    {name:"Anhui",month:"September",pr_max:1.1093187,tas_max:292.9052,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:285.7019,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:299.37894,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:277.28302,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:275.9181,day:15},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:273.13394,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:300.96927,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:297.86743,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:282.31693,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:289.82214,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:283.8319,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:289.6805,day:16},
    {name:"Hubei",month:"April",pr_max:7.493876,tas_max:293.60306,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:285.7019,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:299.37894,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:277.28302,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:275.9181,day:15},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:273.13394,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:300.96927,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:297.86743,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:282.31693,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:289.82214,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:283.8319,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:289.6805,day:16},
    {name:"Hubei",month:"August",pr_max:6.225026,tas_max:293.60306,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:285.7019,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:299.37894,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:277.28302,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:275.9181,day:15},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:273.13394,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:300.96927,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:297.86743,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:282.31693,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:289.82214,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:283.8319,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:289.6805,day:16},
    {name:"Hubei",month:"December",pr_max:0.452091,tas_max:293.60306,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:285.7019,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:299.37894,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:277.28302,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:275.9181,day:15},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:273.13394,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:300.96927,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:297.86743,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:282.31693,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:289.82214,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:283.8319,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:289.6805,day:16},
    {name:"Hubei",month:"February",pr_max:4.224004,tas_max:293.60306,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:285.7019,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:299.37894,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:277.28302,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:275.9181,day:15},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:273.13394,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:300.96927,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:297.86743,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:282.31693,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:289.82214,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:283.8319,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:289.6805,day:16},
    {name:"Hubei",month:"January",pr_max:1.341889,tas_max:293.60306,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:285.7019,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:299.37894,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:277.28302,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:275.9181,day:15},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:273.13394,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:300.96927,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:297.86743,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:282.31693,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:289.82214,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:283.8319,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:289.6805,day:16},
    {name:"Hubei",month:"July",pr_max:3.613368,tas_max:293.60306,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:285.7019,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:299.37894,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:277.28302,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:275.9181,day:15},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:273.13394,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:300.96927,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:297.86743,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:282.31693,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:289.82214,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:283.8319,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:289.6805,day:16},
    {name:"Hubei",month:"June",pr_max:3.592525,tas_max:293.60306,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:285.7019,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:299.37894,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:277.28302,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:275.9181,day:15},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:273.13394,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:300.96927,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:297.86743,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:282.31693,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:289.82214,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:283.8319,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:289.6805,day:16},
    {name:"Hubei",month:"March",pr_max:5.346491,tas_max:293.60306,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:285.7019,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:299.37894,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:277.28302,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:275.9181,day:15},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:273.13394,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:300.96927,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:297.86743,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:282.31693,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:289.82214,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:283.8319,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:289.6805,day:16},
    {name:"Hubei",month:"May",pr_max:13.177361,tas_max:293.60306,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:285.7019,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:299.37894,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:277.28302,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:275.9181,day:15},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:273.13394,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:300.96927,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:297.86743,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:282.31693,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:289.82214,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:283.8319,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:289.6805,day:16},
    {name:"Hubei",month:"November",pr_max:2.855633,tas_max:293.60306,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:285.7019,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:299.37894,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:277.28302,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:275.9181,day:15},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:273.13394,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:300.96927,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:297.86743,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:282.31693,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:289.82214,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:283.8319,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:289.6805,day:16},
    {name:"Hubei",month:"October",pr_max:3.603817,tas_max:293.60306,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:285.7019,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:299.37894,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:277.28302,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:275.9181,day:15},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:273.13394,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:300.96927,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:297.86743,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:282.31693,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:289.82214,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:283.8319,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:289.6805,day:16},
    {name:"Hubei",month:"September",pr_max:2.892964,tas_max:293.60306,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:287.5192,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:299.27258,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:278.23114,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:278.27985,day:15},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:274.2917,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:300.6844,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:297.48074,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:285.22534,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:293.6725,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:285.24518,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:290.72833,day:16},
    {name:"Hunan",month:"April",pr_max:9.935178,tas_max:293.59656,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:287.5192,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:299.27258,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:278.23114,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:278.27985,day:15},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:274.2917,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:300.6844,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:297.48074,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:285.22534,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:293.6725,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:285.24518,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:290.72833,day:16},
    {name:"Hunan",month:"August",pr_max:8.862945,tas_max:293.59656,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:287.5192,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:299.27258,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:278.23114,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:278.27985,day:15},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:274.2917,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:300.6844,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:297.48074,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:285.22534,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:293.6725,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:285.24518,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:290.72833,day:16},
    {name:"Hunan",month:"December",pr_max:1.775515,tas_max:293.59656,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:287.5192,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:299.27258,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:278.23114,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:278.27985,day:15},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:274.2917,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:300.6844,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:297.48074,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:285.22534,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:293.6725,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:285.24518,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:290.72833,day:16},
    {name:"Hunan",month:"February",pr_max:4.873446,tas_max:293.59656,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:287.5192,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:299.27258,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:278.23114,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:278.27985,day:15},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:274.2917,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:300.6844,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:297.48074,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:285.22534,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:293.6725,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:285.24518,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:290.72833,day:16},
    {name:"Hunan",month:"January",pr_max:1.45261,tas_max:293.59656,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:287.5192,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:299.27258,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:278.23114,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:278.27985,day:15},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:274.2917,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:300.6844,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:297.48074,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:285.22534,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:293.6725,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:285.24518,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:290.72833,day:16},
    {name:"Hunan",month:"July",pr_max:3.619183,tas_max:293.59656,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:287.5192,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:299.27258,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:278.23114,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:278.27985,day:15},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:274.2917,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:300.6844,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:297.48074,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:285.22534,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:293.6725,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:285.24518,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:290.72833,day:16},
    {name:"Hunan",month:"June",pr_max:10.62516,tas_max:293.59656,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:287.5192,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:299.27258,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:278.23114,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:278.27985,day:15},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:274.2917,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:300.6844,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:297.48074,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:285.22534,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:293.6725,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:285.24518,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:290.72833,day:16},
    {name:"Hunan",month:"March",pr_max:5.0592,tas_max:293.59656,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:287.5192,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:299.27258,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:278.23114,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:278.27985,day:15},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:274.2917,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:300.6844,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:297.48074,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:285.22534,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:293.6725,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:285.24518,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:290.72833,day:16},
    {name:"Hunan",month:"May",pr_max:14.795588,tas_max:293.59656,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:287.5192,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:299.27258,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:278.23114,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:278.27985,day:15},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:274.2917,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:300.6844,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:297.48074,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:285.22534,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:293.6725,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:285.24518,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:290.72833,day:16},
    {name:"Hunan",month:"November",pr_max:3.432719,tas_max:293.59656,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:287.5192,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:299.27258,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:278.23114,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:278.27985,day:15},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:274.2917,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:300.6844,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:297.48074,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:285.22534,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:293.6725,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:285.24518,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:290.72833,day:16},
    {name:"Hunan",month:"October",pr_max:3.751235,tas_max:293.59656,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:287.5192,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:299.27258,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:278.23114,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:278.27985,day:15},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:274.2917,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:300.6844,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:297.48074,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:285.22534,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:293.6725,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:285.24518,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:290.72833,day:16},
    {name:"Hunan",month:"September",pr_max:1.486046,tas_max:293.59656,day:16}
];
>>>>>>> Stashed changes

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const targetRegions = ["Anhui", "Hubei", "Hunan"];
let chartInstances = {};

// Cleanly aggregates multi-row metrics per province & month
function queryMetric(provinceName, month, metric) {
    const matches = rawClimateData.filter(d => d.name.toLowerCase() === provinceName.toLowerCase() && d.month === month);
    if (matches.length === 0) return null;
    
    if (metric === 'pr_max') {
        // Since pr_max values are repeating/static per month block, pull the top entry
        return matches[0].pr_max;
    } else {
        // Average out the multiple values for tas_max safely
        const sum = matches.reduce((acc, curr) => acc + curr.tas_max, 0);
        return sum / matches.length;
    }
}

const chinaProvincesGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "Anhui" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [116.5, 34.0], [117.3, 34.0], [119.0, 31.5], [118.2, 30.0], 
                    [116.5, 29.5], [115.5, 31.0], [116.0, 33.0], [116.5, 34.0]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Hubei" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [110.0, 32.5], [113.0, 31.5], [116.0, 31.5], [116.0, 29.5],
                    [114.0, 29.0], [111.0, 29.5], [109.0, 30.0], [110.0, 32.5]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Hunan" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [111.0, 29.5], [114.0, 29.0], [114.0, 25.0], [112.0, 24.5],
                    [109.5, 26.0], [109.0, 28.5], [111.0, 29.5]
                ]]
            }
        }
    ]
};

<<<<<<< Updated upstream
// Initialize Map centered around central-eastern China
=======
>>>>>>> Stashed changes
const map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    touchZoom: false
}).setView([30.5, 114.0], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

let geojsonLayer;
<<<<<<< Updated upstream
let currentMonth = "January";
let currentMetric = "pr_max"; // Default visualization variable metric
let chartInstances = {};
=======
let currentMonth = "April";
let currentMetric = "pr_max";
>>>>>>> Stashed changes

function getColor(value, metric) {
    if (value === null || value === undefined) return '#e2e8f0';
    if (metric === 'pr_max') {
<<<<<<< Updated upstream
        return value > 15 ? '#4a148c' : value > 10 ? '#7b1fa2' : value > 6 ? '#9c27b0' : value > 2 ? '#e040fb' : '#f3e5f5';
    } else { // tas_max handling color maps
        return value > 18 ? '#b71c1c' : value > 15 ? '#d32f2f' : value > 12 ? '#f44336' : value > 9 ? '#e57373' : '#ffebee';
    }
}

function getMetricValue(provinceName, month, metric) {
    const record = processedPrecipitationData.find(d => d.name.toLowerCase() === provinceName.toLowerCase() && d.month === month);
    return record ? record[metric] : null;
}

=======
        return value > 12 ? '#084594' : value > 8 ? '#2171b5' : value > 4 ? '#4292c6' : value > 1 ? '#9ecae1' : '#f7fbff';
    } else {
        // Temperature Bounds (Kelvin Scale)
        return value > 295 ? '#b91c1c' : value > 290 ? '#ea580c' : value > 285 ? '#f97316' : value > 280 ? '#fde047' : '#fef08a';
    }
}

>>>>>>> Stashed changes
function style(feature) {
    const value = queryMetric(feature.properties.name, currentMonth, currentMetric);
    return {
        fillColor: getColor(value, currentMetric),
        weight: 2,
        opacity: 1,
        color: '#cbd5e0',
        fillOpacity: 0.8
    };
}

function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({ weight: 3, color: '#4a5568', fillOpacity: 0.9 });
    layer.bringToFront();
    infoPanel.update(layer.feature.properties);
<<<<<<< Updated upstream
    
    const card = document.getElementById(`card-${layer.feature.properties.name.toLowerCase()}`);
    if (card) card.style.borderColor = '#38bdf8';
=======
>>>>>>> Stashed changes
}

function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
    infoPanel.update();
}

function onEachFeature(feature, layer) {
    layer.on({ mouseover: highlightFeature, mouseout: resetHighlight, click: e => map.fitBounds(e.target.getBounds()) });
}

const infoPanel = L.control({position: 'topright'});
infoPanel.onAdd = function () {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
infoPanel.update = function (props) {
    if (props) {
<<<<<<< Updated upstream
        const valPr = getMetricValue(props.name, currentMonth, 'pr_max');
        const valTas = getMetricValue(props.name, currentMonth, 'tas_max');
        this._div.innerHTML = `<h4>${props.name} Province</h4><b>Month:</b> ${currentMonth}<br/><br/>` +
            (valPr !== null ? `Max Precipitation Index: <b>${valPr.toFixed(2)}</b><br/>Avg Max Temp: <b>${valTas.toFixed(2)} °C</b>` : `<span class="no-data-msg">No data found</span>`);
=======
        const valPr = queryMetric(props.name, currentMonth, 'pr_max');
        const valTas = queryMetric(props.name, currentMonth, 'tas_max');
        this._div.innerHTML = `<h4>${props.name} Province</h4><b>Month:</b> ${currentMonth}<br/><br/>` +
            (valPr !== null ? `Max Precipitation: <b>${valPr.toFixed(2)}</b> mm<br/>Mean Max Temperature: <b>${valTas.toFixed(1)}</b> K` : `No data`);
>>>>>>> Stashed changes
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
    if (currentMetric === 'pr_max') {
<<<<<<< Updated upstream
        grades = [0, 2, 6, 10, 15];
        this._div.innerHTML += `<strong>Max Precip Index</strong><br>`;
    } else {
        grades = [5, 9, 12, 15, 18];
        this._div.innerHTML += `<strong>Max Temp (°C)</strong><br>`;
=======
        grades = [0, 1, 4, 8, 12];
        this._div.innerHTML += `<strong>Max Precip (mm)</strong><br>`;
    } else {
        grades = [275, 280, 285, 290, 295];
        this._div.innerHTML += `<strong>Max Temp (Kelvin)</strong><br>`;
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
function getDaysInMonth(monthName) {
    const monthDays = {
        "January": 31, "February": 28, "March": 31, "April": 30, 
        "May": 31, "June": 30, "July": 31, "August": 31, 
        "September": 30, "October": 31, "November": 30, "December": 31
    };
    return monthDays[monthName] || 30;
}

// Generate synthesized curve points across month duration based upon baseline bounds
function generateDailyData(region, month, metric, numDays) {
    const baseAggregate = getMetricValue(region, month, metric);
    if (baseAggregate === null) return [];

    let dailyPoints = [];
    for (let day = 1; day <= numDays; day++) {
        let variance = Math.sin(day * 0.7) * Math.cos(day * 0.4);
        let pointVal = baseAggregate + (baseAggregate * variance * 0.15);
        dailyPoints.push(Math.max(0, pointVal));
    }
    return dailyPoints;
}

function initLineCharts() {
    const colors = { "Anhui": "#4ade80", "Hubei": "#38bdf8", "Hunan": "#c084fc", "Jiangsu": "#f472b6" };
    const bgColors = { "Anhui": "rgba(74, 222, 128, 0.03)", "Hubei": "rgba(56, 189, 248, 0.03)", "Hunan": "rgba(192, 132, 252, 0.03)", "Jiangsu": "rgba(244, 114, 182, 0.03)" };

    const totalDays = getDaysInMonth(currentMonth);
    const dayLabels = Array.from({ length: totalDays }, (_, i) => (i + 1).toString());

    let allGeneratedData = {};
    let globalMax = 0;
    let globalMin = 999;

    regions.forEach(region => {
        const dataArr = generateDailyData(region, currentMonth, currentMetric, totalDays);
        allGeneratedData[region] = dataArr;
        globalMax = Math.max(globalMax, ...dataArr);
        globalMin = Math.min(globalMin, ...dataArr);
    });

    const sharedYMax = globalMax * 1.15;
    const sharedYMin = currentMetric === 'tas_max' ? globalMin * 0.85 : 0;

    regions.forEach(region => {
=======
// Generate daily points derived from data limits for trends charts
function extractChartPoints(region, month, metric) {
    const records = rawClimateData.filter(d => d.name.toLowerCase() === region.toLowerCase() && d.month === month);
    if (records.length === 0) return new Array(12).fill(0);
    return records.map(r => metric === 'pr_max' ? r.pr_max : r.tas_max);
}

function initLineCharts() {
    const colors = { "Anhui": "#4ade80", "Hubei": "#38bdf8", "Hunan": "#c084fc" };
    const bgColors = { "Anhui": "rgba(74, 222, 128, 0.03)", "Hubei": "rgba(56, 189, 248, 0.03)", "Hunan": "rgba(192, 132, 252, 0.03)" };
    
    let globalMax = 0;
    let globalMin = Infinity;
    let recordsLength = 12;

    targetRegions.forEach(region => {
        const pts = extractChartPoints(region, currentMonth, currentMetric);
        recordsLength = pts.length;
        pts.forEach(p => { if (p > globalMax) globalMax = p; if (p < globalMin) globalMin = p; });
    });

    const dayLabels = Array.from({ length: recordsLength }, (_, i) => `R-${i+1}`);

    targetRegions.forEach(region => {
>>>>>>> Stashed changes
        const isLeftmost = (region === "Anhui");
        const ctx = document.getElementById(`chart-${region.toLowerCase()}`).getContext('2d');
        const pts = extractChartPoints(region, currentMonth, currentMetric);

        chartInstances[region] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dayLabels,
                datasets: [{
                    data: pts,
                    borderColor: colors[region],
                    backgroundColor: bgColors[region],
                    borderWidth: 2,
                    tension: 0.15,
                    fill: true,
                    pointRadius: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { 
<<<<<<< Updated upstream
                        beginAtZero: currentMetric !== 'tas_max',
                        min: sharedYMin,
                        max: sharedYMax,
=======
                        min: currentMetric === 'pr_max' ? 0 : Math.floor(globalMin * 0.98),
                        max: Math.ceil(globalMax * 1.02),
>>>>>>> Stashed changes
                        display: isLeftmost, 
                        ticks: { color: '#bfdbfe', font: { size: 9 } }, 
                        grid: { color: isLeftmost ? 'rgba(125, 211, 252, 0.08)' : 'transparent' },
                        title: {
                            display: isLeftmost,
<<<<<<< Updated upstream
                            text: currentMetric === 'pr_max' ? 'Precipitation Index' : 'Temperature (°C)',
=======
                            text: currentMetric === 'pr_max' ? 'Precip (mm)' : 'Temp (K)',
>>>>>>> Stashed changes
                            color: '#bfdbfe',
                            font: { size: 10, weight: 'bold' }
                        }
                    },
                    x: { 
<<<<<<< Updated upstream
                        ticks: { color: '#bfdbfe', font: { size: 8 }, maxTicksLimit: 6 }, 
                        grid: { color: 'rgba(125, 211, 252, 0.03)' },
                        title: { display: true, text: 'Days', color: '#bfdbfe', font: { size: 10, weight: '600' } }
=======
                        ticks: { color: '#bfdbfe', font: { size: 8 } }, 
                        grid: { color: 'rgba(125, 211, 252, 0.03)' }
>>>>>>> Stashed changes
                    }
                }
            }
        });
    });
}

function updateAllLineCharts() {
    let globalMax = 0;
<<<<<<< Updated upstream
    let globalMin = 999;

    regions.forEach(region => {
        const dataArr = generateDailyData(region, currentMonth, currentMetric, totalDays);
        allGeneratedData[region] = dataArr;
        globalMax = Math.max(globalMax, ...dataArr);
        globalMin = Math.min(globalMin, ...dataArr);
    });

    const sharedYMax = globalMax * 1.15;
    const sharedYMin = currentMetric === 'tas_max' ? globalMin * 0.85 : 0;

    regions.forEach(region => {
        const chart = chartInstances[region];
        if (!chart) return;

        chart.data.labels = dayLabels;
        chart.data.datasets[0].data = allGeneratedData[region];
        chart.data.datasets[0].label = currentMetric;
        chart.options.scales.y.min = sharedYMin;
        chart.options.scales.y.max = sharedYMax;
        
        if (chart.options.scales.y.title) {
            chart.options.scales.y.title.text = currentMetric === 'pr_max' ? 'Precipitation Index' : 'Temperature (°C)';
        }
        
=======
    let globalMin = Infinity;

    targetRegions.forEach(region => {
        const pts = extractChartPoints(region, currentMonth, currentMetric);
        pts.forEach(p => { if (p > globalMax) globalMax = p; if (p < globalMin) globalMin = p; });
    });

    targetRegions.forEach(region => {
        const chart = chartInstances[region];
        if (!chart) return;
        const pts = extractChartPoints(region, currentMonth, currentMetric);
        chart.data.datasets[0].data = pts;
        chart.options.scales.y.min = currentMetric === 'pr_max' ? 0 : Math.floor(globalMin * 0.98);
        chart.options.scales.y.max = Math.ceil(globalMax * 1.02);
        chart.options.scales.y.title.text = currentMetric === 'pr_max' ? 'Precip (mm)' : 'Temp (K)';
>>>>>>> Stashed changes
        chart.update('none'); 
    });
}

// Controls
const slider = document.getElementById('month-slider');
const monthDisplay = document.getElementById('month-display');
<<<<<<< Updated upstream
=======
const metricButtons = document.querySelectorAll('.metric-btn');
>>>>>>> Stashed changes

slider.addEventListener('input', function(e) {
    currentMonth = months[e.target.value];
    monthDisplay.textContent = currentMonth;
    updateMapLayer();
    updateAllLineCharts();
});

<<<<<<< Updated upstream
// Configure Side-by-Side Click Event Listeneing Actions 
document.querySelectorAll('.metric-toggle-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        document.querySelectorAll('.metric-toggle-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        currentMetric = this.getAttribute('data-metric');
=======
metricButtons.forEach(button => {
    button.addEventListener('click', function() {
        metricButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentMetric = this.getAttribute('data-value');
>>>>>>> Stashed changes
        updateMapLayer();
        updateAllLineCharts();
    });
});

window.addEventListener('load', function() {
    updateMapLayer();
    initLineCharts();
    setTimeout(() => map.invalidateSize(), 150);
});

<<<<<<< Updated upstream
// Timed annotation handling actions
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

(function () {
    const intro = document.getElementById("flood-intro");
    if (!intro) return;
    const cta = document.getElementById("flood-cta");
    if (cta) cta.addEventListener("click", () => {
=======
// Splash Display Controls
(function () {
    const intro = document.getElementById("flood-intro");
    if (!intro) return;
    setTimeout(() => intro.querySelector(".flood-eyebrow")?.classList.add("flood-visible"), 300);
    setTimeout(() => document.getElementById("flood-line1")?.classList.add("flood-visible"), 700);
    setTimeout(() => document.getElementById("flood-cta")?.classList.add("flood-visible"), 1300);
    document.getElementById("flood-cta")?.addEventListener("click", () => {
>>>>>>> Stashed changes
        intro.classList.add("fade-out");
        setTimeout(() => intro.classList.add("hidden"), 950);
    });
})();