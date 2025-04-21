import { Route, Routes } from "react-router"
import Main from "../view/Main"
import BasicLayout from "../layout/BasicLayout";

const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route element={<BasicLayout />}>
                <Route path="/" element={<Main />} />
            </Route>
        </Routes>
    )
}

export default Router;