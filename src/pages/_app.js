import "@/styles/globals.css";
import { Ubuntu } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
//todo weight
const ubuntu = Ubuntu({
    subsets: ["latin"], variable: "--font-ubuntu", weight: "400",
});

export default function App ({ Component, pageProps }) {
    const router = useRouter()
    return (<>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={ `${ ubuntu.variable } font-ubuntu bg-light w-full min-h-screen
                    dark:bg-dark` }>
                <NavBar/>
                <AnimatePresence mode="wait">
                    <Component key={router.asPath} { ...pageProps } />
                </AnimatePresence>
                <Footer/>
            </main>
        </>);
}

