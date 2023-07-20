import Head from 'next/head'
import TransitionEffect from "@/components/common/TransitionEffect";
import HomeIndex from "@/components/home"

export default function Home() {
  return (
    <>
        <Head>
            <title>Резюме | Rngqd</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <TransitionEffect />
        <HomeIndex />
    </>
  )
}
