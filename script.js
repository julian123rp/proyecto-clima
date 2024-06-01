const urlBase = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY= "53519779edf6e4a33f6eed2efa141370"
const diffKalvin = 273.15

document.getElementById("searsheButtom").addEventListener("click", () =>{
    const city = document.getElementById("cityInput").value;
    if(city){
        fetchWeather(city)
    }else{
        alert ("ingrese una ciudada valida")
    }

})

function fetchWeather (city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponseData = document.getElementById("resposeData")
    divResponseData.innerHTML = " "

    const cityName = data.name
    const countyName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityinfo = document.createElement("h2")
    cityinfo.textContent = `${cityName}, ${countyName}`

    const tempInfo = document.createElement("p")
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-diffKalvin)}°C`

    const HumidityInfo = document.createElement ("p")
    HumidityInfo.textContent = `La humedad es del: ${humidity}`

    const iconInfo = document.createElement ("img")
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`//varificar en la ducmentacion como mostrar una imagen

    const descriptionInfo = document.createElement ("p")
    descriptionInfo.textContent = `La descripcion meteorologica es: ${description}`

    divResponseData.appendChild(cityinfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(HumidityInfo)
    divResponseData.appendChild(iconInfo)
    divResponseData.appendChild(descriptionInfo)
}{}