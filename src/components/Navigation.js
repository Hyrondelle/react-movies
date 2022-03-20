import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <li>
                <ul>
                    <NavLink exact to="/">
                        <span>Home</span>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink exact to="/best">
                        <span>Best</span>
                    </NavLink>
                </ul>
            </li>
        </div>
    );
};

export default Navigation;