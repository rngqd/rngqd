import React, { useState } from "react";
import Link from "next/link";
import Logo from "../home/Logo"
import { useRouter } from "next/router";
import {
    TwitterIcon,
    GithubIcon,
    LinkedInIcon,
    PinterestIcon,
    DribbbleIcon,
    SunIcon,
    MoonIcon, TelegramIcon,
} from "@/components/common/Icons";
import { motion } from "framer-motion"
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter()
    
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light
            `}>
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter()
    
    const handleClick = () => {
        toggle()
        void router.push(href)
    }
    return(
        <button className={`${className} relative group text-light dark:text-dark my-2`}
                onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-dark
            `}>
                &nbsp;
            </span>
        </button>
    )
}

const NavBarIcons = ({mode, setMode}) => {
    return (
        <>
            <motion.a href="" target={"_blank"}
                      whileHover={{y: -2}}
                      whileTap={{scale: 0.9}}
                      className="w-6 mr-3">
                <LinkedInIcon />
            </motion.a>
            <motion.a href="https://t.me/rngqd" target={"_blank"}
                      whileHover={{y: -2}}
                      whileTap={{scale: 0.9}}
                      className="w-6 mx-3">
                <TelegramIcon/>
            </motion.a>
            <motion.a href="https://github.com/rngqd" target="_blank"
                      whileHover={ { y: -2 } }
                      whileTap={ { scale: 0.9 } }
                      className="w-6 mx-3  rounded-full bg-light dark:bg-dark sm:mx-1"
            >
                <GithubIcon/>
            </motion.a>
            <button onClick={()=> setMode(mode === "light" ? "dark" : "light")}
                    className={ `ml-3 flex items-center justify-center rounded-full p-1 w-6 mr-3
                                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}` }>
                {mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/> }
            </button>
        </>
    )
}

const NavBar = () => {
    
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between
                dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
            <button className="flex-col justify-center items-center hidden lg:flex fixed top-[2rem] left-[2rem]"
                    onClick={handleClick}>
                <span className={ `bg-dark dark:bg-light block h-0.5 w-6 rounded-sm
                transition-all duration-300 easy-out
                ${ isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }` }/>
                <span className={ `bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5
                transition-all duration-100 easy-out
                ${isOpen? 'opacity-0': 'opacity-100'}` }/>
                <span className={ `bg-dark dark:bg-light block h-0.5 w-6 rounded-sm
                transition-all duration-300 easy-out
                 ${ isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5' }` }/>
            </button>
            {/*desktop*/}
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Домой" className="mr-4"/>
                    <CustomLink href="/about" title="Обо мне" className="mx-4"/>
                    <CustomLink href="/projects" title="Проекты" className="mx-4"/>
                    {/*<CustomLink href="/articles" title="Статьи" className="ml-4"/>*/}
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    <NavBarIcons setMode={setMode} mode={mode}/>
                </nav>
            </div>
            {/*mobile*/}
            { isOpen && <motion.div className="min-w-[70vw] hidden flex-col justify-between items-center fixed
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90
            dark:bg-light/75 rounded-lg backdrop-blur-md py-32 lg:flex"
                                    initial={{scale:0, opacity:0,x: "-50%", y:"-50%"}}
                                    animate={{scale:1, opacity:1}}
            >
                <nav className="flex items-center flex-col justify-center">
                    <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
                    <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>
                    <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
                    {/*<CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick}/>*/}
                </nav>
                <nav className="flex items-center justify-center flex-wrap mt-2">
                    <NavBarIcons setMode={setMode} mode={mode}/>
                </nav>
            </motion.div> }
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo/>
            </div>
        </header>
    );
}

export default NavBar;
