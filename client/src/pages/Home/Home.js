import axios from 'axios';
import React from 'react';
import DailySection from './DailySection';
import Generator from './Generator/Generator';
import { HeroSection } from './HeroSection';

function Home(props) {
    return (
        <main className="mt-14">
            <DailySection />
            <HeroSection />
            <Generator />
            <a
                className="text-white"
                href="https://anilist.co/api/v2/oauth/authorize?&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZmU5NGZmYTg2NmYxN2IzODE1NmNmYiIsImlhdCI6MTYxOTg4MjI4NCwiZXhwIjoxNjE5ODg1ODg0fQ.NgNKdawzEP1uYJT-1V9tHuaHKvzZT2GtQU2JO_WnEqA&client_id=2475&redirect_uri=http://192.168.1.242:5000/api/oauth/token&response_type=code">
                Login with AniList
            </a>
        </main>
    );
}
export default Home;
