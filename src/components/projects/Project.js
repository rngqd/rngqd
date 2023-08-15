import Link from "next/link";
import { GithubIcon } from "@/components/common/Icons";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Project = ({title, type, img, link, github}) => {
    const FramerImg = motion(Image)
    
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
                 border-dark bg-light p-6 relative
                 dark:bg-dark dark:border-light
                 xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl
                 dark:bg-light
                 md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]"/>
            <Link href={link} target={"_blank"}
                  className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImg src={img} alt={title} className="w-full h-auto max-h-[175px] object-cover"
                           whileHover={{scale: 1.05}}
                           transition={{duration: 0.2}}/>
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link href={link} target={"_blank"} className="hover:underline underline-offset-6">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
                        {title}
                    </h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target={"_blank"} className="underline text-lg font-semibold md:text-base">
                        Посетить
                    </Link>
                    <Link href={github} target={"_blank"} className="w-8 md:w-6">
                        <GithubIcon/>
                    </Link>
                
                </div>
            </div>
        </article>
    )
}

export default Project
