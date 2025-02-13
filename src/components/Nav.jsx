import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from "/public/logo.png"; /*og dimensions: 768 x 768 */

function Nav() {
    return (
        <>
        <header className = 'nav-container'> 
            <div className = 'nav-content'> 
                <nav className = 'nav-left'> 
                    <div className="text-hover">
                        <h4><NavLink to = '/illustration' className={({ isActive }) => isActive ? "active-link" : ""}>Illustrations</NavLink></h4>
                    </div>
                    <div className="text-hover">
                        <h4><NavLink to = '/project' className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink></h4>
                    </div>
                    
                </nav>
                
                <div className="text-hover">
                    <NavLink to = '/'><img class="logo" src={logo} alt="Logo Placeholder"></img></NavLink>
                </div>

                <nav className = 'nav-right'> 
                    <div className="text-hover">
                        <h4><NavLink to = '/about' className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></h4>
                    </div>
                    <div className="text-hover"><h4><a href="https://linkedin.com" target = "blank">LinkedIn</a></h4></div>
                </nav>

            </div>
        </header>
        </>
    );
}

export default Nav;