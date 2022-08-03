import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {

function deezNuts () {
  alert('testing?')
}
  return (
    <div className={styles.container}>
      <Head>
        <title>Vercel Stuffs</title>
        <meta name="description" content="bing bong heheheha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen bg-gradient-to-l from-purple-300 to-sky-400 grid place-items-center">
          <button className="bg-blue-500 grid place-items-center text-center rounded-full text-pink-400 text-xl h-48 w-48 ease-out 
          duration-200 hover:bg-blue-700 hover:w-56 hover:h-56 hover:text-2xl" onClick={deezNuts}>vercel button :o</button>
        </div>
      </div>
  );
}
