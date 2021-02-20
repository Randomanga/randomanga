import React from 'react';
import DailySection from './DailySection';

function Home(props) {
    return (
        <main className="mt-14">
            <DailySection />
            <div class="w-full lg:max-w-full flex">
                <div
                    class="h-auto  w-28 object-contain flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    title="River">
                    <img
                        src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx97865-9H2LB48t87Bn.jpg"
                        alt="cover"
                    />
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                        <div class="text-gray-900 font-bold text-xl mb-2">
                            15 Rivers In Norway
                        </div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="flex items-center">
                        <img
                            class="w-10 h-10 rounded-full mr-4"
                            src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b236233-BJIUIZ9HxHd1.jpg"
                            alt="Avatar of Writer"
                        />
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none">
                                Karen Johnson
                            </p>
                            <p class="text-gray-600">Aug 10</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;
