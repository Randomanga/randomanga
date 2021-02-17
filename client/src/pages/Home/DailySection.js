import Pill from '../../components/Pill/Pill';
import AlIcon from '../../components/Icons/AlIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function DailySection(props) {
    


    return (
        <section>
            <div className="absolute top-14 bg-gradient-to-t h-96 md:h-110 w-full from-darkGray-600  to-transparent -z-1" />
            <img
                className="absolute top-14 object-cover h-96  md:h-110 w-full -z-2"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg"
                alt=""
            />
            <div className="container  mx-auto flex flex-col justify-between  h-96 md:h-110 mt-28 md:mt-32">
                <h1 className="font-extrabold pl-3 text-2xl md:text-3xl text-white text-shadow-xl">
                    Random Manga For You
                </h1>
                <div className="w-full h-40 sm:h-auto px-2 ">
                    <div className="flex items-center ">
                        <div className="flex flex-col ">
                            <img
                                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg"
                                alt="cover"
                                className="h-36 min-w-28 w-28 sm:min-w-36 sm:h-48 sm:w-36 md:h-52 md:w-40 md:min-w-40 flex-shrink-0 rounded-sm"
                            />
                            <div className="hidden md:flex items-center flex-nowrap space-x-1 lg:space-x-3 mt-2">
                                <button class="bg-blue-400 text-xs  tracking-tighter hover:text-gray-200 text-gray-100 font-bold py-2 px-3  sm:px-1 lg:px-5  rounded inline-flex items-center space-x-1">
                                    <AlIcon />
                                    <span className="text-xs">Add to list</span>
                                </button>
                                <button className="flex items-center space-x-1 focus:outline-none">
                                    <FontAwesomeIcon
                                        color="red"
                                        size="lg"
                                        icon={faHeart}
                                    />
                                    <span className="text-white font-medium md:text-xs lg:text-sm">
                                        24
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="px-2 sm:px-3 py-4 overflow-hidden">
                            <h3 className="text-lg md:text-xl py-2 font-semibold text-white">
                                One Piece
                            </h3>
                            <div className="flex items-center space-x-2 flex-wrap overflow-hidden max-w-sm max-h-5">
                                <Pill text="Action" color="red" />
                                <Pill text="Romance" color="yellow" />
                                <Pill text="Adventure" color="green" />
                                <Pill text="Comedy" color="pink" />
                                <Pill text="Shounen" color="red" />
                                <Pill text="Drama" color="red" />
                            </div>
                            <div className="mt-4 md:hidden flex space-x-3">
                                <button class="bg-blue-400  hover:text-gray-200 text-gray-100 font-bold py-2 px-3 rounded inline-flex items-center space-x-1">
                                    <AlIcon />
                                    <span className="text-xs">Add to list</span>
                                </button>
                                <button className="flex items-center space-x-1 focus:outline-none">
                                    <FontAwesomeIcon
                                        color="white"
                                        size="lg"
                                        icon={faHeart}
                                    />
                                    <span className="text-white font-medium md:text-xs lg:text-sm">
                                        24
                                    </span>
                                </button>
                            </div>
                            <div className="mt-4 hidden md:block text-gray-400 text-sm hover:text-gray-300 leading-snug tracking-tight max-w-3xl  md:line-clamp-5">
                                The weak prince of an insignificant country,
                                Davey. After becoming comatose, his soul escaped
                                to a temple where the souls of heroes gathered.
                                He trained for a thousand years and has now
                                returned as a max level hero! “Just you guys
                                wait, I’m gonna face you all head-on!” The
                                refreshing story of Davey’s royal life and
                                revenge has just begun. The weak prince of an
                                insignificant country, Davey. After becoming
                                comatose, his soul escaped to a temple where the
                                souls of heroes gathered. He trained for a
                                thousand years and has now returned as a max
                                level hero! “Just you guys wait, I’m gonna face
                                you all head-on!” The refreshing story of
                                Davey’s royal life and revenge has just begun
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container md:hidden mx-auto p-5 my-2 text-gray-400 leading-snug tracking-tight text-sm">
                The weak prince of an insignificant country, Davey. After
                becoming comatose, his soul escaped to a temple where the souls
                of heroes gathered. He trained for a thousand years and has now
                returned as a max level hero! “Just you guys wait, I’m gonna
                face you all head-on!” The refreshing story of Davey’s royal
                life and revenge has just begun. The weak prince of an
                insignificant country, Davey. After becoming comatose, his soul
                escaped to a temple where the souls of heroes gathered. He
                trained for a thousand years and has now returned as a max level
                hero! “Just you guys wait, I’m gonna face you all head-on!” The
                refreshing story of Davey’s royal life and revenge has just
                begun
            </div>
        </section>
    );
}
