import axios from "axios";
import React from "react";
import DailySection from "./DailySection";
import Generator from "./Generator/Generator";
import { HeroSection } from "./HeroSection";

function Home(props) {
  return (
    <main className="mt-14">
      <DailySection />
      <HeroSection />
      <Generator />
    </main>
  );
}
export default Home;
