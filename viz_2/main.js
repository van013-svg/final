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

// Initialize Map centered around central-eastern China
const map = L.map('map', {
    zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, touchZoom: false
}).setView([31.0, 114.0], 4.5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

let geojsonLayer;
let currentMonth = "January";
let currentMetric = "pr_max"; // Default visualization variable metric
let chartInstances = {};

function getColor(value, metric) {
    if (value === null || value === undefined) return '#e2e8f0';
    if (metric === 'pr_max') {
        return value > 15 ? '#4a148c' : value > 10 ? '#7b1fa2' : value > 6 ? '#9c27b0' : value > 2 ? '#e040fb' : '#f3e5f5';
    } else { // tas_max handling color maps
        return value > 18 ? '#b71c1c' : value > 15 ? '#d32f2f' : value > 12 ? '#f44336' : value > 9 ? '#e57373' : '#ffebee';
    }
}

function getMetricValue(provinceName, month, metric) {
    const record = processedPrecipitationData.find(d => d.name.toLowerCase() === provinceName.toLowerCase() && d.month === month);
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
        const valPr = getMetricValue(props.name, currentMonth, 'pr_max');
        const valTas = getMetricValue(props.name, currentMonth, 'tas_max');
        this._div.innerHTML = `<h4>${props.name} Province</h4><b>Month:</b> ${currentMonth}<br/><br/>` +
            (valPr !== null ? `Max Precipitation Index: <b>${valPr.toFixed(2)}</b><br/>Avg Max Temp: <b>${valTas.toFixed(2)} °C</b>` : `<span class="no-data-msg">No data found</span>`);
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
        grades = [0, 2, 6, 10, 15];
        this._div.innerHTML += `<strong>Max Precip Index</strong><br>`;
    } else {
        grades = [5, 9, 12, 15, 18];
        this._div.innerHTML += `<strong>Max Temp (°C)</strong><br>`;
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
        const isLeftmost = (region === "Anhui");
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
                        beginAtZero: currentMetric !== 'tas_max',
                        min: sharedYMin,
                        max: sharedYMax,
                        display: isLeftmost, 
                        ticks: { color: '#bfdbfe', font: { size: 9 } }, 
                        grid: { color: isLeftmost ? 'rgba(125, 211, 252, 0.08)' : 'transparent' },
                        title: {
                            display: isLeftmost,
                            text: currentMetric === 'pr_max' ? 'Precipitation Index' : 'Temperature (°C)',
                            color: '#bfdbfe',
                            font: { size: 10, weight: 'bold' }
                        }
                    },
                    x: { 
                        ticks: { color: '#bfdbfe', font: { size: 8 }, maxTicksLimit: 6 }, 
                        grid: { color: 'rgba(125, 211, 252, 0.03)' },
                        title: { display: true, text: 'Days', color: '#bfdbfe', font: { size: 10, weight: '600' } }
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
        
        chart.update('none'); 
    });
}

// ── CONTROL EVENT LISTENERS ──
const slider = document.getElementById('month-slider');
const monthDisplay = document.getElementById('month-display');

slider.addEventListener('input', function(e) {
    currentMonth = months[e.target.value];
    monthDisplay.textContent = currentMonth;
    updateMapLayer();
    updateAllLineCharts(); 
});

// Configure Side-by-Side Click Event Listeneing Actions 
document.querySelectorAll('.metric-toggle-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        document.querySelectorAll('.metric-toggle-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        currentMetric = this.getAttribute('data-metric');
        updateMapLayer();
        updateAllLineCharts();
    });
});

window.addEventListener('load', function() {
    updateMapLayer();
    initLineCharts();
    setTimeout(() => map.invalidateSize(), 100);
});

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
        intro.classList.add("fade-out");
        setTimeout(() => intro.classList.add("hidden"), 950);
    });
})();