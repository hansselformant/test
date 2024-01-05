import Sidenav from "./components/Sidenav";
import { Routes, Route, BrowserRouter} from "react-router-dom"

import React from 'react';
import Users from "./pages/Users";
import Groups from "./pages/Groups";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/users" exact element={<Users />}></Route>
                    <Route path="/groups" exact element={<Groups />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}