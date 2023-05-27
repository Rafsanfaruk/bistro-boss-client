// import React from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
    const location =useLocation();
    // console.log(location);
    const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('sign');

    return (
        <div>
           {noHeaderFooter || <NavBar />}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;