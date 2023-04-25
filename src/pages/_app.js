import "@/styles/globals.css";
import { Ubuntu } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
    subsets: ["latin"], variable: "--font-ubuntu", weight: "400",
});

export default function App ({ Component, pageProps }) {
    return (<>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={ `${ ubuntu.variable } font-ubuntu bg-light w-full min-h-screen` }>
                <NavBar/>
                <Component { ...pageProps } />
                <Footer/>
            </main>
        </>);
}

