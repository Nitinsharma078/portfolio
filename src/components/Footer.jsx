'use client';

import { Container, Row, Col } from 'react-bootstrap';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '@/data/portfolio';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <div className="footer-brand">
                &lt;<span className="gradient-text">Nitin</span> /&gt;
              </div>
              <p className="footer-desc">
                Full Stack Engineer passionate about creating beautiful,
                performant web experiences with modern technologies.
              </p>
              <div className="footer-social mt-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a href={`mailto:${personalInfo.email}`}>
                  <FaEnvelope />
                </a>
              </div>
            </Col>

            <Col lg={2} md={4}>
              <h6 className="footer-title">Quick Links</h6>
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="footer-link"
                >
                  {link.name}
                </Link>
              ))}
            </Col>

            <Col lg={2} md={4}>
              <h6 className="footer-title">More</h6>
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="footer-link"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={personalInfo.resumeUrl}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Col>

            <Col lg={4} md={4}>
              <h6 className="footer-title">Get in Touch</h6>
              <p className="footer-link">{personalInfo.email}</p>
              <p className="footer-link">{personalInfo.phone}</p>
              <p className="footer-link">{personalInfo.location}</p>
            </Col>
          </Row>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} {personalInfo.name}. Built with{' '}
              <FaHeart
                style={{ color: '#ff4757', verticalAlign: 'middle' }}
              />{' '}
              using React & Next.js
            </p>
          </div>
        </Container>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Link to="hero" smooth={true} duration={800}>
              <button className="back-to-top">
                <FaArrowUp />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
