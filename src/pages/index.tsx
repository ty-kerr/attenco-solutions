import { AboutUs } from "@/components/AboutUs";
import { Hero } from "@/components/Hero";
import { ImageLine } from "@/components/ImageLine";
import { Navigation } from "@/components/Navigation";
import { Achievements } from "@/components/Achievements";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Attenco Solutions</title>
        <meta name="description" content="Attenco Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-white">
        <Navigation />
        <Hero />
        <AboutUs />
        <ImageLine />
        <Achievements />
      </main>
    </>
  );
}
