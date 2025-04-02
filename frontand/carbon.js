function calculateFootprint() {
        // Get user inputs
        let electricity = parseFloat(document.getElementById('electricity').value) * 0.4;
        let fuel = parseFloat(document.getElementById('fuel').value) * parseFloat(document.getElementById('fuelType').value);
        let diet = parseFloat(document.getElementById('diet').value) * 90;
        let waste = parseFloat(document.getElementById('waste').value) * 1.8;
        let water = parseFloat(document.getElementById('water').value) * 0.15;
        let vehicle = parseFloat(document.getElementById('vehicle').value) * parseFloat(document.getElementById('fuelType').value) * parseFloat(document.getElementById('carpool').value);
        let flights = parseFloat(document.getElementById('flights').value) * 200;
        let renewableFactor = parseFloat(document.getElementById('renew').value);
        let home = parseFloat(document.getElementById('home').value) * 80;
    
        // Calculate total carbon footprint
        let totalFootprint = (electricity + fuel + diet + waste + water + vehicle + flights + home) * renewableFactor;
    
        // Store individual category values for pie chart
        let footprintData = {
            electricity: electricity,
            fuel: fuel,
            diet: diet,
            waste: waste,
            water: water,
            vehicle: vehicle,
            flights: flights,
            home: home
        };
    
        // Determine message based on footprint value
        let message = "";
        if (totalFootprint < 500) message = "Great! Your carbon footprint is low.";
        else if (totalFootprint < 1000) message = "Moderate footprint, consider reducing consumption.";
        else message = "High footprint! Try using more sustainable options.";
    
        // Store in localStorage to use on the result page
        localStorage.setItem('carbonFootprint', totalFootprint.toFixed(2));
        localStorage.setItem('footprintMessage', message);
        localStorage.setItem('footprintData', JSON.stringify(footprintData));
    
        // Redirect to output.html
        window.location.href = "output.html";
    }
    