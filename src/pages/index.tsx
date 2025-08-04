import { AboutUs } from "@/components/AboutUs";
import { Hero } from "@/components/Hero";
import { ImageLine } from "@/components/ImageLine";
import { Navigation } from "@/components/Navigation";
import { Achievements } from "@/components/Achievements";
import Head from "next/head";
import { Insights } from "@/components/Insights";
import { ProcessOverview } from "@/components/ProcessOverview";
import { ImageLine2 } from "@/components/ImageLine2";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Attenco Solutions</title>
        <meta name="description" content="Attenco Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col bg-white text-[#122241]">
        <Navigation />
        <Hero />
        <AboutUs />
        <ImageLine />
        <Achievements />
        <Insights />
        <ProcessOverview />
        {/* <ImageLine2 /> */}
        {/* <Services /> */}
        <Footer />
      </main>
    </>
  );
}
