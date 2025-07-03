import HeaderActions from "../components/HeaderActions";
import Logo from "../components/Logo";
import TopSearchBar from "../components/TopSearchBar";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <TopSearchBar />
            <HeaderActions />
        </header>
    )
}

export default Header;