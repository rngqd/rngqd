import React from "react";
import { CircularText } from "@/components/common/Icons";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
        md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24 sm:right-0">
                <CircularText className="fill-dark animate-spin-slow dark:fill-light"/>
                <a href="mailto:a.mykovnya@yandex.ru" className="flex justify-center items-center absolute
                      left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md
                      border border-solid border-dark w-24 h-24 rounded-full
                      font-semibold hover:text-dark hover:bg-light
                      dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                      hover:dark:border-light
                      md:w-14 md:h-14 md:text-[10px]"
                      >
                    Связаться
                </a>
            </div>
        </div>
    );
};

export default HireMe;
