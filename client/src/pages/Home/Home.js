import React from 'react';
import DailySection from './DailySection';
import { HeroSection } from './HeroSection';

function Home(props) {
    return (
        <main className="mt-14">
            <DailySection />
            <HeroSection />
        </main>
    );
}
export default Home;
