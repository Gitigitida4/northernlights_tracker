export async function getCityWeather(city) {

    const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    const geoData = await geoResponse.json();

    if (!geoData.results) {
        throw new Error("City not found");
    }

    const location = geoData.results[0];

    const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,cloud_cover`
    );

    const weatherData = await weatherResponse.json();

    return {
        city: location.name,
        temperature: weatherData.current.temperature_2m,
        cloudCover: weatherData.current.cloud_cover
    };
}