import { Route, Routes } from "react-router"
import Main from "../view/Main"
import BasicLayout from "../layout/BasicLayout";
import Login from "../view/Login";
import TopLayout from "../layout/TopLayout";
import Join from "../view/Join";

const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route element={<BasicLayout />}>
                <Route path="/" element={<Main />} />
            </Route>
            <Route element={<TopLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
            </Route>
        </Routes>
    )
}

export default Router;