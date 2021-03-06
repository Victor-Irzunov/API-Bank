import React from "react";
import {Route, Routes} from 'react-router-dom';
import Main from "../pages/Main";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} exact />
        </Routes>
    )
}

export default AppRouter;
