import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Nav from "../Components/Nav";
import Planet from "./Planet";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
     <main>
<Nav/>
<Planet/>
      </main>
  
  )
}
