import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/about/LiIcon";

const Details = ({ type, time, place,placeLink, info}) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
            md:2-[80%]">
        <LiIcon reference={ref}/>
        <motion.div initial={{y:50}}
                    whileInView={{y:0}}
                    transition={{duration: 0.5, type: "spring"}}
        >
            <h3 className="font-bold text-2xl sm:text-xl xs:text-lg">
                { type }
            </h3>
            <span className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                        {time} |
                        <a href={placeLink} target="_blank"
                           className="ml-0.5 underline text-primary dark:text-primaryDark cursor-pointer">
                            {place}
                        </a>
            </span>
            <p className="font-medium w-full md:text-sm">{info}</p>
        </motion.div>
    </li>
}
const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center  md:text-6xl sm:text-4xl md:mb-16">
                Образование
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                
                <motion.div style={{scaleY: scrollYProgress}}
                            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                            dark:bg-light
                            md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details type="Специалист по защите информации"
                             place="Брянский государтсвенный технический университет"
                             placeLink="https://www.tu-bryansk.ru/index.php"
                             time="2014-2018"
                             info="Изучение организационно-правовового обеспечения информационной безопасности.
                              Управление службами и подразделениями ЗИ органов государственного управления.
                              Организация и эксплуатация систем и средств обеспечения защиты информации"
                    />
                    <Details type="Веб-разработчик"
                             place="Я.Практикум"
                             placeLink="https://practicum.yandex.ru/web/"
                             time="2020-2021"
                             info="Изучений базовых понятий о веб-разработке. Знакомство с основными технологиями
                             (HTML, CSS, JS). Разработка учебных проектов и участие в командных хаккатонах."
                    />
                    <Details type="Мидл frontend разработчик"
                             place="Я.Практикум"
                             placeLink="https://practicum.yandex.ru/middle-frontend/"
                             time="2022-2023"
                             info="Углубление знаний в алгоритмах, devops, бекенд-разработке и других смежных сферах.
                             Укрепление сотф/хард скилов, совершенствование навыков работы в команде."
                    />
                </ul>
            
            </div>
        </div>
    );
};

export default Education;
