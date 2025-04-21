import MusicCardList from "../components/MusicCardList";

const Main = (): JSX.Element => {
    return (
        <>
            <div className="top-weather-info-box">
                <div className="left">
                    <div className="weather-icon"></div>
                    <strong><span>흐림</span> 9°</strong>
                </div>
                <div className="right">
                    <p className="location">충청북도 청주시</p>
                    <strong>집 밖은 위험해! <br />날씨가 나빠요</strong>
                </div>
            </div>
            <MusicCardList />
        </>
    )
}

export default Main;