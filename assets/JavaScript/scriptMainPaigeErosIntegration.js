// Select the nav links
const tampaLink = document.getElementById('tampa');

// Add event listeners to the nav links and set city value in local storage
tampaLink.addEventListener('click', function() {

localStorage.setItem('city', JSON.stringify('tampa'));

});