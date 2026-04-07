'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaBolt, FaPuzzlePiece, FaMobileAlt } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

const highlights = [
  {
    icon: FaCode,
    title: 'Clean Code',
    desc: 'Maintainable, well-structured code with modern best practices',
  },
  {
    icon: FaBolt,
    title: 'Performance',
    desc: 'Optimizing for speed with lazy loading and code splitting',
  },
  {
    icon: FaPuzzlePiece,
    title: 'Problem Solver',
    desc: 'Breaking down complex problems into elegant solutions',
  },
  {
    icon: FaMobileAlt,
    title: 'Responsive Design',
    desc: 'Pixel-perfect UIs that work flawlessly across all devices',
  },
];

const codeLines = [
  { num: 1, content: <><span className="code-keyword">const</span> <span className="code-variable">developer</span> <span className="code-bracket">= {'{'}</span></> },
  { num: 2, content: <>&nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">&quot;Nitin Sharma&quot;</span>,</> },
  { num: 3, content: <>&nbsp;&nbsp;<span className="code-property">role</span>: <span className="code-string">&quot;Full Stack Engineer&quot;</span>,</> },
  { num: 4, content: <>&nbsp;&nbsp;<span className="code-property">experience</span>: <span className="code-string">&quot;2+ years&quot;</span>,</> },
  { num: 5, content: <>&nbsp;&nbsp;<span className="code-property">education</span>: <span className="code-string">&quot;B.Tech CSE - 8.9 CGPA&quot;</span>,</> },
  { num: 6, content: <>&nbsp;&nbsp;<span className="code-property">passion</span>: <span className="code-string">&quot;Building amazing UIs&quot;</span>,</> },
  { num: 7, content: <>&nbsp;&nbsp;<span className="code-property">skills</span>: [<span className="code-string">&quot;React&quot;</span>, <span className="code-string">&quot;Next.js&quot;</span>, <span className="code-string">&quot;Node&quot;</span>],</> },
  { num: 8, content: <>&nbsp;&nbsp;<span className="code-property">available</span>: <span className="code-boolean">true</span>,</> },
  { num: 9, content: <><span className="code-bracket">{'}'};</span></> },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding">
      <Container>
        <SectionHeading
          title="About"
          highlight="Me"
          subtitle="Get to know me and what I do"
        />

        <Row className="align-items-center g-5" ref={ref}>
          <Col lg={5}>
            <motion.div
              className="about-code-editor"
              initial={{ opacity: 0, x: -50, rotateY: -5 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="code-editor-header">
                <div className="code-dot red" />
                <div className="code-dot yellow" />
                <div className="code-dot green" />
                <span className="code-editor-title">about-nitin.jsx</span>
              </div>
              <div className="code-editor-body">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={line.num}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  >
                    <span className="code-line-num">{line.num}</span>
                    {line.content}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.05rem',
                  lineHeight: 1.9,
                  marginBottom: '16px',
                }}
              >
                {personalInfo.bio}
              </p>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.05rem',
                  lineHeight: 1.9,
                  marginBottom: '36px',
                }}
              >
                I hold a{' '}
                <strong style={{ color: 'var(--text-primary)' }}>
                  B.Tech in Computer Science
                </strong>{' '}
                from Global Institute of Technology with a{' '}
                <span className="gradient-text" style={{ fontWeight: 700 }}>
                  CGPA of 8.9
                </span>
                . Currently working as a Full Stack Engineer at Codifly It
                Solution, building scalable web applications.
              </p>
            </motion.div>

            <Row className="g-3">
              {highlights.map((item, i) => (
                <Col sm={6} key={item.title}>
                  <motion.div
                    className="about-highlight-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  >
                    <div className="about-highlight-icon">
                      <item.icon />
                    </div>
                    <h6 style={{ fontWeight: 700, marginBottom: '8px' }}>{item.title}</h6>
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
