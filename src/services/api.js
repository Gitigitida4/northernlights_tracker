export async function fetchWeather(lat, lon) {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=cloud_cover`
    );

    if (!response.ok) {
        throw new Error("API Error");
    }

    return await response.json();
}