export const getWeather = async (query: string = 'Guadalajara') =>
    fetch(`/api/weather?q=${query}`)
        .then((res) => res.json());
