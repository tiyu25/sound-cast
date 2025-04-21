import HeaderActions from "./HeaderActions";
import TopSearchBar from "./TopSearchBar";

const TopNavigationBar = (): JSX.Element => {
    return (
        <div className="top-navigation-bar">
            <TopSearchBar />
            <HeaderActions />
        </div>
    )
}

export default TopNavigationBar;