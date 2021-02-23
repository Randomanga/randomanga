import classnames from 'classnames';

function Button({ size, bgColor, textColor, textShadow, children, hoverBgColor, onClick }) {
    return (
        <button
            onClick={onClick}
            className={classnames(
                `${bgColor} text-${textColor} font-bold py-2 px-4 rounded ${textShadow} focus:outline-none hover:${hoverBgColor}`,
                {
                    'text-xs': size === 'sm',
                    'text-xl': size === 'lg',
                }
            )}>
            {children}
        </button>
    );
}

export default Button;
