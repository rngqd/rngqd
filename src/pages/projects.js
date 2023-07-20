import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/common/TransitionEffect";
import IndexProjects from "@/components/projects"

const Projects = () => {
    return (
        <>
            <Head>
                <title>Проекты | Rngod</title>
                <meta name="projects" content="description"/>
            </Head>
            <TransitionEffect/>
            <IndexProjects />
        </>
    );
};

export default Projects;
