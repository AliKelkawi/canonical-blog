import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <header
      id="navigation"
      className="p-navigation"
      style={{ paddingBottom: '30px' }}
    >
      <div className="p-navigation__row">
        <div className="p-navigation__banner">
          <div className="p-navigation__tagged-logo">
            <Link href="/">
              <a className="p-navigation__link">
                <div>
                  <div className="p-navigation__logo-tag">
                    <img
                      className="p-navigation__logo-icon"
                      src="https://assets.ubuntu.com/v1/82818827-CoF_white.svg"
                      alt="logo"
                    />
                  </div>
                  <span className="p-navigation__logo-title">Ubuntu</span>
                </div>
              </a>
            </Link>
          </div>
          <a
            href="#navigation"
            className="p-navigation__toggle--open"
            title="menu"
          >
            Menu
          </a>
          <a
            href="#navigation-closed"
            className="p-navigation__toggle--close"
            title="close menu"
          >
            Close menu
          </a>
        </div>

        <nav className="p-navigation__nav" aria-label="Example main">
          <ul className="p-navigation__items">
            <li className="p-navigation__item">
              <Link href="/">
                <a className="p-navigation__link">Home</a>
              </Link>
            </li>
            <li className="p-navigation__item">
              <Link href="/about">
                <a className="p-navigation__link">About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
