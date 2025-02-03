import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const skills = [
    { title: "Java", imageSrc: "skills/java.png" },
    { title: "Hibernate", imageSrc: "skills/hibernate.png" },
    { title: "Spring Boot", imageSrc: "skills/springboot.png" },
    { title: "MySQL", imageSrc: "skills/mysql.png" },
    { title: "HTML", imageSrc: "skills/html.png" },
    { title: "CSS", imageSrc: "skills/css.png" },
    { title: "React", imageSrc: "skills/react.png" },
    { title: "JavaScript", imageSrc: "skills/java-script.png" },
    { title: "SQL Plus", imageSrc: "skills/sql-server.png" },
    { title: "Servlet", imageSrc: "skills/java.png" },
    { title: "JSP", imageSrc: "skills/java.png" },
  ];

  const history = [
    {
      organisation: "Perfect Skills Pvt Ltd",
      role: "Intern",
      imageSrc: "history/ps-logo.webp",
      startDate: "Jan 2024",
      endDate: "Jun 2024",
      experiences: [
        "Worked remotely on developing and maintaining web applications.",
        "Gained hands-on experience with Java, Spring Boot, and Hibernate.",
        "Collaborated with teams to deliver projects on time.",
      ],
    },
    {
      organisation: "Greatcoder",
      role: "Trainee",
      imageSrc: "history/gc.jpeg",
      startDate: "Aug 2024",
      endDate: "Present",
      experiences: [
        "Working as a trainee in Hyderabad, focusing on full-stack development.",
        "Building web applications using React, Java, and MySQL.",
        "Learning and implementing best practices in software development.",
      ],
    },
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience & Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};