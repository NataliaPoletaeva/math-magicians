import React from 'react';
import './Calculator.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/home',
      title: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      title: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      title: 'Quote',
    },
  ];

  return (
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul className="nav-menu">
          {
                        links.map((link) => (
                          <li key={link.id}>
                            <NavLink to={link.path}>{link.title}</NavLink>
                          </li>
                        ))
                    }
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
