import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <nav >
                <li>
                    <ul>
                    <NavLink exact to="/" className={(nav)=>nav.isActive?"class-active":""}>
                        <span>Home</span>
                    </NavLink>
                    </ul>
                    <ul>
                    <NavLink exact to="/best" className={(nav)=>nav.isActive?"class-active":""}>
                        <span>Best</span>
                    </NavLink>
                    </ul>
                </li>
            </nav>
            <div className='title'>
                <h1>React Movies</h1>
            </div>
        </div>
    );
};

export default Navigation;