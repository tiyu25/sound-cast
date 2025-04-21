import { useEffect, useState } from "react";
import { getWeather } from "../api/WeatherService";
import { WeatherResponse } from "../types/weather";

const WeatherBanner = (): JSX.Element => {
    const [ weather, setWeather ] = useState<WeatherResponse | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const data = await getWeather(latitude, longitude);
                    setWeather(data);
                } catch (e) {
                    console.error("날씨 정보를 불러오는데 실패했습니다.", e);
                }
            }
        )
    }, []);

    return (
        <div className={`weather-banner`}>
            <div className="top">
                <strong className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                        <path d="M11 5.90909C11 2.91288 8.54657 0.5 5.5 0.5C2.45343 0.5 0 2.91288 0 5.90909C0 8.9053 5.5 14.5 5.5 14.5C5.5 14.5 11 8.9053 11 5.90909ZM2.93872 5.80303C2.93872 4.42424 4.09804 3.28409 5.5 3.28409C6.90196 3.28409 8.06127 4.39773 8.06127 5.80303C8.06127 7.18182 6.92892 8.32197 5.5 8.32197C4.09804 8.32197 2.93872 7.18182 2.93872 5.80303Z" fill="white"/>
                    </svg>
                    {weather?.city}
                </strong>
                <button className="cur-location-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M6.5 2.9C6.5 3.17614 6.72386 3.4 7 3.4C7.27614 3.4 7.5 3.17614 7.5 2.9H6.5ZM7.5 0.5C7.5 0.223858 7.27614 0 7 0C6.72386 0 6.5 0.223858 6.5 0.5H7.5ZM6.5 12.5C6.5 12.7761 6.72386 13 7 13C7.27614 13 7.5 12.7761 7.5 12.5H6.5ZM7.5 10.1C7.5 9.82386 7.27614 9.6 7 9.6C6.72386 9.6 6.5 9.82386 6.5 10.1H7.5ZM10.6 6C10.3239 6 10.1 6.22386 10.1 6.5C10.1 6.77614 10.3239 7 10.6 7V6ZM13 7C13.2761 7 13.5 6.77614 13.5 6.5C13.5 6.22386 13.2761 6 13 6V7ZM1 6C0.723858 6 0.5 6.22386 0.5 6.5C0.5 6.77614 0.723858 7 1 7V6ZM3.4 7C3.67614 7 3.9 6.77614 3.9 6.5C3.9 6.22386 3.67614 6 3.4 6V7ZM11.3 6.49997C11.3 8.87479 9.37482 10.8 7 10.8V11.8C9.92711 11.8 12.3 9.42707 12.3 6.49997H11.3ZM7 10.8C4.62517 10.8 2.7 8.87479 2.7 6.49997H1.7C1.7 9.42707 4.07289 11.8 7 11.8V10.8ZM2.7 6.49997C2.7 4.12514 4.62517 2.19997 7 2.19997V1.19997C4.07289 1.19997 1.7 3.57286 1.7 6.49997H2.7ZM7 2.19997C9.37482 2.19997 11.3 4.12514 11.3 6.49997H12.3C12.3 3.57286 9.92711 1.19997 7 1.19997V2.19997ZM7.5 2.9V0.5H6.5V2.9H7.5ZM7.5 12.5V10.1H6.5V12.5H7.5ZM10.6 7H13V6H10.6V7ZM1 7H3.4V6H1V7ZM8.3 6.5C8.3 7.21797 7.71797 7.8 7 7.8V8.8C8.27026 8.8 9.3 7.77026 9.3 6.5H8.3ZM7 7.8C6.28203 7.8 5.7 7.21797 5.7 6.5H4.7C4.7 7.77026 5.72975 8.8 7 8.8V7.8ZM5.7 6.5C5.7 5.78203 6.28203 5.2 7 5.2V4.2C5.72975 4.2 4.7 5.22975 4.7 6.5H5.7ZM7 5.2C7.71797 5.2 8.3 5.78203 8.3 6.5H9.3C9.3 5.22975 8.27026 4.2 7 4.2V5.2Z" fill="white"/>
                    </svg>
                    현재위치
                </button>
            </div>
            <div className="bottom">
                <span>{weather?.condition}</span>
                <strong>{weather?.temperature.toFixed(0)}°</strong>
            </div>
        </div>
    )
}

export default WeatherBanner;