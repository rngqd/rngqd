import React from "react";
import Layout from "@/components/common/Layout";
import AnimatedText from "@/components/common/AnimatedText";
import Project from "@/components/projects/Project";
import FeaturedProject from "@/components/projects/FeaturedProject";
import twicePic from "../../../public/images/projects/twice.jpg"
import targetHubPic from "../../../public/images/projects/target-hub.jpg"
import howToLearnPic from "../../../public/images/projects/how-to-learn.jpg"
import russianTravelPic from "../../../public/images/projects/russian-travel.jpg"
import mestoPic from "../../../public/images/projects/mesto.jpg"
import moviesPic from "../../../public/images/projects/movies.jpg"

const Projects = () => {
    return (
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Мои проекты"
                              className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                />
                <div className="grid grid-cols-12 gap-24 gap-y-32
                     xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    <div className="col-span-12">
                        <FeaturedProject title="Target Point"
                                         img={targetHubPic}
                                         summary="Участи в разработке SPA сайта, нацеленного на продвежение
                                         стрелкового тира. Подготовка адаптивного дизайна страниц."
                                         link="https://target-point.ru/"
                                         type="Коммерческий проект"
                        
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="Научиться учиться"
                                 img={howToLearnPic}
                                 link="https://how-to-learn-rust.vercel.app/"
                                 github="https://github.com/rngqd/how-to-learn"
                                 type="Учебная верстка"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="Путешествия по России"
                                 img={russianTravelPic}
                                 link="https://russian-travel-phi.vercel.app/"
                                 github="https://github.com/rngqd/russian-travel"
                                 type="Учебная верстка"
                        />
                    </div>
                    <div className="col-span-12">
                        <FeaturedProject title="Twice"
                                         img={twicePic}
                                         summary="Участи в разработке SPA сайта, нацеленного на продвежение
                                         девелоперской компании. Подготовка адаптивного дизайна страниц."
                                         link="http://twice.city"
                                         github="/"
                                         type="Коммерческий проект"
                        
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="Научиться учиться"
                                 img={moviesPic}
                                 link="https://movies-explorer-frontend-chi.vercel.app"
                                 github="https://github.com/rngqd/movies-explorer-frontend"
                                 type="Дипломный проект"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project title="Место"
                                 img={mestoPic}
                                 link="https://react-mesto-auth-nine.vercel.app"
                                 github="https://github.com/rngqd/how-to-learn"
                                 type="Учебный проект"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    );
};

export default Projects;
