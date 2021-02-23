import { Menu, Transition } from '@headlessui/react';
import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

const UserDropdown = ({ hidden, toggleNavbar }) => {
    const { user, logout } = useContext(AuthContext);
    const history = useHistory();
    return (
        <div
            className={`${
                hidden ? 'hidden' : null
            } ml-3  md:flex items-center justify-center`}>
            <div className="relative inline-block text-left">
                <Menu>
                    {({ open }) => (
                        <>
                            <span className="rounded-md ">
                                <Menu.Button className="inline-flex justify-center items-center w-full text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out  rounded-md hover:text-gray-300 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                    {user.avatar ? (
                                        <img
                                            className="h-8 w-8 rounded-full object-cover"
                                            src={user.avatar}
                                            alt=""
                                        />
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-8 h-8">
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                    <span className="text-gray-300 font-medium ml-2  hover:text-white">
                                        {user.username}
                                    </span>
                                    <svg
                                        className="w-5 h-5 ml-1 -mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Menu.Button>
                            </span>

                            <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items
                                    static
                                    className="absolute   md:right-0 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-700 rounded-md shadow-lg outline-none">
                                    <div className="">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/profile"
                                                    onClick={() =>
                                                        toggleNavbar()
                                                    }
                                                    className={`${
                                                        active
                                                            ? 'bg-gray-700 text-gray-200'
                                                            : 'text-gray-300'
                                                    } flex space-x-1 items-center w-full px-4 py-2 text-sm leading-5 text-left rounded-t-md`}>
                                                    <FontAwesomeIcon
                                                        icon={faUser}
                                                    />
                                                    <span className="text-sm leading-5 text-left">
                                                        Profile
                                                    </span>
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/settings"
                                                    onClick={() =>
                                                        toggleNavbar()
                                                    }
                                                    className={`${
                                                        active
                                                            ? 'bg-gray-700 text-gray-200'
                                                            : 'text-gray-300'
                                                    } flex space-x-1 items-center w-full px-4 py-2 text-sm leading-5 text-left rounded-t-md`}>
                                                    <FontAwesomeIcon
                                                        icon={faCog}
                                                    />
                                                    <span className="text-sm leading-5 text-left">
                                                        Settings
                                                    </span>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>

                                    <div className="">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => {
                                                        toggleNavbar();
                                                        logout();
                                                        history.push('/');
                                                    }}
                                                    className={`${
                                                        active
                                                            ? 'bg-gray-700 text-gray-200'
                                                            : 'text-gray-300'
                                                    } flex space-x-1 items-center w-full px-4 py-2 text-sm leading-5 text-left rounded-b-md`}>
                                                    <FontAwesomeIcon
                                                        icon={faSignOutAlt}
                                                    />
                                                    <span className="text-sm leading-5 text-left">
                                                        Sign out
                                                    </span>
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        </div>
    );
};
const Hamburger = ({ handleClick, open }) => {
    return (
        <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-darkGray-500 focus:outline-none"
                aria-expanded="false"
                onClick={() => {
                    handleClick();
                }}>
                <span className="sr-only">Open main menu</span>

                <svg
                    className={`${open ? 'hidden' : 'block'} h-8 w-8}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

                <svg
                    className={` ${open ? 'block' : 'hidden'} h-8 w-8}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
};
const NavbarLink = ({ href, text, closeNavbar }) => {
    return (
        <Link
            to={href}
            onClick={() => {
                if (closeNavbar) closeNavbar();
            }}
            className="block md:inline-block text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            {text}
        </Link>
    );
};
const LinksDesktop = () => {
    return (
        <div className="flex-1 flex items-center md:items-stretch md:justify-start select-none">
            <Link to="/" className="flex flex-shrink-0 items-center ml-1">
                <span className="font-extrabold text-3xl tracking-tight text-white">
                    Rando
                </span>
                <span className="font-extrabold text-3xl tracking-tight text-blue-400">
                    Manga
                </span>
            </Link>
            <div className="hidden md:block md:ml-auto">
                <div className="flex space-x-4 mr-6">
                    <NavbarLink href="/" text="Home" />
                    <NavbarLink href="/recommedations" text="Recommendations" />
                    <NavbarLink href="/top-lists" text="Top Lists" />
                </div>
            </div>
        </div>
    );
};

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const toggleNavbar = () => {
        setOpen(!open);
    };
    return (
        <nav className="fixed top-0 w-full bg-darkGray-500 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-14">
                    {/* Hamburger menu */}
                    <Hamburger handleClick={toggleNavbar} open={open} />
                    {/* Links */}
                    <LinksDesktop closeNavbar={toggleNavbar} />
                    {/* User dropdown 
                         accepts a hidden prop, which tells it wheter to hide on mobile
                         this is used to differentiate between mobile dropdown and md dropdown 
                         in order to not make the same component twice
                    */}
                    {user ? (
                        <UserDropdown
                            toggleNavbar={toggleNavbar}
                            hidden={true}
                        />
                    ) : (
                        <div className="flex items-center">
                            <Link
                                to="/sign-in"
                                className="hidden md:inline-block text-gray-300 text-sm ml-12">
                                Sign In
                            </Link>
                            <Link
                                to="/sign-up"
                                className="hidden md:inline-block px-5 py-1 bg-blue-500 rounded-md text-gray-200 text-sm ml-3">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <Transition
                show={open}
                enter="transition ease-in-out duration-100 transform"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0 "
                leave="transition ease-in-out duration-100 transform"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full">
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-2">
                        <NavbarLink
                            closeNavbar={toggleNavbar}
                            href="/"
                            text="Home"
                        />
                        <NavbarLink
                            closeNavbar={toggleNavbar}
                            href="/recommedations"
                            text="Recommendations"
                        />
                        <NavbarLink
                            closeNavbar={toggleNavbar}
                            href="/top-lists"
                            text="Top Lists"
                        />
                        {user ? (
                            <UserDropdown toggleNavbar={toggleNavbar} />
                        ) : (
                            <div className="flex items-center">
                                <Link
                                    to="/sign-in"
                                    onClick={() => toggleNavbar()}
                                    className=" text-gray-100 text-sm ml-3">
                                    Sign In
                                </Link>
                                <Link
                                    to="/sign-up"
                                    onClick={() => toggleNavbar()}
                                    className="px-5 py-1 bg-blue-500 rounded-md text-gray-200 text-sm ml-3">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </Transition>
        </nav>
    );
}
