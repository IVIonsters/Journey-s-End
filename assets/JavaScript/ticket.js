async function getData(city){
    const apiData = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=SXmqGKvnkmGdc5qWXYJYwA0gparriHtb&city=${city}`);
    var data = await apiData.json();
    console.log(data);
    document.getElementById("event1title").innerHTML = data._embedded.events[0].name;
    document.getElementById("event1-url").innerHTML = data._embedded.events[0].url;
    document.getElementById("event1-photo").innerHTML = `<img src = "${data._embedded.events[0].images[0].url}" height="200px" width="300px" class="p-1">`;
    document.getElementById("event2title").innerHTML = data._embedded.events[1].name;
    document.getElementById("event2-url").innerHTML = data._embedded.events[1].url;
    document.getElementById("event2-photo").innerHTML = `<img src = "${data._embedded.events[1].images[0].url}" height="200px" width="300px" class="p-1">`;
    document.getElementById("event3title").innerHTML = data._embedded.events[2].name;
    document.getElementById("event3-url").innerHTML = data._embedded.events[2].url;
    document.getElementById("event3-photo").innerHTML = `<img src = "${data._embedded.events[2].images[0].url}" height="200px" width="300px" class="p-1">`;
}
