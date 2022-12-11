import React, { useContext } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// pages
import MainPage from "@src/pages/Main"
import { MainContext, MainContextProvider } from "@src/Context/index"


const Router = () => {
    const abc = useContext(MainContext);

    return (
        <BrowserRouter>
            {/* <MainContextProvider> */}
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<>404</>} />
                </Routes>
            {/* </MainContextProvider> */}
        </BrowserRouter>

    )
}
export default Router;