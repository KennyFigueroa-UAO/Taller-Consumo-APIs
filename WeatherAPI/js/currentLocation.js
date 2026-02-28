import { apiKey } from './apiRequest.js';

export function getCurrentLocation() {
    return new Promise((resolve, reject) => {  // Aquí creamos una promesa
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const apiUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                
                if (data && data[0]) {
                    resolve(data[0].name);  // Resolvemos la promesa con el nombre de la ciudad
                } else {
                    reject('No se pudo obtener el nombre de la ciudad');
                }
            }, (error) => {
                reject('Error al obtener la ubicación: ' + error.message);
            });
        } else {
            reject('Geolocalización no disponible');
        }
    });
}