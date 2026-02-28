import { weather,weatherIcon,errorMessage } from './app.js';

export const apiKey = '10bfdef31edb6d34d523177cb5451cf3'.trim();
export async function checkWeather(city){

    try {
        
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        // console.log(city);
        // console.log(apiKey);
        const response = await fetch(apiUrl)
        if(!response.ok){
            throw new Error(`Ciudad ${city} no encontrada`)
        }
        const data = await response.json()

        // console.log(data);
        updateWeatherUI(data)        
    } catch (error) {
        console.error(error.mesage)
        weather.style.display = 'none'
        errorMessage.style.display = 'block'
        errorMessage.innerHTML = error.message
    }
    
}

function updateWeatherUI(data){
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg;C`
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.humidity').innerHTML =`${data.main.humidity}%`
    document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`

    const weatherIcons = {
        Clear : 'images/clear.png',
        Snow : 'images/snow.png',
        Rain : 'images/rain.png',
        Clouds : 'images/clouds.png'
    }

    weatherIcon.src = weatherIcons[data.weather[0].main] || 'images/rain.png'
    weather.style.display = 'block'
    errorMessage.style.display = 'none'
}