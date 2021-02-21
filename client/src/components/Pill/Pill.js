export default function Pill({ text, color }) {
    return (
        <span
            className={`inline-flex items-center cursor-default  hover:text-gray-300 select-none justify-center px-2 py-1 text-xs font-bold leading-none rounded-full text-gray-100 bg-red-700 `}>
            {text}
        </span>
    );
}
