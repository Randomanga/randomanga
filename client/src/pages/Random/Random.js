import Pill from "../../components/Pill/Pill";

export default function Random(props) {
  console.log(props.match.params.id);
  return (
    <main className="mt-32 w-screen ">
      <section className="px-2 container max-w-7xl grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 auto-cols-fr gap-x-2 gap-y-4 mx-auto">
        {[...Array(30).keys()].map(() => {
          return (
            <article className="bg-gray-800 shadow-md flex ">
              <div className="w-32  md:w-36 lg:w-40">
                <img src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx30101-N77ngeqRINUf.jpg" />
              </div>
              <div className="flex-1 max-h-full flex flex-col">
                <div className="w-full h-full">
                  <div className="scrollbar-thin  scrollbar-thumb-gray-700 scrollbar-track-transparent  max-h-40 md:max-h-44 lg:max-h-52 px-3">
                    <h3 className="font-bold text-lg lg:text-xl py-1  text-gray-300">
                      One piece
                    </h3>
                    <div className="line-clamp-8  text-xs  text-gray-500 hover:text-gray-300 leading-4 tracking-tight ">
                      Everybody at Seiyo Elementary thinks that stylish and
                      super cool Amu has it all: But nobody knows the real Amu,
                      a shy girl who wishes she had the courage to truly be
                      herself. Changing Amu’s life is going to take more than
                      wishes and dreams–it’s going to take a little magic! One
                      morning, Amu finds a surprise in her bed: three strange
                      little eggs. Each egg contains a Guardian Character, an
                      angel-like being who can give her the power to be someone
                      new. With the help of her Guardian Characters, Amu is
                      about to discover that her true self is even more amazing
                      than she ever dreamed.\ Everybody at Seiyo Elementary
                      thinks that stylish and super cool Amu has it all: But
                      nobody knows the real Amu, a shy girl who wishes she had
                      the courage to truly be herself. Changing Amu’s life is
                      going to take more than wishes and dreams–it’s going to
                      take a little magic! One morning, Amu finds a surprise in
                      her bed: three strange little eggs. Each egg contains a
                      Guardian Character, an angel-like being who can give her
                      the power to be someone new. With the help of her Guardian
                      Characters, Amu is about to discover that her true self is
                      even more amazing than she ever dreamed.
                    </div>
                  </div>
                </div>
                <div className="w-full h-9 py-2 flex items-center justify-between bg-darkGray-600">
                  <div className="flex space-x-1 h-5 flex-wrap overflow-hidden pl-3">
                    <Pill text="Action" />
                    <Pill text="Action" />
                    <Pill text="Action" />
                    <Pill text="Action" />
                  </div>
                  <div className="w-5 h-5">
                    <button>X</button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
