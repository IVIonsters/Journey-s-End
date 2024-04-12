
const getSuggestions = function () {

  let cityData = localStorage.getItem('city');
  let city = JSON.parse(cityData);

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&city=${city}&apikey=PX9R1m9GGLoYMZnyzl7zDQT2EZJyjBqX`, requestOptions)
    .then(response => response.json())
    // store response in local storage
    .then(response => localStorage.setItem('erosEvents', JSON.stringify(response)))
    // error handling (basic)
    .catch(err => console.error(err));

  fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?&keyword=${city}&apikey=PX9R1m9GGLoYMZnyzl7zDQT2EZJyjBqX`, requestOptions)
    .then(response => response.json())
    // store response in local storage
    .then(response => localStorage.setItem('erosAttractions', JSON.stringify(response)))
    // error handling (basic)
    .catch(err => console.error(err));

  fetch(`https://app.ticketmaster.com/discovery/v2/suggest.json?&keyword=${city}&apikey=PX9R1m9GGLoYMZnyzl7zDQT2EZJyjBqX`, requestOptions)
    .then(response => response.json())
    // store response in local storage
    .then(response => localStorage.setItem('erosSuggest', JSON.stringify(response)))
    // error handling (basic)
    .catch(err => console.error(err));

  setTimeout(() => {
    prepareResults();
  }, 1500); // 1500 milliseconds = 1.5 seconds
};


//   prepare resutls > strategy => parse each localStorage array for names and compile master list for looping and randomizing result output
const prepareResults = function () {

  // erosEvents push to erosFinds (new array composed of events/attractions/suggests)
  // set the eventDataString by pulling erosEvents in local storage
  const eventsDataString = localStorage.getItem('erosEvents');

  // parse the data and set to new constant 'eventData'
  const eventsData = JSON.parse(eventsDataString);

  // set the events data by pulling object .events from the array erosEvents data
  const events = eventsData._embedded.events;

  // Initialize erosFinds array as empty array
  let erosFinds = [];

  // Use forEach loop to pull all event names
  events.forEach(event => {
    let eventNames = JSON.stringify(event.name);

    // Append each event name to the erosFinds array
    erosFinds.push(eventNames);
  });

  // erosAttractions push to erosFinds (new array composed of events/attractions/suggests)
  // set the eventDataString by pulling erosEvents in local storage
  const attractionDataString = localStorage.getItem('erosAttractions');

  // parse the data and set to new constant 'eventData'
  const attractionData = JSON.parse(attractionDataString);

  // set the events data by pulling object .events from the array erosEvents data
  const attractions = attractionData._embedded.attractions;

  // Use forEach loop to pull all event names
  attractions.forEach(attraction => {
    let attractionNames = JSON.stringify(attraction.name);

    // Append each event name to the erosFinds array
    erosFinds.push(attractionNames);
  });

  // erosSuggest push to erosFinds (new array composed of events/attractions/suggests)
  // set the eventDataString by pulling erosEvents in local storage
  const suggestDataString = localStorage.getItem('erosSuggest');

  // parse the data and set to new constant 'eventData'
  const suggestionData = JSON.parse(suggestDataString);

  // set the events data by pulling object .events from the array erosEvents data
  const suggestion = suggestionData._embedded.attractions;

  // Use forEach loop to pull all event names
  suggestion.forEach(attraction => {
    let suggestionNames = JSON.stringify(attraction.name);

    // Append each event name to the erosFinds array
    erosFinds.push(suggestionNames);
  });

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

erosFindsArray.forEach(item => {

  

   // Event data array
   const eventData = [

    {
        title: item,
        imageSrc: "./assets/images/restfiller.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius maxime natus dolorum.",
        url: "#"
    },

  ];
  
  // Get the container element to append the dynamically created HTML
  const container = document.querySelector('.container-lg .row');
  
  // Loop through the event data array and create HTML for each event
  eventData.forEach((event, index) => {
    const eventHtml = `
        <div class="col m-3 p-3 rounded text-center cards">
            <h1 class="text-decoration-underline">${event.title}</h1>
            <img src="${event.imageSrc}" height="200px" width="300px" class="p-1" id="event${index + 1}-photo">
            <p id="event${index + 1}-description">${event.description}</p>
            <p><a href="${event.url}" id="event${index + 1}-url">TripAdvisor Link</a></p>
            <button class="btn-lg">Try again</button>
        </div
        `;
  
    // Append the dynamically created event HTML to the container
    container.insertAdjacentHTML('beforeend', eventHtml);
  });

})

};

// fire off getSuggestions
getSuggestions();


 
  



