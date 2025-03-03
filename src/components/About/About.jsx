import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I specialize in building end-to-end web applications using
                <strong> Java, Spring Boot, Hibernate, and MySQL</strong> for the backend,
                and <strong>React</strong> for the frontend.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Expertise</h3>
              <p>
                I have extensive experience in developing robust and scalable
                backend systems, RESTful APIs, and database management using
                <strong> Spring Boot, Hibernate, and MySQL</strong>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Proficiency</h3>
              <p>
                I am proficient in creating responsive and dynamic user interfaces
                using <strong>React</strong>, ensuring seamless user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};