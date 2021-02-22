export default function Generator() {
    return (
        <section className="container mx-auto max-w-2xl flex flex-col items-center  mt-24 h-96">
            <h3 className="text-white text-2xl md:text-3xl font-bold py-1">
                Random Manga Generator
            </h3>
            <div className="bg-red-500  border-b-2 border-red-500 w-11/12 rounded-full"></div>
            <span className="text-gray-500 text-xs px-3 py-2">
                Fill in the form below to get a personlized random list.
            </span>
            <div></div>
        </section>
    );
}
