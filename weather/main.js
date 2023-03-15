console.log("Js file ran (main.js)")
var apiKey = "beed5eee9a93839000eea5682bbaf14e"

var tempOut = document.getElementById("temp")
var title = document.getElementById("title")
var searchBox = document.getElementById("search")

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is " + position.coords.latitude);
        console.log("Longitude is " + position.coords.longitude);

        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude +'&appid=' + apiKey +'&units=metric')
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

searchBox.addEventListener("keydown", function (event)
    {
        if (event.key === "Enter")
        {
            var inputText = searchBox.value;

            fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ inputText+'&appid=' + apiKey)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    var lat = data[0].lat;
                    var lon = data[0].lon;
                    var province = data[0].state;
                    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +'&appid=' + apiKey +'&units=metric')
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            const temperature = data.main.temp;
                            const city = data.name;
                            console.log(city)
                            title.innerHTML= `Weather in ${city}`;
                            tempOut.innerHTML = `The temperature in ${city} ${province} is ${temperature}°C`;
                            console.log(`The temperature is ${temperature} °C"`);
                            console.log(temperature);
                        })
                        .catch(error => console.error(error));
                })
                .catch(error => console.error(error));

        }
    }
);
