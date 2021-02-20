import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconButton({ icon, text, fillColor, handleClick }) {
    return (
        <button
            className="flex items-center space-x-1 focus:outline-none"
            onClick={handleClick}>
            <FontAwesomeIcon color={fillColor} size="lg" icon={icon} />
            <span className="text-white font-medium md:text-xs lg:text-sm">
                {text}
            </span>
        </button>
    );
}
