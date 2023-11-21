document.addEventListener('DOMContentLoaded', () => {
    const locationDropdown = document.getElementById('locationSearch');
    const parkTypeDropdown = document.getElementById('parkTypeSearch');
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');
    const searchResults = document.getElementById('searchResults');

    // Extract unique states from nationalParksArray
    const uniqueStates = [...new Set(nationalParksArray.map(park => park.State))].sort();

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

    // Event listener for the search button
    searchButton.addEventListener('click', () => {
        filterParks();
    });

    // Event listener for the reset button
    resetButton.addEventListener('click', () => {
        locationDropdown.value = ''; // Reset location dropdown
        parkTypeDropdown.value = ''; // Reset park type dropdown
        searchResults.innerText = ''; // Clear results
    });

    // Function to filter parks based on user input
    function filterParks() {
        const selectedLocation = locationDropdown.value;
        const selectedParkType = parkTypeDropdown.value; 

        // Perform search
        const searchResultsArray = nationalParksArray.filter(park => {
            const parkName = park.LocationName.toUpperCase();
            const namesIncludesType = parkTypesArray.includes(selectedParkType);

            return (
                (selectedLocation === '' || park.State === selectedLocation) &&
                (selectedParkType === '' || namesIncludesType)
            );
        });

        // Display search results
        displayResults(searchResultsArray);
    }

    // Function to display search results
    function displayResults(results) {
        // Clear previous results
        const searchResultsContainer = document.getElementById('searchResults');
        searchResultsContainer.innerText = '';

        if (results.length === 0) {
            const noResultsCard = createCard('No results found.');
            searchResultsContainer.appendChild(noResultsCard);
            return;
        }

        // Loop through parks and create cards
        results.forEach(park => {
            const card = createCard(park);
            searchResultsContainer.appendChild(card);
        });
    }

    // Function to create a card
    function createCard(park) {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');

        // Bootstrap card
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${park.LocationName}</h5>
                <p class="card-text">State: ${park.State}</p>
                <p class="card-text">City: ${park.City}</p>
                <p class="card-text">Address: ${park.Address}</p>
                <p class="card-text">Phone: ${park.Phone}</p>
                ${park.Visit ? `<a href="${park.Visit}" target="_blank" class="btn btn-primary">Visit</a>` : ''}
            </div>
        `;

        return card;
    }
});