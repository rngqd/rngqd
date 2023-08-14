import React from "react";
import Layout from "@/components/common/Layout";
import AnimatedText from "@/components/common/AnimatedText";
import project1pic from "../../../public/images/projects/crypto-screener-cover-image.jpg"
import howToLearnPic from "../../../public/images/projects/how-to-learn.jpg"
import russianTravelPic from "../../../public/images/projects/russian-travel.jpg"
import Project from "@/components/projects/Project";
import FeaturedProject from "@/components/projects/FeaturedProject";

const Projects = () => {
    return (
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Мои сохраненные проекты"
                              className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                />
                <div className="grid grid-cols-12 gap-24 gap-y-32
                     xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    <div className="col-span-12">
                        <FeaturedProject title="Crypto Screener Application"
                                         img={howToLearnPic}
                                         summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                         Accusamus aliquam atque autem blanditiis commodi, consequatur distinctio
                                         dolor eius ex hic itaque mollitia nobis perspiciatis provident quae
                                         quibusdam ratione recusandae vitae?"
                                         link="/"
                                         github="/"
                                         type="Project"
                        
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
                        <FeaturedProject title="Crypto Screener Application"
                                         img={project1pic}
                                         summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                         Accusamus aliquam atque autem blanditiis commodi, consequatur distinctio
                                         dolor eius ex hic itaque mollitia nobis perspiciatis provident quae
                                         quibusdam ratione recusandae vitae?"
                                         link="/"
                                         github="/"
                                         type="Project"
                        
                        />
                    </div>
                </div>
            </Layout>
        </main>
    );
};

export default Projects;
