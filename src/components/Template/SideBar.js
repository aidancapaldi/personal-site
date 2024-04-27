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
        <h2>Aidan Capaldi</h2>
        <p><a href="mailto:aidancapaldi@outlook.com">aidancapaldi@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Aidan.
        I am a newly-minted graduate of <a href="https://www.northeastern.edu/">Northeastern University</a> seeking
        full-time employment. I&apos;m passionate about tinkering with Nintendo hardware,
        and software which entertains or heals.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Aidan Capaldi <Link to="/">aidancapaldi.github.io/personal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
