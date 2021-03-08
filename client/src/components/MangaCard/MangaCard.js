import DOMPurify from "dompurify";
import Pill from "../Pill/Pill";

export default function MangaCard({ cover, title, genres, description }) {
  return (
    <article className="bg-gray-800 shadow-md flex h-52">
      <div className="w-36 h-full ">
        <img className="w-full h-full object-cover" src={cover} />
      </div>
      <div className="flex flex-col flex-1 ">
        <div className="h-full  overflow-hidden hover:overflow-auto focus:overflow-auto scrollbar-thin scrollbar-track-transparent   pl-3 pr-3">
          <h3 className="font-bold text-lg text-gray-300 border-b-2 border-orange-600 mb-1 line-clamp-2">
            {title}
          </h3>
          <div
            className="text-xs text-gray-500 hover:text-gray-300 focus:text-gray-300 line-clamp-6 md:line-clamp-8 hover:line-clamp-none focus:line-clamp-none"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(DOMPurify.sanitize(description)),
            }}
          ></div>
        </div>
        <div className="w-full h-9 py-2 flex items-center justify-between bg-gray-900 bg-opacity-50">
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

