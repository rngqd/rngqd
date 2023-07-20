import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import Layout from "@/components/common/Layout";
import profilePic from "../../../public/images/profile/developer-pic-2.jpg"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/about/Skills";
import Experience from "@/components/about/Experience";
import Education from "@/components/about/Education";

const AnimatedNumbers = ({value, text}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true})
    useEffect(()=> {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value])
    
    useEffect(()=> {
        springValue.on("change", (latest)=> {
            if(ref.current && latest.toFixed(0)<= value) {
                ref.current.textContent = latest.toFixed()
                
            }
        })
    }, [springValue, value])
    
    return (
        <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
               <span ref={ref}/>+
            </span>
            <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 text-right
                xl:text-center md:text-lg sm: text-base xs:text-sm">
                {text}
            </h2>
        </div>
    )
}

const About = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center
              dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Расширяя горизонты!"
                              className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className="col-span-3 flex flex-col items-start justify-start
                         xl:col-span-4 md:order-2 md:col-span-8">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                            Биография
                        </h2>
                        <p className="font-medium">
                            Привет, меня зовут Александр, я <nobr>веб-разработчик</nobr>.
                        </p>
                        <p className="font-medium my-4">
                            Я безумно рад, что имею возможность расширять границы интернета,
                            внося свой вклад в создание мира бесконечных возможностей для всех.
                        </p>
                        <p className="font-medium">
                            Я увлечен созданием красивых и полезных и сервисов.
                            Будучи <nobr>веб-разработчик</nobr>, я готов решать сложные задачи в команде.
                            Моя любовь к технологиям позволяет мне постоянно развиваться и достигать новых высот.
                        </p>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                             dark:bg-light"/>
                        <Image src={profilePic} alt="avatar" className="w-full h-auto rounded-2xl"
                               priority
                               size="(max-width:768x) 100vw,
                                (max-width:1200px): 50vw,
                                33vw"
                        />
                    </div>
                    <div className="col-span-2 flex flex-col items-end justify-between
                        xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                        <AnimatedNumbers value={30} text="Выполненных проектов"/>
                        <AnimatedNumbers value={10} text="Изученных технологий"/>
                        <AnimatedNumbers value={2} text="Года опыта"/>
                    </div>
                </div>
                <Skills/>
                <Experience/>
                <Education/>
            </Layout>
        </main>
    );
};

export default About;
