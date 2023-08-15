import React from "react";
import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                                py-3 px-6 shadow-dark cursor-pointer absolute
                                dark:text-dark dark:bg-light
                                lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                                xs:text-dark xs:dark:text-light xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{scale: 1.05}}
                    initital={{x:0, y:0}}
                    whileInView={{x, y, transition: {duration: 1.5}}}
                    viewport={{once: true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16 md:mt-32">
                Технологии
            </h2>
            <div className="w-full h-[80vh] relative flex items-center justify-center rounded-full bg-circularLight
                 dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
                 lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                 md:bg-circularLightMd md:dark:bg-circularDarkMd
                 sm:bg-circularLightSm sm:dark:bg-circularDarkSm
                 ">
                <Skill name="Web" x="0" y=""/>
                <Skill name="CSS" x="-5vw" y="-10vw"/>
                <Skill name="HTML" x="5vw" y="10vw"/>
                <Skill name="React" x="-10vw" y="5vw"/>
                <Skill name="Vue" x="10vw" y="-5vw"/>
                <Skill name="TypeScript" x="20vw" y="10vw"/>
                <Skill name="Quasar" x="20vw" y="-15vw"/>
                <Skill name="Next" x="0vw" y="-17vw"/>
                <Skill name="Nuxt" x="-20vw" y="-15vw"/>
                <Skill name="NodeJs" x="20vw" y="1vw"/>
                <Skill name="JQuery" x="-20vw" y="13vw"/>
                <Skill name="Responsive" x="0vw" y="17vw"/>
                <Skill name="Figma" x="-25vw" y="0vw"/>
            </div>
        </>
    );
};

export default Skills;
