import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const closeMenu = () => setIsOpen(false);

    // Scroll to a section id on the home page — navigates home first if needed
    const scrollToSection = (id) => (e) => {
        e.preventDefault();
        closeMenu();
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinkBase =
        'block mx-0 md:mx-4 text-[0.8rem] md:text-[0.9rem] font-semibold hover:opacity-70 transition-opacity';

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-20 h-[80px]"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-[1100px] h-full flex items-center justify-between">

                {/* ── Logo ── */}
                <h1 id="logo">
                    <NavLink to="/" onClick={closeMenu}>
                        <img src="/assets/logo.png" alt="Your Logo" className="w-10 block" />
                    </NavLink>
                </h1>

                {/* ── Nav links ── */}
                <ul
                    className={[
                        'fixed md:static top-[4.5rem] md:top-auto',
                        isOpen ? 'right-5 opacity-100' : 'right-[-100vw] opacity-0 pointer-events-none',
                        'md:right-auto md:opacity-100 md:pointer-events-auto',
                        'flex flex-col md:flex-row items-start md:items-center',
                        'w-[calc(80%-10px)] md:w-auto p-8 md:p-0',
                        'rounded-md md:rounded-none transition-all duration-300 z-50',
                    ].join(' ')}
                    style={{
                        backgroundColor: 'var(--bg-primary)',
                        boxShadow: isOpen ? 'var(--shadow)' : 'none',
                    }}
                >
                    {/* PROJECTS — scroll to section */}
                    <li className="w-full md:w-auto mb-2 md:mb-0">
                        <a
                            href="/#projects"
                            onClick={scrollToSection('projects')}
                            className={navLinkBase}
                            style={{ color: 'var(--text-color)' }}
                        >
                            PROJECTS
                        </a>
                    </li>

                    {/* SKILLS — scroll to section */}
                    <li className="w-full md:w-auto mb-2 md:mb-0">
                        <a
                            href="/#skills"
                            onClick={scrollToSection('skills')}
                            className={navLinkBase}
                            style={{ color: 'var(--text-color)' }}
                        >
                            SKILLS
                        </a>
                    </li>

                    {/* ABOUT — scroll to section */}
                    <li className="w-full md:w-auto mb-2 md:mb-0">
                        <a
                            href="/#about"
                            onClick={scrollToSection('about')}
                            className={navLinkBase}
                            style={{ color: 'var(--text-color)' }}
                        >
                            ABOUT
                        </a>
                    </li>

                    {/* CONTACT — scroll to section */}
                    <li className="w-full md:w-auto mb-2 md:mb-0">
                        <a
                            href="/#contact"
                            onClick={scrollToSection('contact')}
                            className={navLinkBase}
                            style={{ color: 'var(--text-color)' }}
                        >
                            CONTACT
                        </a>
                    </li>

                    {/* RESUME — separate route */}
                    <li className="w-full md:w-auto mt-2 md:mt-0">
                        <NavLink
                            to="/resume"
                            onClick={closeMenu}
                            className="inline-block px-8 py-3 rounded-full uppercase text-[0.82rem] font-bold w-full md:w-auto text-center transition-opacity hover:opacity-80"
                            style={{ backgroundColor: 'var(--primary-color)', color: '#000' }}
                        >
                            RESUME <i className="fas fa-arrow-right ml-2 text-[0.9rem]" />
                        </NavLink>
                    </li>

                    {/* ── Theme toggle ── */}
                    <div
                        className="mt-4 md:mt-0 md:ml-6 flex items-center justify-between cursor-pointer w-[60px]"
                        onClick={() => { toggleTheme(); closeMenu(); }}
                    >
                        <input type="checkbox" id="switch" className="hidden" checked={theme === 'dark'} readOnly />
                        <label className="flex justify-between items-center w-full cursor-pointer pointer-events-none">
                            <img
                                src="/assets/moon.svg"
                                alt="Moon"
                                className="w-[30px]"
                                style={{
                                    transform: theme === 'dark' ? 'rotate(250deg)' : 'rotate(10deg)',
                                    transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
                                }}
                            />
                            <img
                                src="/assets/sun.svg"
                                alt="Sun"
                                className="w-[30px]"
                                style={{
                                    transform: theme === 'dark' ? 'rotate(100deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
                                }}
                            />
                        </label>
                    </div>
                </ul>

                {/* ── Hamburger ── */}
                <div
                    className={`md:hidden p-1 cursor-pointer z-50 ${isOpen ? 'border border-dotted border-gray-400 rounded' : ''}`}
                    onClick={() => setIsOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    {[
                        isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                        null,
                        isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                    ].map((transform, i) => (
                        <span
                            key={i}
                            className="block w-[23px] h-[3px] my-1 mx-auto rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                ...(transform !== null ? { transform } : {}),
                                ...(i === 1 && isOpen ? { opacity: 0 } : {}),
                            }}
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
};

const Header = ({ theme, toggleTheme }) => (
    <header id="hero" className="flex flex-col h-full">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
    </header>
);

export default Header;
