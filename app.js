const API_KEY = `58f2f53bee0c393bf3d1edffba2fad6a`;

const searchTemperature = ()=>{
    const cityName = document.getElementById("city-name");
    const cityNameValue = cityName.value;
    cityName.value=""
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayWather(data))
}

const setInnerText = (id,element)=>{
    document.getElementById(id).innerText=`${element}`

}
const displayWather = (weather)=>{
console.log(weather)
setInnerText("city",weather.name)
setInnerText("temperature",weather.main.temp)
setInnerText("condition",weather.weather[0].main)
const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
const img = document.getElementById("weather-icon");
img.setAttribute("src",url);
setInnerText("description",weather.weather[0].description)

}