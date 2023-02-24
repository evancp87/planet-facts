import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "../styles/Home.module.css";
import Nav from "../Components/Nav";
import MobileNav from "../Components/MobileNav";
import Planet from "./Planet";
import "bulma/css/bulma.min.css";
// <link rel="preconnect" href="https://fonts.googleapis.com">
{
  /* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */
}
{
  /* <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap" rel="stylesheet"></link> */
}
{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@500&display=swap" rel="stylesheet"></link> */
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className=" bg-img minimum-height ">
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <Nav />
      <MobileNav />
      <Planet />
    </section>
  );
}
