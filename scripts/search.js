document.addEventListener('DOMContentLoaded', () => {
    const locationDropdown = document.getElementById('locationSearch');
    const parkTypeDropdown = document.getElementById('parkTypeSearch');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    // Extract unique states from nationalParksArray
    const uniqueStates = [...new Set(nationalParksArray.map(park => park.State))];

    // Populate the Location dropdown with unique states
    uniqueStates.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        locationDropdown.appendChild(option);
    });

    // Populate the Park Type dropdown with options from parkTypesArray
    parkTypesArray.forEach(parkType => {
        const option = document.createElement('option');
        option.value = parkType;
        option.textContent = parkType;
        parkTypeDropdown.appendChild(option);
    });

    // Function to filter parks based on user input
    function filterParks() {
        const selectedLocation = locationDropdown.value;
        const selectedParkType = parkTypeDropdown.value.toUpperCase(); // Convert to lowercase for case-insensitive comparison

        // Perform search
        const searchResultsArray = nationalParksArray.filter(park => {
            const parkName = park.LocationName.toUpperCase();
            const nameIncludesType = parkTypesArray.some(type => parkName.includes(type.toUpperCase()));

            return (
                (selectedLocation === '' || park.State === selectedLocation) &&
                (selectedParkType === '' || nameIncludesType)
            );
        });

        // Display search results
        displayResults(searchResultsArray);
    }

    // Function to display search results
    function displayResults(results) {
        // Clear previous results
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
        } else {
            // Display results in a list
            const list = document.createElement('ul');
            results.forEach(result => {
                const listItem = document.createElement('li');
                listItem.textContent = result.LocationName;
                list.appendChild(listItem);
            });
            searchResults.appendChild(list);
        }
    }

    // Event listener for the search button
    searchButton.addEventListener('click', () => {
        const selectedLocation = locationDropdown.value;
        const selectedParkType = parkTypeDropdown.value.toUpperCase();

        const searchResultsArray = nationalParksArray.filter(park => {
            const parkName = park.LocationName.toUpperCase();
            const nameIncludesType = parkTypesArray.some(type => parkName.includes(type.toUpperCase()));

            return (
                (selectedLocation === '' || park.State === selectedLocation) &&
                (selectedParkType === '' || nameIncludesType)
            );
        });

        // Display search results
        displayResults(searchResultsArray);
    });
});



