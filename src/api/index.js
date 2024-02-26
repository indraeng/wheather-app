const API_KEY = '20d8efd59e2948128a8173915242202';
const baseURL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherDataForLocation = async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}