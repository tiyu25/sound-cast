import WeatherBanner from "../components/WeatherBanner";
import Nav from "./Nav";

const Sidebar = (): JSX.Element => {
    return (
        <div className="sidebar-wrap">
            <div className="sidebar-bottom">
                <WeatherBanner />
                <Nav />
            </div>
        </div>
    )
}

export default Sidebar;