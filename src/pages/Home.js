import React from "react";
import { Helmet } from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import MainCourses from "../components/Web/HomeCourses";
import HowMyCoursesWork from "../components/Web/HowMyCoursesWork";
import ReviewsCourses from "../components/Web/ReviewsCourses";

export default function Home(){
    return(
        <>
            <Helmet>
                <title>Home | Programacion Web</title>
                <meta name="description" 
                    content="Home | Web sobre programacion" 
                    data-react-helmet="true"/>
            </Helmet>
            <MainBanner />
            <MainCourses />
            <HowMyCoursesWork />
            <ReviewsCourses />
        </>
    )
}