// import React, { useRef } from "react";
// import Head from "next/head";
// import Layout from "@/components/common/Layout";
// import AnimatedText from "@/components/common/AnimatedText";
// import Image from "next/image";
// import Link from "next/link";
// import articleImg from "../../public/images/articles/create loading screen in react js.jpg"
// import articleImg2 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
// import { motion, useMotionValue } from "framer-motion";
// import TransitionEffect from "@/components/common/TransitionEffect";
//
// const FramerImg = motion(Image)
//
// const MovingImg = ({title, img, link}) => {
//     const x = useMotionValue(0)
//     const y = useMotionValue(0)
//     const imgRef= useRef(null)
//
//     function handleMouse(e) {
//         imgRef.current.style.display = "inline-block"
//         x.set(e.pageX)
//         y.set(-10)
//     }
//
//     function handleMouseLeave(e) {
//         imgRef.current.style.display = "none"
//         x.set(0)
//         y.set(0)
//     }
//
//     return (
//         <Link href={link} target="_blank" className=""
//               onMouseMove={handleMouse}
//               onMouseLeave={handleMouseLeave}
//         >
//             <h2 className="capitalize text-xl font-semibold hover:underline">
//                 {title}
//             </h2>
//             <FramerImg style={{x, y}} ref={imgRef} src={img} alt={title}
//                        initial={{opacity: 0}}
//                        whileInView={{opacity:1, transition: {duration: 0.3}}}
//                        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
//                        priority
//                        size="(max-width:768x) 100vw,
//                              (max-width:1200px): 50vw,
//                              50vw" />
//         </Link>
//     )
// }
//
// const Article = ({img, title, date, link}) => {
//     return(
//         <motion.li className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
//                    bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
//                    dark:border-light dark:bg-dark dark:text-light sm:flex-col"
//                    initial={{y: 200}}
//                    whileInView={{y: 0, transition: { duration: 0.5, ease: 'easeInOut'}}}
//                    viewport={{once: true}}
//         >
//             <MovingImg title={title} img={img} link={link} />
//             <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
//                 {date}
//             </span>
//         </motion.li>
//     )
// }
// const FeaturedArticle = ({img, title, time, summary, link}) => {
//     return(
//         <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative
//             dark:bg-dark dark:border-light">
//             <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
//                     dark:bg-light"/>
//             <Link href={link} target={"_blank"}
//                   className="w-full cursor-pointer overflow-hidden rounded-lg inline-block">
//                 <FramerImg src={img} alt={title} className="w-full h-auto"
//                            whileHover={{scale: 1.05}}
//                            transition={{duration: 0.2}}
//                            priority
//                            size="(max-width:768x) 100vw,
//                                  (max-width:1200px): 50vw,
//                                  50vw" />
//             </Link>
//             <Link href={link} target="_blank">
//                 <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg ">
//                     {title}
//                 </h2>
//             </Link>
//             <p className="text-sm mb-2">{summary}</p>
//             <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
//         </li>
//     )
// }
// const Articles = () => {
//     return (
//         <>
//             <Head>
//                 <title>Articles page</title>
//                 <meta name="description" content="description"/>
//             </Head>
//             <TransitionEffect/>
//             <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
//                 <Layout className="pt-16">
//                     <AnimatedText text="Статьи" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
//                     <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
//                         <FeaturedArticle time="9min"
//                                          summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse nisi nulla!"
//                                          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse nisi nulla!"
//                                          img={articleImg}
//                                          link="/"
//                         />
//                         <FeaturedArticle time="9min"
//                                          summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse nisi nulla!"
//                                          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse nisi nulla!"
//                                          img={articleImg2}
//                                          link="/"
//                         />
//                     </ul>
//                     <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 ">All Articles</h2>
//                     <ul>
//                         <Article title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse nisi nulla"
//                                  img={articleImg}
//                                  date="march 22"
//                                  link="/"
//                         />
//                         <Article title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse nisi nulla"
//                                  img={articleImg}
//                                  date="march 22"
//                                  link="/"
//                         />
//                         <Article title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse nisi nulla"
//                                  img={articleImg}
//                                  date="march 22"
//                                  link="/"
//                         />
//                         <Article title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse nisi nulla"
//                                  img={articleImg}
//                                  date="march 22"
//                                  link="/"
//                         />
//                         <Article title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse nisi nulla"
//                                  img={articleImg}
//                                  date="march 22"
//                                  link="/"
//                         />
//                     </ul>
//                 </Layout>
//             </main>
//         </>
//     );
// };
//
// export default Articles;
