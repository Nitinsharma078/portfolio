'use client';

import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

function TimelineItem({ experience, index, isLeft }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className="timeline-item" ref={ref}>
      <motion.div
        className="timeline-dot"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
      />
      <Row>
        <Col lg={{ span: 5, offset: isLeft ? 0 : 7 }}>
          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, x: isLeft ? -60 : 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <div className="timeline-period">{experience.period}</div>
            <h4 className="timeline-role">{experience.role}</h4>
            <p className="timeline-company">
              <FaBriefcase className="me-2" style={{ opacity: 0.7 }} />
              {experience.company}
              <span
                className="ms-3"
                style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}
              >
                <FaMapMarkerAlt className="me-1" />
                {experience.location}
              </span>
            </p>
            <ul className="timeline-desc">
              {experience.description.map((desc, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + j * 0.08 }}
                >
                  {desc}
                </motion.li>
              ))}
            </ul>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {experience.tech.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                >
                  <Badge className="tech-badge">{t}</Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <Container>
        <SectionHeading
          title="Work"
          highlight="Experience"
          subtitle="My professional journey and key achievements"
        />

        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={i}
              isLeft={i % 2 === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
