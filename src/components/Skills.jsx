'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

function SkillCard({ skill, index, isInView }) {
  return (
    <Col xs={6} sm={4} md={3} lg={2}>
      <motion.div
        className="skill-card"
        style={{ '--skill-color': skill.color }}
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          y: -8,
          scale: 1.05,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        <div
          className="skill-icon-wrapper"
          style={{ background: `${skill.color}12` }}
        >
          <skill.icon
            className="skill-icon"
            style={{ color: skill.color }}
          />
        </div>
        <div className="skill-name">{skill.name}</div>
        <div className="skill-level">{skill.level}%</div>
        <div className="skill-progress">
          <motion.div
            className="skill-progress-bar"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
              color: skill.color,
            }}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{
              duration: 1.5,
              delay: 0.3 + index * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        </div>
      </motion.div>
    </Col>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <Container>
        <SectionHeading
          title="Technical"
          highlight="Skills"
          subtitle="Technologies and tools I work with on a daily basis"
        />

        <Row className="g-3 justify-content-center" ref={ref}>
          {skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              isInView={isInView}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}
