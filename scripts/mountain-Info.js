// Function to populate the dropdown with mountain names

function populateDropdown() {
    const dropdown = document.getElementById('mountainDropdown');
    mountainsArray.forEach(mountain => {
        const option = document.createElement('option');
        option.text = mountain.name;
        dropdown.add(option);
    });
}

// Function to display mountain information
function displayMountainInfo() {
    const selectedMountain = document.getElementById('mountainDropdown').value;
    const mountain = mountainsArray.find(mountain => mountain.name === selectedMountain);

    // Check if a mountain is selected
    if (mountain) {
        // Display mountain information in the #mountainInfo div
        document.getElementById('mountainInfo').innerHTML = `
            <h3>${mountain.name}</h3>
            <p>Elevation: ${mountain.elevation} feet</p>
            <p>Effort: ${mountain.effort}</p>
            <img src="${mountain.img}" alt="${mountain.name}" style="max-width: 100%;">
            <p>${mountain.desc}</p>
            <p>Coordinates: ${mountain.coords.lat}, ${mountain.coords.lng}</p>
        `;
    } else {
        // If no mountain is selected, clear the #mountainInfo div
        document.getElementById('mountainInfo').innerHTML = '';
    }
}

// Function to handle the "Explore More" button click
function exploreMountain() {
    // Add your logic for exploring more, if needed
    // For now, let's just alert the selected mountain name
    const selectedMountain = document.getElementById('mountainDropdown').value;
    alert(`Exploring more about ${selectedMountain}`);
}

// Populate the dropdown when the page loads
populateDropdown();