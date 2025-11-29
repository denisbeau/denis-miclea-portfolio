import Link from "next/link";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsOverview from "@/components/SkillsOverview";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <QuickStats />
      <FeaturedProjects />
      <SkillsOverview />
    </main>
  );
}

