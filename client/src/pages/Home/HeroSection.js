import {
    faSync,
    faRandom,
    faRobot,
    faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 container max-w-lg md:max-w-5xl mx-auto mt-20 md:mt-32 px-1 md:px-4">
            <div className="p-7 flex items-center max-w-md space-x-4">
                <FontAwesomeIcon
                    icon={faSync}
                    className="text-7xl text-gray-500 opacity-80"
                />
                <div>
                    <h5 className="text-gray-200 text-base md:text-lg font-medium">
                        Anilist Sync
                    </h5>
                    <p className="text-xs md:text-base text-gray-400">
                        Save anything you want to read for later with Anilist.
                        <span className="text-gray-500 text-xs">
                            {' '}
                            (requires Anilist account)
                        </span>
                    </p>
                </div>
            </div>
            <div className="p-7 flex items-center max-w-md space-x-4">
                <FontAwesomeIcon
                    icon={faRobot}
                    className="text-7xl text-gray-500 opacity-80"
                />
                <div>
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
                    className="text-7xl text-gray-500 opacity-80"
                />
                <div>
                    <h5 className="text-gray-200 text-base md:text-lg font-medium">
                        Customized list
                    </h5>
                    <p className="text-xs md:text-base text-gray-400">
                        Select waht you like in a manga to get a customized list
                    </p>
                </div>
            </div>

            <div className="p-7 flex items-center  max-w-md space-x-4 ">
                <FontAwesomeIcon
                    icon={faUserFriends}
                    className="text-7xl text-gray-500 opacity-80"
                />
                <div>
                    <h5 className="text-gray-200 text-base md:text-lg font-medium">
                        User recommendations
                    </h5>
                    <p className="text-xs md:text-base text-gray-400">
                        Browse recommendations that other people created
                    </p>
                </div>
            </div>
        </div>
    );
};
