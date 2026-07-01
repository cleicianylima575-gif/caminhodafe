import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/components/sections/HeroSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { PrayerSection } from "@/components/sections/PrayerSection";
import { NewsSection } from "@/components/sections/NewsSection";

export default function Home() {

  return (

    <>

      <Header />

      <main className="bg-[#f8f6f2] text-[#1f1f1f] pt-24">

        <HeroSection />

        <ScheduleSection />

        <EventsSection />

        <PrayerSection />

        <NewsSection />

      </main>

      <Footer />

    </>

  );

}