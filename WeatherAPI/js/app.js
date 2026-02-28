import { checkWeather } from "./apiRequest.js";
import { getCurrentLocation } from "./currentLocation.js";

const inputBox = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
export const weatherIcon = document.querySelector('.weather-icon');
export const weather = document.querySelector('.weather')
export const errorMessage = document.querySelector('.error');


searchButton.addEventListener('click',() => {
    checkWeather(inputBox.value)
})

window.onload = async()=>{
    const currentCityLocation = await getCurrentLocation()
    //  console.log(currentCityLocation);
    checkWeather(currentCityLocation)
}