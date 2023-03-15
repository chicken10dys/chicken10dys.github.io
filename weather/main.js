console.log("Js file ran (main.js)")
var tempOut = document.getElementById("temp")
var title = document.getElementById("title")
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is " + position.coords.latitude);
        console.log("Longitude is " + position.coords.longitude);

        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude +'&appid=beed5eee9a93839000eea5682bbaf14e&units=metric')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const temperature = data.main.temp;
                const city = data.name;
                console.log(city)
                title.innerHTML= `Weather in ${city}`;
                tempOut.innerHTML = `The temperature outside is ${temperature}°C`;
                console.log(`The temperature is ${temperature} °C"`);
                console.log(temperature);
            })
            .catch(error => console.error(error));
    });
} else {
    alert("Geolocation is not supported by this browser.");
}
