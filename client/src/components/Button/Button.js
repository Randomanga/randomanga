import classnames from 'classnames';

function Button({
    size,
    bgColor,
    textColor,
    textShadow,
    children,
    hoverBgColor,
    onClick,
    loading,
}) {
    return (
        <button
            disabled={loading}
            onClick={onClick}
            className={classnames(
                `${bgColor} text-${textColor} font-bold py-2 px-4 rounded ${textShadow} focus:outline-none ${
                    loading ? null : `hover:${hoverBgColor}`
                }  flex items-center`,
                {
                    'text-xs': size === 'sm',
                    'text-xl': size === 'lg',
                    'text-gray-200': loading,
                }
            )}>
            {loading ? (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 38 38"
                    className="animate-spin mr-2"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient
                            x1="8.042%"
                            y1="0%"
                            x2="65.682%"
                            y2="23.865%"
                            id="a">
                            <stop
                                stopColor="#fff"
                                stopOpacity="0"
                                offset="0%"
                            />
                            <stop
                                stopColor="#fff"
                                stopOpacity=".631"
                                offset="63.146%"
                            />
                            <stop stopColor="#fff" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)">
                            <path
                                d="M36 18c0-9.94-8.06-18-18-18"
                                id="Oval-2"
                                stroke="url(#a)"
                                strokeWidth="2"></path>
                        </g>
                    </g>
                </svg>
            ) : null}
            {children}
        </button>
    );
}

export default Button;
