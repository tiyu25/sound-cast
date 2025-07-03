import { Outlet } from "react-router";
import Header from "./Header";

const TopLayout = () => {
    return (
        <>
            <Header />
            <div id="content-wrapper" className="top-layout">
                <div className="con-body">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
export default TopLayout;