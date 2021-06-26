import React from 'react';

const Nav = () => (
    <nav className="bg-purple-600 text-white p-4 shadow">
            <ul className="flex space-x-6 justify-end">
                <li>
                    <a href='/'>Home</a>
                    </li>
                <li>
                    <a href='/about'>About</a>
                    </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
);

export default Nav;