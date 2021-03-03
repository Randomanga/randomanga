import React from 'react';

function AlIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            className="w-4 h-4 bg-gray-900 rounded-full"
            viewBox="0 0 16 16">
            <path
                fill="#009FF0"
                fillRule="evenodd"
                d="M10.355 10.34V3.817c0-.374-.206-.58-.58-.58H8.5c-.374 0-.58.206-.58.58v3.098c0 .087.84.492.862.578.64 2.502.14 4.505-.468 4.599.993.049 1.102.526.363.2.113-1.335.554-1.333 1.823-.05.011.012.26.535.276.535h2.997c.374 0 .58-.206.58-.58V10.92c0-.373-.206-.58-.58-.58h-3.417z"
                clipRule="evenodd"></path>
            <path
                fill="#FEFEFE"
                fillRule="evenodd"
                d="M5.057 3.236l-3.352 9.54H4.31l.568-1.65h2.836l.554 1.65h2.592l-3.34-9.54H5.057zm.413 5.776l.812-2.643.89 2.643H5.47z"
                clipRule="evenodd"></path>
        </svg>
    );
}

export default React.memo(AlIcon);
