const userFormEl = document.querySelector('#user-form');




// submit form
const formSubmitHandler = function (event) {
  event.preventDefault();

  // execute getSuggestions on user click
  getSuggestions();

};

// SQTopic randomizer

// searchQuery randomizer
const randomizeSQTopic = function () {
  // searchQuery topic array
  const searchQueryTopics = [
    'date',
    'restaurants',
    'fun',
    'adventure',
    'romantic',
    'friends',
    'activities',
    'games'
  ]

  const randomSQTopic = searchQueryTopics[Math.floor(Math.random() * searchQueryTopics.length)];

  return randomSQTopic;
};



// city specification by user
const citySetting = function () { };

//   retrieve data from ticketmaster.com API
const getSuggestions = function () {

  const cityEl = document.getElementById('city');

  let city = cityEl.value;
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

};


//   display resutls
const displayResults = function () {

  let erosEvents = JSON.parse(localStorage.getItem("erosEvents")) || [];

  // Strategy >> loop through list of events/attractions/suggestions
  console.log(erosEvents.page._embedded)


}

// event listener for submit button
userFormEl.addEventListener('submit', formSubmitHandler);

