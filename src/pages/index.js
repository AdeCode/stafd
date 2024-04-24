import Image from "next/image";
import { Inter } from "next/font/google";
import TopSection from "@/components/TopSection";
import Placement from "@/components/Placement";
import Mission from "@/components/Mission";
import Partners from "@/components/Partners";
import WorkWithUs from "@/components/WorkWithUs";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen ${inter.className}`}
    >
      <Navbar/>
      <TopSection/>
      <Placement/>
      <Mission/>
      <Partners/>
      <WorkWithUs/>
      <Team/>
    </main>
  );
}
