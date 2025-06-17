import MusicCardList from "../components/MusicCardList";
import useWeather from "../hooks/useWeather";
import { getWeatherMessage } from "../utils/getWeatherMessage";
import { mapWeatherCondition } from "../utils/mapWeatherCondition";

const Main = (): JSX.Element => {
    const { weather, error } = useWeather();

    return (
        <>
            {error && <p>{error}</p>}
            {weather && (
                <div className="top-weather-info-box">
                    <div className="left">
                        <div className="weather-icon"></div>
                        <strong><span>{mapWeatherCondition(weather.condition)}</span> {weather?.temperature.toFixed(0)}°</strong>
                    </div>
                    <div className="right">
                        <p className="location">{weather.city}</p>
                        <strong>{getWeatherMessage(weather.condition)}</strong>
                    </div>
                </div>
            )}
            <MusicCardList />
        </>
    )
}

export default Main;