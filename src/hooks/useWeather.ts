import { useEffect, useState } from "react"
import { WeatherResponse } from "../types/weather"
import { getWeather } from "../api/WeatherService";

const useWeather = () => {
    const [ weather, setWeather ] = useState<WeatherResponse | null>(null);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const data = await getWeather(latitude, longitude);
                    setWeather(data);

                    console.log(data);
                } catch (e) {
                    console.error("날씨 정보를 불러오는데 실패했습니다.", e);
                    setError("날씨 정보를 불러오는데 실패했습니다.");
                }
            },
            (err) => {
                console.error("위치 정보를 가져오는데 실패했습니다.", err);
                setError("위치 정보를 가져오는데 실패했습니다.");
            }
        )
    }, []);

    return { weather, error }
}

export default useWeather;