import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/common/TransitionEffect";
import AboutIndex from "@/components/about"

const About = () => {
    return (
        <>
            <Head>
                <title>Обо мне | Rngqd</title>
                <meta name="description" content="description"/>
            </Head>
            <TransitionEffect/>
            <AboutIndex />
        </>
    );
};

export default About;
