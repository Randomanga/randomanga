import Pill from '../../components/Pill/Pill';
import AlIcon from '../../components/Icons/AlIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useDaily from '../../utils/hooks/useDaily';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Banner = ({ banner }) => {
    return (
        <>
            <div className="absolute top-14 bg-gradient-to-t h-96 md:h-110 w-full from-darkGray-600  to-transparent -z-1" />
            <img
                className="absolute top-14 object-cover h-96  md:h-110 w-full -z-2"
                src={banner}
                alt="banner"
                effect="blur"
            />
        </>
    );
};
const Cover = ({ cover }) => {
    return (
        <LazyLoadImage
            src={cover}
            alt="cover"
            effect="blur"
            className="h-36 min-w-28 w-28 sm:min-w-36 sm:h-48 sm:w-36 md:h-52 md:w-40 md:min-w-40 flex-shrink-0 rounded-sm"
        />
    );
};
const DailyWrapper = ({ children }) => {
    return (
        <div className="container  mx-auto flex flex-col justify-between  h-96 md:h-110 mt-28 md:mt-32">
            {children}
        </div>
    );
};

const Motd = () => {
    return (
        <h1 className="font-extrabold pl-3 text-2xl md:text-3xl text-white text-shadow-xl">
            Random Manga For You
        </h1>
    );
};

const Controls = ({ likesCount, likedStatus, mobile }) => {
    const [liked, setLiked] = useState(likedStatus);

    return (
        <div
            className={`${
                mobile
                    ? 'mt-4 inline-flex md:hidden'
                    : ' mt-2 hidden md:inline-flex'
            } items-center flex-row flex-nowrap space-x-1 lg:space-x-3 }`}>
            <button className="bg-blue-400 text-xs  tracking-tighter hover:text-gray-200 text-gray-100 font-bold py-2 px-3  sm:px-1 lg:px-5  rounded inline-flex items-center space-x-1">
                <AlIcon />
                <span className="text-xs">Add to list</span>
            </button>
            <button className="flex items-center space-x-1 focus:outline-none">
                <FontAwesomeIcon
                    color={liked ? 'red' : 'white'}
                    size="lg"
                    icon={faHeart}
                />
                <span className="text-white font-medium md:text-xs lg:text-sm">
                    {likesCount}
                </span>
            </button>
        </div>
    );
};

export default function DailySection(props) {
    const { data, error, isLoading } = useDaily();
    if (isLoading) {
        return null;
    }
    return (
        <section>
            <Banner banner={data.manga.banner} />
            <DailyWrapper>
                <Motd />
                <div className="w-full h-40 sm:h-auto px-2 ">
                    <div className="flex items-center ">
                        <div className="flex flex-col ">
                            <Cover cover={data.manga.coverImage.large} />
                            <Controls
                                likesCount={data.manga.likes_count}
                                likedStatus={data.manga.likedStatus}
                            />
                        </div>

                        <div className="px-2 sm:px-3 py-4 overflow-hidden">
                            <h3 className="text-lg md:text-xl py-2 font-semibold text-white">
                                {data.manga.title}
                            </h3>
                            <div className="flex items-center space-x-2 flex-wrap overflow-hidden max-w-sm max-h-5">
                                <Pill text="Action" color="red" />
                                <Pill text="Romance" color="yellow" />
                                <Pill text="Adventure" color="green" />
                                <Pill text="Comedy" color="pink" />
                                <Pill text="Shounen" color="red" />
                                <Pill text="Drama" color="red" />
                            </div>
                            <Controls
                                likesCount={data.manga.likes_count}
                                likedStatus={data.manga.likedStatus}
                                mobile
                            />
                            <div className="mt-4 hidden md:block text-gray-400 text-sm hover:text-gray-300 leading-snug tracking-tight max-w-3xl  md:line-clamp-5">
                                {data.manga.description}
                            </div>
                        </div>
                    </div>
                </div>
            </DailyWrapper>
            <div className="container md:hidden mx-auto p-5 my-2 text-gray-400 leading-snug tracking-tight text-sm">
                {data.manga.description}
            </div>
        </section>
    );
}
