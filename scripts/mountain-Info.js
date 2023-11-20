// Function to populate the dropdown with mountain names
function populateDropdown() {
  const dropdown = document.getElementById("mountainDropdown");

  // Sort mountains alphabetically
  const sortedMountains =mountainsArray.sort((a, b) => a.name.localeCompare(b.name));

  // Clear the dropdown
  dropdown.innerText = '';

  // Add the placeholder option to the dropdown
  const placeholderOption = document.createElement('option');
  placeholderOption.value = ''; // Set the value to an empty string or any default value you prefer
  placeholderOption.text = 'Select a mountain';
  placeholderOption.disabled = true;
  placeholderOption.selected = true; // Select the placeholder by default
  dropdown.add(placeholderOption);


  // Options to dropdown
  sortedMountains.forEach((mountain) => {
    const option = document.createElement("option");
    option.value = mountain.name;
    option.text = mountain.name;
    dropdown.add(option);
  });
}

// Function to display mountain information
function displayMountainInfo() {
  const selectedMountain = document.getElementById("mountainDropdown").value;
  const mountain = mountainsArray.find(
    (mountain) => mountain.name === selectedMountain
  );
  const exploreButton = document.getElementById("exploreButton");

  // Check if a mountain is selected
  if (mountain) {
    // Display mountain information in the #mountainInfo div
    document.getElementById("mountainInfo").innerHTML = `
            <h3>${mountain.name}</h3>
            <p>Elevation: ${mountain.elevation} feet</p>
            <p>Effort: ${mountain.effort}</p>
            <img src="${mountain.img}" alt="${mountain.name}" style="max-width: 100%;">
            <p>${mountain.desc}</p>
            <p>Coordinates: ${mountain.coords.lat}, ${mountain.coords.lng}</p>
        `;
    // Check if the mountain has a URL for exploration
    if (mountain.url) {
      // If yes, display the "Explore More" button
      exploreButton.style.display = "block";
    } else {
      // If no URL, hide the "Explore More" button
      exploreButton.style.display = "none";
    }
  } else {
    // If no mountain is selected, clear the #mountainInfo div
    document.getElementById("mountainInfo").innerText = "";

    // Hide the "Explore More" button
    exploreButton.style.display = "none";
  }
}

// Function to reset the page
function resetPage() {
    // Clear the selected value in the dropdown
    document.getElementById('mountainDropdown').value = '';

    // Clear the displayed mountain information
    document.getElementById('mountainInfo').innerText = '';

    // Hide the "Explore More" button
    document.getElementById('exploreButton').style.display = 'none';
}


// Populate the dropdown when the page loads
populateDropdown();
