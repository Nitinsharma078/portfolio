'use client';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '@/store/themeSlice';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { navLinks } from '@/data/portfolio';

export default function NavbarComponent() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
        className={`navbar-glass ${scrolled ? 'shadow-lg' : ''}`}
      >
        <Container>
          <Navbar.Brand href="#" className="navbar-brand-text">
            &lt;<span>Nitin</span> /&gt;
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-2 d-lg-none">
            <button
              className="theme-toggle"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
            </button>
            <Navbar.Toggle aria-controls="main-nav" />
          </div>

          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-lg-center gap-1">
              {navLinks.map((link) => (
                <Nav.Item key={link.href}>
                  <Link
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
                    onSetActive={() => setActiveSection(link.href)}
                    onClick={() => setExpanded(false)}
                  >
                    {link.name}
                  </Link>
                </Nav.Item>
              ))}
              <Nav.Item className="d-none d-lg-block ms-2">
                <button
                  className="theme-toggle"
                  onClick={() => dispatch(toggleTheme())}
                >
                  {theme === 'dark' ? (
                    <FaSun size={14} />
                  ) : (
                    <FaMoon size={14} />
                  )}
                </button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}
