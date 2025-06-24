document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from localStorage
    let totalFootprint = parseFloat(localStorage.getItem('carbonFootprint')) || 0;
    let footprintData = JSON.parse(localStorage.getItem('footprintData')) || {};

    // Decide message based on footprint value
    let message = "";
    let tip = "";

    if (totalFootprint <= 300) {
        message = "🌿 Low impact: Great job! Keep up your eco-friendly habits.";
        tip = "Continue using energy-efficient appliances and public transport.";
    } else if (totalFootprint <= 700) {
        message = "⚠️Moderate impact: Consider reducing consumption.";
        tip = "Try carpooling, reduce meat intake, and minimize waste.";
    } else {
        message = "🔥 High impact: Significant room for improvement.";
        tip = "Switch to renewable energy, reduce air travel, and go zero-waste.";
    }

    // Load data into cards
    document.querySelector("#footprintValue .card-info").textContent = `${totalFootprint.toFixed(2)} kg CO2`;
    document.querySelector("#footprintMessage .card-info").textContent = message;
    document.querySelector("#footprintTip .card-info").textContent = tip;

    // Draw pie chart if data exists
    if (Object.keys(footprintData).length > 0) {
        drawPieChart(footprintData);
    } else {
        console.error("No footprint data available for pie chart.");
        document.querySelector("#footprintTip .card-info").textContent = "No detailed data available to generate tips.";
    }
});

// Function to draw Pie Chart
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
                            return `${tooltipItem.label}: ${value} kg CO2 (${percentage})`;
                        }
                    }
                }
            }
        }
    });
}
