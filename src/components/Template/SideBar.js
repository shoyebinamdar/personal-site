import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shoyeb Inamdar</h2>
        <p><a href="mailto:shoyeb.ina.1990@gmail.com">shoyeb.ina.1990@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shoyeb. A Full Stack Developer with 10 years of experience.
        Flexible to work on any technology.
        Strong practitioner of clean, robust and efficient coding.
        Loves automating tasks.

      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Shoyeb Inamdar <Link to="/">shoyebinamdar.in</Link>.</p>
    </section>
  </section>
);

export default SideBar;
