'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaReact, FaNodeJs } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiNextdotjs } from 'react-icons/si';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { personalInfo, stats } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function AnimatedCounter({ value, label }) {
  const numericValue = parseInt(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const stepTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div className="hero-stat">
      <div className="hero-stat-value">
        {count}{value.includes('+') ? '+' : ''}
      </div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}

function TypeWriter({ texts, speed = 100, deleteSpeed = 50, pause = 2000 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
        );
      }, isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts, speed, deleteSpeed, pause]);

  return (
    <span>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        style={{ color: 'var(--accent-primary)' }}
      >
        |
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 400], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 400], [-8, 8]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <motion.p
              className="hero-greeting"
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="hero-name"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {personalInfo.name}
              <span className="gradient-text">.</span>
            </motion.h1>

            <motion.h2
              className="hero-title gradient-text"
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <TypeWriter
                texts={[
                  'Full Stack Engineer',
                  'React.js Developer',
                  'Next.js Specialist',
                  'UI/UX Enthusiast',
                ]}
              />
            </motion.h2>

            <motion.p
              className="hero-description"
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {personalInfo.subtitle}. I craft modern, responsive web
              applications with clean code and exceptional user experiences.
            </motion.p>

            <motion.div
              className="hero-buttons"
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Link to="projects" smooth={true} offset={-80} duration={500}>
                <button className="btn-gradient">
                  <span>View My Work</span> <FaArrowRight />
                </button>
              </Link>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow"
              >
                <FaDownload /> Resume
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </Col>

          <Col lg={5} className="d-none d-lg-block">
            <motion.div
              className="hero-visual"
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
              }}
              style={{ perspective: 1000 }}
            >
              <motion.div style={{ rotateX, rotateY }}>
                <div className="hero-avatar-ring">
                  <div className="hero-avatar-inner">
                    <span className="initials">NS</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="hero-floating-badge"
                style={{ top: '10%', right: '-10%' }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="badge-icon" style={{ background: 'rgba(97, 218, 251, 0.15)', color: '#61DAFB' }}>
                  <FaReact />
                </div>
                React.js
              </motion.div>

              <motion.div
                className="hero-floating-badge"
                style={{ bottom: '15%', left: '-5%' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="badge-icon" style={{ background: 'rgba(0, 212, 255, 0.15)', color: '#fff' }}>
                  <SiNextdotjs />
                </div>
                Next.js
              </motion.div>

              <motion.div
                className="hero-floating-badge"
                style={{ bottom: '50%', right: '-15%' }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="badge-icon" style={{ background: 'rgba(51, 153, 51, 0.15)', color: '#339933' }}>
                  <FaNodeJs />
                </div>
                Node.js
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <div className="hero-social">
        <motion.a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a href={`mailto:${personalInfo.email}`} whileHover={{ scale: 1.2 }}>
          <HiOutlineMail />
        </motion.a>
      </div>

      <Link to="about" smooth={true} offset={-80} duration={500}>
        <div className="scroll-indicator">
          <div className="scroll-mouse" />
          <span>SCROLL</span>
        </div>
      </Link>
    </section>
  );
}
