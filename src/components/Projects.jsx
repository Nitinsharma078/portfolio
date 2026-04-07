'use client';

import { useState, useRef } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from 'react-icons/fa';
import { projects } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

function ProjectCard({ project, index, isInView }) {
  return (
    <Col md={6} lg={4}>
      <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{ y: -10, transition: { duration: 0.4 } }}
        layout
      >
        <div className="project-image">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <FaCode className="project-image-icon" />
          </motion.div>
          <div className="project-overlay">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-overlay-btn"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={20} />
            </motion.a>
            {project.live !== '#' && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-overlay-btn"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt size={16} />
              </motion.a>
            )}
          </div>
        </div>

        <div className="project-body">
          {project.featured && (
            <div className="project-featured">
              <FaStar size={10} /> Featured
            </div>
          )}
          <h5 className="project-title">{project.title}</h5>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-desc">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </Col>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <Container>
        <SectionHeading
          title="Featured"
          highlight="Projects"
          subtitle="Some of my recent work and side projects"
        />

        <Row className="g-4" ref={ref}>
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </Row>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="btn-outline-glow"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Featured Only' : 'View All Projects'}
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
