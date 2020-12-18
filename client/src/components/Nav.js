import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import './styles/Nav.css';
function Nav(props) {
    const context = useContext(AuthContext);

    const [visible, setVisible] = useState(false);
    const pathname = window.location.pathname;

    async function loginClick() {
        console.log('called');
        const options = {
            method: 'post',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'Wiz',
                password: 'ElvisIsi123',
            }),
        };

        const response = await fetch('http://localhost:5006/login', options);
        if (response.ok) {
            const data = await response.json();
            context.login(data);
        } else {
            const errors = await response.json();
        }
    }
    return (
        <section className="nav-bar">
            <div className="nav-container">
                <div className="brand">
                    <a href="/">
                        Rando<span>Manga</span>
                    </a>
                </div>
                <nav>
                    <div className="nav-mobile">
                        <a
                            id="nav-toggle"
                            className={visible ? 'active' : ''}
                            onClick={() => {
                                setVisible(!visible);
                            }}>
                            <span></span>
                        </a>
                    </div>
                    <ul
                        className="nav-list"
                        style={
                            visible ? { display: 'block' } : { display: 'none' }
                        }>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/recommendations">Recommendations</a>
                        </li>
                        <li>
                            <a href="/lists">Top lists</a>
                        </li>
                        <li>
                            {context.user ? (
                                <a className="account">
                                    <img src="avatar.jpg"></img>
                                    <span>{context.user.username}</span>
                                </a>
                            ) : (
                                <a
                                    className="sign-in"
                                    onClick={() => {
                                        loginClick();
                                    }}>
                                    <button>Sign in</button>
                                </a>
                            )}
                            {context.user ? (
                                <ul className="nav-dropdown">
                                    <li>
                                        <a href="/profile">
                                            <i className="fa-fw fas fa-user"></i>
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                context.logout();
                                            }}>
                                            <i className="fa-fw fas fa-sign-out-alt"></i>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            ) : (
                                ''
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
export default Nav;
