import WeatherBanner from "../components/WeatherBanner";
import Nav from "./Nav";

const Sidebar = (): JSX.Element => {
    return (
        <div className="sidebar-wrap">
            <div className="sidebar-top">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM18 14H0V16H18V14Z" fill="white"/>
                    </svg>
                </button>
                <img src="./img/logo.png" />
            </div>
            <div className="sidebar-bottom">
                <WeatherBanner />
                <Nav />
            </div>
        </div>
    )
}

export default Sidebar;