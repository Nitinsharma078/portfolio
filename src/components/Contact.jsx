'use client';

import { useState, useRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact',
          message: formData.message,
        }),
       
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      label: 'EMAIL',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FaPhone,
      label: 'PHONE',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'LOCATION',
      value: personalInfo.location,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <Container>
        <SectionHeading
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
        />

        <Row className="g-5" ref={ref}>
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h4 style={{ fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.3px' }}>
                Let&apos;s build something{' '}
                <span className="gradient-text">amazing</span> together
              </h4>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '36px',
                  fontSize: '1rem',
                }}
              >
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="contact-info-card"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  onClick={() => item.href && window.open(item.href)}
                >
                  <div className="contact-info-icon">
                    <item.icon />
                  </div>
                  <div>
                    <small
                      style={{
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </small>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="contact-social">
                {[
                  { icon: FaGithub, href: personalInfo.github },
                  { icon: FaLinkedin, href: personalInfo.linkedin },
                  { icon: FaEnvelope, href: `mailto:${personalInfo.email}` },
                ].map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--card-border)',
                borderRadius: '24px',
                padding: '36px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Form onSubmit={handleSubmit} className="contact-form">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        Your Name <span style={{ color: '#ff4757' }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        Your Email <span style={{ color: '#ff4757' }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Project Collaboration"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>
                        Message <span style={{ color: '#ff4757' }}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ resize: 'none' }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    {error && (
                      <p style={{ color: '#ff4757', fontSize: '0.9rem', marginBottom: '8px' }}>
                        {error}
                      </p>
                    )}
                    <motion.button
                      type="submit"
                      className="btn-gradient w-100"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ fontSize: '1rem', padding: '16px', justifyContent: 'center' }}
                      disabled={submitted || sending}
                    >
                      {submitted ? (
                        <><span><FaCheckCircle className="me-2" />Message Sent!</span></>
                      ) : sending ? (
                        <span>Sending...</span>
                      ) : (
                        <><span>Send Message</span> <FaPaperPlane /></>
                      )}
                    </motion.button>
                  </Col>
                </Row>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
