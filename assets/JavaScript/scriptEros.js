const getSuggestions = function () {

    let cityData = localStorage.getItem('city');
    let city = JSON.parse(cityData);
  
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
  
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&city=${city}&apikey=PX9R1m9GGLoYMZnyzl7zDQT2EZJyjBqX`, requestOptions)
      .then(response => response.json())
      .then(response => localStorage.setItem('erosEvents', JSON.stringify(response)))
      .catch(err => console.error(err));
  
    fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?&keyword=${city}&apikey=PX9R1m9GGLoYMZnyzl7zDQT2EZJyjBqX`, requestOptions)
      .then(response => response.json())
      .then(response => localStorage.setItem('erosAttractions', JSON.stringify(response)))
      .catch(err => console.error(err));
  
    fetch(`https://app.ticketmaster.com/discovery/v2/suggest.json?&keyword=${city}&apikey=PX9R1m9GGLoYMZnyzl7zDQT2EZJyjBqX`, requestOptions)
      .then(response => response.json())
      .then(response => localStorage.setItem('erosSuggest', JSON.stringify(response)))
      .catch(err => console.error(err));
  
    setTimeout(() => {
      prepareResults();
    }, 1500); // 1500 milliseconds = 1.5 seconds
  };
  
  
  //   prepare resutls > strategy => parse each localStorage array for names and compile master list for looping and randomizing result output
  const prepareResults = function () {
  
    // erosEvents
    const erosEvents = JSON.parse(localStorage.getItem('erosEvents'));
    const erosFinds = [];
    erosEvents._embedded.events.forEach(event => {
        const name = event.name;
        // const startDate = event.dates.start.localDate;
        const imageUrl = event.images[0].url; 
        const ticketingUrl = event.url;
    
        // Push extracted data to erosFinds array
        erosFinds.push({ name, imageUrl, ticketingUrl });
    });
  
    // erosAttractions
    const erosAttractions = JSON.parse(localStorage.getItem('erosAttractions'));
    erosAttractions._embedded.attractions.forEach(attraction => {
  
      const name = attraction.name;
      const imageUrl = attraction.images[0].url;
      const ticketingUrl = attraction.url; 
  
      erosFinds.push({ name, imageUrl, ticketingUrl});
    })
  
    // erosSuggest
    const erosSuggest = JSON.parse(localStorage.getItem('erosSuggest'));
    erosSuggest._embedded.attractions.forEach(suggest => {
  
      const name = suggest.name;
      const imageUrl = suggest.images[0].url;
      const ticketingUrl = suggest.url; 
  
      erosFinds.push({ name, imageUrl, ticketingUrl});
  
    })
  
  
    
    // Save the updated erosFinds array back to localStorage
    localStorage.setItem('erosFinds', JSON.stringify(erosFinds));
    randomizeErosFinds();
    generateResults();
  
  };
  
  // randomize results and select only 3
  const randomizeErosFinds = function () {
  
    // Retrieve the array from local storage
    const erosFindsArray = JSON.parse(localStorage.getItem('erosFinds'));
  
    // Create a new array to store randomly selected items
    const erosPicks = [];
  
    // Randomly select 3 items from the original array
    while (erosPicks.length < 3) {
      const randomIndex = Math.floor(Math.random() * erosFindsArray.length);
      const selectedItem = erosFindsArray[randomIndex];
  
      if (!erosPicks.includes(selectedItem)) {
        erosPicks.push(selectedItem);
      }
    }
  
    // Store the new array back into local storage
    localStorage.setItem('erosPicks', JSON.stringify(erosPicks));
  
  };
  
  const generateResults = function () {
    // Retrieve the array from localStorage
    const erosFindsArray = JSON.parse(localStorage.getItem('erosPicks')) || [];
    const container = document.querySelector('.container-lg .row');
  
    // Function to generate the HTML for each event
    const generateEventHtml = (event, index) => {
        return `
            <div class="col m-3 p-3 rounded text-center cards">
                <h1 class="text-decoration-underline">${event.title}</h1>
                <img src="${event.imageSrc}" height="200px" width="300px" class="p-1" id="event${index + 1}-photo">
                <p><a href="${event.url}" id="event${index + 1}-url">Link to Event!</a></p>
            </div>
        `;
    };
  
    // Function to clear the existing content in the container
    const clearResults = () => {
        container.innerHTML = '';
    };
  
    // Function to generate new results
    const generateNewResults = () => {
        clearResults();
        erosFindsArray.forEach((item, index) => {
            const eventData = [
                {
                    title: item.name,
                    imageSrc: item.imageUrl,
                    url: item.ticketingUrl
                }
            ];
  
            eventData.forEach((event, index) => {
                const eventHtml = generateEventHtml(event, index);
                container.insertAdjacentHTML('beforeend', eventHtml);
            });
        });
    };
  
    // Initial generation of results
    generateNewResults();
  
    // Add an event listener to the "Try Again" button
    const tryAgainButton = document.getElementById('tryAgain');
    tryAgainButton.addEventListener('click', function() {
  
        prepareResults();
        generateNewResults();
    });
  };
  
  
  // fire off getSuggestions
  getSuggestions();
  