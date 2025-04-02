// // document.addEventListener("DOMContentLoaded", function () {
// //     let calculateBtn = document.getElementById("calculate-btn");
// //     if (calculateBtn) {  // Ensure button exists
// //         calculateBtn.addEventListener("click", function() {
// //             console.log("Button Clicked!");
// //         });
// //     } else {
// //         console.error("calculate-btn not found in DOM");
// //     }
// // });


// document.addEventListener("DOMContentLoaded", function () {
//     // let calculateBtn = document.getElementById("calculate-btn");
//     // if (calculateBtn) {  // Ensure button exists
//     //     calculateBtn.addEventListener("click", function() {
//     //         console.log("Button Clicked!");
//     //     });
//     // } else {
//     //     console.error("calculate-btn not found in DOM");
//     // }
//     let totalFootprint = localStorage.getItem('carbonFootprint');
//     let message = localStorage.getItem('footprintMessage');
//     let footprintData = JSON.parse(localStorage.getItem('footprintData'));

//     // Display values in divs
//     document.getElementById("footprintValue").textContent = `Your Carbon Footprint: ${totalFootprint} kg CO2`;
//     document.getElementById("footprintMessage").textContent = message;
//     document.getElementById("calculate-btn").addEventListener("click", function() {
// //    let electricityUsage = document.getElementById("electricity-input").value;
// //    let fuelUsage = document.getElementById("fuel-input").value;
   
// //    // Convert values to carbon footprint (Example formula)
// //    let electricityCarbon = electricityUsage * 0.5; // Example multiplier
// //    let fuelCarbon = fuelUsage * 2.3; // Example multiplier

// //    // Update flex boxes dynamically
// //    document.getElementById("electricity-output").innerText = electricityCarbon.toFixed(2);
// //    document.getElementById("fuel-output").innerText = fuelCarbon.toFixed(2);

// //    // Add Dynamic Suggestions
// //    let electricityMessage = electricityCarbon < 100 ? 
// //       "Great! You're using less electricity than average! 🌱" : 
// //       "Try using energy-efficient appliances! ⚡";
// //    document.getElementById("electricity-suggestion").innerText = electricityMessage;
// // });


//     // Create Pie Chart
//     drawPieChart(footprintData);
// });


// // Function to create Pie Chart
// function drawPieChart(data) {
//     let ctx = document.getElementById("carbonChart").getContext("2d");

//     new Chart(ctx, {
//         type: "pie",
//         data: {
//             labels: ["Electricity", "Fuel", "Diet", "Waste", "Water", "Vehicle", "Flights", "Home"],
//             datasets: [{
//                 data: Object.values(data),
//                 backgroundColor: [
//                     "rgba(255, 223, 102, 0.85)",  // Electricity - Warm Gold
//                     "rgba(239, 120, 91, 0.85)",   // Fuel - Soft Coral
//                     "rgba(106, 176, 76, 0.85)",   // Diet - Fresh Green
//                     "rgba(191, 97, 106, 0.85)",   // Waste - Muted Rose
//                     "rgba(74, 144, 226, 0.85)",   // Water - Soft Blue
//                     "rgba(168, 123, 93, 0.85)",   // Vehicle - Earthy Brown
//                     "rgba(142, 68, 173, 0.85)",   // Flights - Royal Purple
//                     "rgba(52, 73, 94, 0.85)"      // Home - Deep Slate Blue
//                 ],
//                 borderColor: "rgba(35, 74, 25, 0.9)", // Dark green border
//                 borderWidth: 1.5,
//                 hoverBackgroundColor: [
//                     "rgba(255, 223, 102, 1)",  
//                     "rgba(239, 120, 91, 1)",   
//                     "rgba(106, 176, 76, 1)",   
//                     "rgba(191, 97, 106, 1)",   
//                     "rgba(74, 144, 226, 1)",   
//                     "rgba(168, 123, 93, 1)",   
//                     "rgba(142, 68, 173, 1)",   
//                     "rgba(52, 73, 94, 1)"     
//                 ]
//             }]    
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//                 legend: {
//                     position: "bottom",
//                     labels: {
//                         usePointStyle: true,
//                         color: "white",
//                         font: {
//                             size: 17
//                         }
//                     }
//                 },
//                 tooltip: {
//                     callbacks: {
//                         label: function(tooltipItem) {
//                             let dataset = tooltipItem.dataset;
//                             let total = dataset.data.reduce((acc, val) => acc + val, 0);
//                             let value = dataset.data[tooltipItem.dataIndex];
//                             let percentage = ((value / total) * 100).toFixed(2) + "%";
//                             return `${percentage}`;  
//                         }
//                     }
//                 }
//             }
//         }
        
//     });

// }


document.addEventListener("DOMContentLoaded", function () {
    let totalFootprint = localStorage.getItem('carbonFootprint') || 0;
    let message = localStorage.getItem('footprintMessage') || "No data available.";
    let footprintData = JSON.parse(localStorage.getItem('footprintData')) || {};

    // Display values in divs
    document.getElementById("footprintValue").textContent = `Your Carbon Footprint: ${totalFootprint} kg CO2`;
    document.getElementById("footprintMessage").textContent = message;

    // Draw Pie Chart
    if (Object.keys(footprintData).length > 0) {
        drawPieChart(footprintData);
    } else {
        console.error("No footprint data available for pie chart.");
    }
});

// Function to create Pie Chart
function drawPieChart(data) {
    let ctx = document.getElementById("carbonChart").getContext("2d");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Electricity", "Fuel", "Diet", "Waste", "Water", "Vehicle", "Flights", "Home"],
            datasets: [{
                data: Object.values(data),
                backgroundColor: [
                    "rgba(255, 223, 102, 0.85)",  
                    "rgba(239, 120, 91, 0.85)",   
                    "rgba(106, 176, 76, 0.85)",   
                    "rgba(191, 97, 106, 0.85)",   
                    "rgba(74, 144, 226, 0.85)",   
                    "rgba(168, 123, 93, 0.85)",   
                    "rgba(142, 68, 173, 0.85)",   
                    "rgba(52, 73, 94, 0.85)"      
                ],
                borderColor: "rgba(35, 74, 25, 0.9)",
                borderWidth: 1.5,
                hoverBackgroundColor: [
                    "rgba(255, 223, 102, 1)",  
                    "rgba(239, 120, 91, 1)",   
                    "rgba(106, 176, 76, 1)",   
                    "rgba(191, 97, 106, 1)",   
                    "rgba(74, 144, 226, 1)",   
                    "rgba(168, 123, 93, 1)",   
                    "rgba(142, 68, 173, 1)",   
                    "rgba(52, 73, 94, 1)"     
                ]
            }]    
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                        color: "white",
                        font: {
                            size: 17
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            let dataset = tooltipItem.dataset;
                            let total = dataset.data.reduce((acc, val) => acc + val, 0);
                            let value = dataset.data[tooltipItem.dataIndex];
                            let percentage = ((value / total) * 100).toFixed(2) + "%";
                            return `${percentage}`;  
                        }
                    }
                }
            }
        }
    });
}

