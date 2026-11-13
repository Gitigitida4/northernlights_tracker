export async function getKPIndex() {

    const response = await fetch(
        "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json"
    );

    const data = await response.json();

    return data[data.length - 1].kp;
}