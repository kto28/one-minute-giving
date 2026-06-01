import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DailyActions from "@/components/DailyActions";
import KindnessCategories from "@/components/KindnessCategories";
import KindnessWall from "@/components/KindnessWall";
import ShareForm from "@/components/ShareForm";
import FutureVision from "@/components/FutureVision";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DailyActions />
        <KindnessCategories />
        <KindnessWall />
        <ShareForm />
        <FutureVision />
        <AboutSection />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
