// Select the nav links
const tampaLink = document.getElementById('tampa');
const atlantaaLink = document.getElementById('atlanta');
const philiLink = document.getElementById('philadelphia')
const miamiLink = document.getElementById('miami')
const pittLink = document.getElementById('pittsburgh')

// Add event listeners to the nav links and set city value in local storage
tampaLink.addEventListener('click', function() {localStorage.setItem('city', JSON.stringify('tampa'));});
atlantaaLink.addEventListener('click', function() {localStorage.setItem('city', JSON.stringify('atlanta'));});
philiLink.addEventListener('click', function () {localStorage.setItem('city', JSON.stringify('philadelphia'));});
miamiLink.addEventListener('click', function () {localStorage.setItem('city', JSON.stringify('miami'));});
pittLink.addEventListener('click', function () {localStorage.setItem('city', JSON.stringify('pittsburgh'));});