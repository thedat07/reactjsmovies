import axios from 'axios'
const searchWeatherCity = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&fbclid=IwAR0nSP9Mb64GYqmh4MwLzTWHXg6IaEpMglGzh5QpiyvoOYkr5rbtULKmRKA`
    const response = await axios.get(url)
    const result = response.status === 200 ? response.data : {}
    return result
}
export const apiWeather = {
    searchWeatherCity
}