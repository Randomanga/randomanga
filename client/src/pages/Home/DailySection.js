import Pill from '../../components/Pill/Pill';
import AlIcon from '../../components/Icons/AlIcon';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useDaily from '../../utils/hooks/useDaily';
import { useContext, useState } from 'react';
import DOMPurify from 'dompurify';
import IconButton from '../../components/Button/FontAwesomeIconButton';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

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
        <h1 className="font-extrabold pl-3 text-3xl text-white text-shadow-xl">
            Random Manga For You
        </h1>
    );
};

const Controls = ({ mobile }) => {
    const { data, mutate } = useDaily();
    const { user } = useContext(AuthContext);
    const [bounce, setBounce] = useState(false);

    const onClick = async () => {
        const liked = data.manga.liked;
        try {
            if (!user) {
                toast.error('You need to be logged in to like', {
                    toastId: 'error',
                });
                return;
            }
            await axios({
                method: liked ? 'delete' : 'post',
                url: `http://192.168.1.242:5000/api/manga/${data.manga.al_id}/likes`,
                headers: { Authorization: `Bearer ${user.token}` },
            });
            if (!liked)
                toast.info('Added to liked manga.', { toastId: 'like-mangas' });
            else
                toast.info('Removed from liked manga.', {
                    toastId: 'dislike-mangas',
                });
            mutate();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div
            className={`${
                mobile ? 'inline-flex md:hidden' : 'hidden md:inline-flex'
            } mt-2 items-center flex-row flex-nowrap space-x-1 lg:space-x-3 }`}>
            <button className="bg-blue-400 text-xs  hover:text-gray-200 text-gray-100 font-bold py-2 px-5  md:tracking-tighter md:px-2  rounded inline-flex items-center space-x-1 focus:outline-none">
                <AlIcon />
                <span className="text-xs">Add to list</span>
            </button>
            <IconButton
                text={data.manga.likes_count}
                fillColor={data.manga.liked ? 'red' : 'white'}
                icon={faHeart}
                handleClick={onClick}
            />
        </div>
    );
};

export default function DailySection(props) {
    const { data, error, isLoading, mutate } = useDaily();
    if (isLoading) {
        return null;
    }
    if (error) {
        toast.error(`${error.info}Please refresh or try again later.`, {
            toastId: 'daily-error',
        });
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
                                src={data.manga.cover_image.large}
                                title="Daily manga cover image"
                            />
                        </div>
                        <Controls />
                    </div>
                    <div className="px-3 flex flex-col  leading-normal max-w-3xl">
                        <h3 className="text-white font-bold text-lg md:text-xl mb-2 line-clamp-2">
                            {data.manga.title}
                        </h3>
                        <div className="flex h-5 space-x-1 flex-wrap overflow-hidden mb-8 md:mb-5 max-w-md">
                            {data.manga.genre.map((genre, index) => (
                                <Pill text={genre} color="red" key={index} />
                            ))}
                            {data.manga.tags.map((tag, index) => (
                                <Pill text={tag} color="blue" key={index} />
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
                        <Controls mobile />
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
