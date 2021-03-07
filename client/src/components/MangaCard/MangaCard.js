import Pill from "../Pill/Pill";

export default function MangaCard({ cover, title, genres, description }) {
  return (
    <article className="bg-gray-800 shadow-md flex max-h-52">
      <div className="w-32  md:w-36 lg:w-40">
        <img className="object-cover w-full h-full" src={cover} />
      </div>
      <div className="flex-1 max-h-full flex flex-col">
        <div className="w-full h-full">
          <div className="hover:overflow-y-scroll  max-h-48 delay-150 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 md:max-h-44 lg:max-h-52 px-3">
            <h3 className="font-bold text-lg lg:text-xl py-1  text-gray-300">
              {title}
            </h3>
            <div className="line-clamp-6 lg:line-clamp-9 hover:line-clamp-none  text-xs  text-gray-500 hover:text-gray-300 leading-4 tracking-tight ">
              {description}
            </div>
          </div>
        </div>
        <div className="w-full h-9 py-2 flex items-center justify-between bg-darkGray-600">
          <div className="flex space-x-1 h-5 flex-wrap overflow-hidden pl-3">
            {genres.map((genre) => {
              return <Pill text={genre} />;
            })}
          </div>
          <div className="w-5 h-5">
            <button>X</button>
          </div>
        </div>
      </div>
    </article>
  );
}
