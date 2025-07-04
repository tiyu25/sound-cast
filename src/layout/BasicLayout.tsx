import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

const BasicLayout = (): JSX.Element => {
    return (
        <div>
            <Header />
            <Sidebar />
            <div id="content-wrapper" className="basic-layout">
                <div className="con-body">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default BasicLayout;