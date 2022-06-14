import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <nav >
                <li>
                    <ul>
                    <NavLink to="/react-movies" className={(nav)=>nav.isActive?"class-active":""}>
                        <span>Home</span>
                    </NavLink>
                    </ul>
                    <ul>
                    <NavLink to="/react-movies/best" className={(nav)=>nav.isActive?"class-active":""}>
                        <span>Best</span>
                    </NavLink>
                    </ul>
                </li>
            </nav>
            
        </div>
    );
};

export default Navigation;