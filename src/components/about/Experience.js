import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/about/LiIcon";

const Details = ({position, company, companyLink, time, address, work}) => {
   const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
            md:2-[80%]">
        <LiIcon reference={ref}/>
                <motion.div initial={{y:50}}
                            whileInView={{y:0}}
                            transition={{duration: 0.5, type: "spring"}}
                >
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                        { position }&nbsp;
                        <a href={companyLink || '/'} target={"_blank"} className="text-primary capitalize
                            dark:text-primaryDark">
                            @{company}
                        </a>
                    </h3>
                    <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                        {time} | {address}
                    </span>
                    <p className="font-medium w-full md:text-sm">{work}</p>
                </motion.div>
    </li>
}
const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16">
                Опыт
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                
                <motion.div style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details position="Front-end разработчик"
                             company="DIS group/Дата Инновации"
                             companyLink="https://dis-group.ru/"
                             time="2021 - Настоящее время"
                             address="Россия, Санкт-Петербург"
                             work="Работа над расширением функционала продукта компании (система знаний KMS LightHouse).
                              Разработка новых виджетов, расширяющих существующий функционал, добавление новые
                              возможности для удобной работы пользователей. Участие в переходе на собственный продукт
                              компании, внесенный в реестр Российского ПО."
                    />
                    <Details position="Front-end разработчик"
                             company="AMIO"
                             companyLink="https://www.amio.ru/"
                             time="2022 - 2023"
                             address="Россия, Москва"
                             work="Занимался разработкой различных сайтов, от одностраничных лендингов с использованием
                             JQuery до полноценного SPA на React + Next. Благодаря обширному колличеству проектов и
                             технологий, смог расширить свой опыт в качестве веб-разработчика."
                    />
                    <Details position="Front-end ментор"
                             company="SkillFactory"
                             companyLink="https://skillfactory.ru/"
                             time="2023 - Настоящее время"
                             address="Удаленная работа"
                             work="Проведение частных консультаций с учениками курса. Подготовка материала
                             для консультаций. Проверка домашних заданий и работ."
                    />
                </ul>
                
            </div>
        </div>
    );
};

export default Experience;
