import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import TopNavigationBar from "../components/TopNavigationBar";

const BasicLayout = (): JSX.Element => {
    return (
        <div>
            <Sidebar />
            <div id="content-wrapper" className="basic-layout">
                <TopNavigationBar />
                <div className="con-body">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default BasicLayout;