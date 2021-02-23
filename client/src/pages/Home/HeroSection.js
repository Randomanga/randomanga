import {
    faSync,
    faRandom,
    faRobot,
    faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeroSection = () => {
    return (
        <section className="text-center mt-20 md:mt-32">
            <h1 className="text-gray-200 text-2xl md:text-3xl font-bold">
                Welcome to RandoManga!
            </h1>
            <span className="text-sm md:text-md text-gray-300">
                Find new manga to read, share them with others, track them and
                many more{' '}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 container max-w-lg md:max-w-5xl mx-auto mt-16 px-1 md:px-4">
                <div className="p-7 flex items-center max-w-md space-x-4">
                    <FontAwesomeIcon
                        icon={faSync}
                        className="text-7xl text-gray-700 "
                    />
                    <div className="pl-4 md:pl-0 text-left">
                        <h5 className="text-gray-200 text-base md:text-lg font-medium">
                            Anilist Sync
                        </h5>
                        <p className="text-xs md:text-base text-gray-400">
                            Save anything you want to read for later with
                            Anilist.
                            <span className="text-gray-700 text-xs">
                                (requires Anilist account)
                            </span>
                        </p>
                    </div>
                </div>
                <div className="p-7 flex items-center max-w-md space-x-4">
                    <FontAwesomeIcon
                        icon={faRobot}
                        className="text-7xl text-gray-700  h-20 w-24"
                    />
                    <div className="text-left">
                        <h5 className="text-gray-200 text-base md:text-lg font-medium">
                            Algorithm generated
                        </h5>
                        <p className="text-xs md:text-base text-gray-400">
                            Find what’s similar to your favourite manga
                        </p>
                    </div>
                </div>
                <div className="p-7  flex items-center max-w-md space-x-4">
                    <FontAwesomeIcon
                        icon={faRandom}
                        className="text-7xl text-gray-700  h-20 w-24"
                    />
                    <div className="pl-5 md:pl-0 text-left">
                        <h5 className="text-gray-200 text-base md:text-lg font-medium">
                            Customized list
                        </h5>
                        <p className="text-xs md:text-base text-gray-400">
                            Select what you like in a manga to get a customized
                            list
                        </p>
                    </div>
                </div>

                <div className="p-7 flex items-center  max-w-md space-x-4 ">
                    <FontAwesomeIcon
                        icon={faUserFriends}
                        className="text-7xl text-gray-700  h-20 w-24"
                    />
                    <div className="pl-2 md:pl-0 text-left">
                        <h5 className="text-gray-200 text-base md:text-lg font-medium">
                            User recommendations
                        </h5>
                        <p className="text-xs md:text-base text-gray-400">
                            Browse recommendations that other people created
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
