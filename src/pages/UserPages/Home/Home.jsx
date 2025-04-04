import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "./Banner/Banner.jsx";
import Popular from "./Popular/Popular.jsx";
import LoveTour from "./Love Tour/LoveTour.jsx";
import TourBlog from "./Tour Blog/TourBlog.jsx";
import Sponsor from "./Sponsor/Sponsor.jsx";
import Review from "./Reviews/Review.jsx";
import ScrollToTop from "../../../components/ScrollToTop/index.jsx";

function Home() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            AOS.refresh();
        });

        return () => {
            window.removeEventListener("scroll", () => {
                AOS.refresh();
            });
        };
    }, []);

    return (
        <>
            <ScrollToTop/>
            <div ><Banner/></div>
            <div ><Popular/></div>
            <div><LoveTour/></div>
            <div ><TourBlog/></div>
            <div ><Sponsor/></div>
            <div ><Review/></div>
        </>
    );
}

export default Home;
