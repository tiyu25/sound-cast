import axios from "axios";
import { WeatherResponse } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const mapCityName = (city: string): string => {
    switch (city.toLocaleLowerCase()) {
        case "seoul": return "서울";
        case "busan": return "부산";
        case "incheon": return "인천";
        case "daegu": return "대구";
        case "daejeon": return "대전";
        case "gwangju": return "광주";
        case "cheongju-si": return "청주시"
        default: return city;
    }
}

export const getWeather = async (lat: number, lon: number): Promise<WeatherResponse> => {
    const response = await axios.get(BASE_URL, {
        params: {
            lat,
            lon,
            appid: API_KEY,
            units: "metric",
            lang: "kr"
        },
    });

    const data = response.data;

    // 지역 이름 한글로 표기
    const originalCity = data.name;
    const koreanCity = mapCityName(originalCity);

    return {
        city: koreanCity,
        temperature: data.main.temp,
        condition: data.weather[0].description
    }
}