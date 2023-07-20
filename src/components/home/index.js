import Layout from "@/components/common/Layout";
import Image from "next/image";
import profilePic from "../../../public/images/profile/developer-pic-1.png"
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/common/Icons";
import HireMe from "@/components/home/HireMe";

export default function Home() {
    return (
        <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
            <Layout className="pt-0 md:pt-16 sm:pt-8">
                <div className="flex items-center justify-between w-full lg:flex-col">
                    <div className="w-1/2 md:w-full">
                        <Image src={profilePic} alt="main avatar"
                               className="w-full h-auto lg:hidden md:inline-block md:w-full"
                               priority
                               size="(max-width:768x) 100vw,
                                (max-width:1200px): 50vw,
                                50vw
                           "
                        />
                    </div>
                    <div className="w-1/2 flex flex-col item-center self-center lg:w-full lg:text-center">
                        <AnimatedText text="Интернет - это огромный магазин знаний и возможностей, доступный каждому из нас."
                                      className="!text-6xl !text-left
                                  xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
                        <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                            В качестве <nobr>веб-разработчика</nobr>, я постоянно стремлюсь изучать новое.
                            Практикуюсь в различных фреймворках, выполняю проекты на основе различных технологий.
                        </p>
                        <div className="flex items-center self-start mt-2 lg:self-center">
                            <Link href="/Alexandr_Mykovnya_FE.pdf"
                                  target={"_blank"}
                                  className="flex items-center bg-dark text-light py-2.5 px-6
                              rounded-lg text-lg font-semibold hover:text-dark hover:bg-light
                              border-2 border-solid border-transparent hover:border-dark
                              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                              hover:dark:border-light
                              md:p-2 md:px-4 md:text-base"
                                  download
                            >
                                Резюме
                                <LinkArrow className="!w-6 ml-1"/>
                            </Link>
                            <a href="mailto:a.mykovnya@yandex.ru"
                               target="_blank"
                               className="ml-4 text-lg font-medium text-dark underline
                           dark:text-light md:text-base">
                                Связаться со мной
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
            <HireMe/>
        </main>
    )
}
