import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Work from "@/components/Work";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Sherly Lolita Sari</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Banner />
        <About />
        <Work />

        </main>
        
 
    </>
  );
}
