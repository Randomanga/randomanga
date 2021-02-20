import Pill from '../../components/Pill/Pill';
import AlIcon from '../../components/Icons/AlIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useDaily from '../../utils/hooks/useDaily';
import { useState } from 'react';
import DOMPurify from 'dompurify';
import IconButton from '../../components/Button/FontAwesomeIconButton';

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

const DailyWrapper = ({ children }) => {
    return (
        <div className="container  mx-auto flex flex-col justify-between  h-96 md:h-110 mt-28 md:mt-32 overflow-visible">
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

const Controls = ({ likesCount, likedStatus, mobile, handleClick }) => {
    const [liked, setLiked] = useState(likedStatus);

    return (
        <div
            className={`${
                mobile ? 'inline-flex md:hidden' : 'hidden md:inline-flex'
            } mt-1 items-center flex-row flex-nowrap space-x-1 lg:space-x-3 }`}>
            <button className="bg-blue-400 text-xs  hover:text-gray-200 text-gray-100 font-bold py-2 px-5  md:tracking-tighter md:px-2  rounded inline-flex items-center space-x-1 focus:outline-none">
                <AlIcon />
                <span className="text-xs">Add to list</span>
            </button>
            <IconButton
                text={likesCount}
                fillColor={likedStatus ? 'red' : 'white'}
                icon={faHeart}
                handleClick={handleClick}
            />
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
                <div className="w-full flex pl-1 md:pl-0 items-center">
                    <div className="flex flex-col">
                        <div className="h-auto w-28 md:w-36   flex-none bg-cover rounded-sm text-center overflow-hidden">
                            <img
                                src={data.manga.coverImage.large}
                                title="Daily manga cover image"
                            />
                        </div>
                        <Controls
                            likesCount={data.manga.likes_count}
                            likedStatus={data.manga.likedStatus}
                        />
                    </div>
                    <div className="px-3 flex flex-col  leading-normal max-w-3xl">
                        <h3 className="text-white font-bold text-lg md:text-xl mb-2 line-clamp-2">
                            {data.manga.title}
                        </h3>
                        <div className="flex h-5 space-x-1 flex-wrap overflow-hidden mb-8 md:mb-5 max-w-md">
                            {data.manga.genre.map((genre) => (
                                <Pill text={genre} color="red" />
                            ))}
                            {data.manga.tags.map((tag) => (
                                <Pill text={tag} color="blue" />
                            ))}
                        </div>
                        <div
                            className="hidden md:block md:line-clamp-8 hover:text-gray-200  text-gray-400 leading-snug tracking-tight text-sm max-h-32"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    DOMPurify.sanitize(data.manga.description)
                                ),
                            }}
                        />
                        <Controls
                            likesCount={data.manga.likes_count}
                            likedStatus={data.manga.likedStatus}
                            mobile
                        />
                    </div>
                </div>
            </DailyWrapper>
            <div
                className="container md:hidden mx-auto p-5 my-2 text-gray-400 leading-snug tracking-tight text-sm"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                        DOMPurify.sanitize(data.manga.description)
                    ),
                }}
            />
        </section>
    );
}
