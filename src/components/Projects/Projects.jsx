import React from "react";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {/* Project 1 */}
        <div className={styles.project}>
          <h3>NGO for Needy</h3>
          <p>
            This project aims to develop a web-based application to manage and
            support the operations of a Non-Governmental Organization (NGO)
            focused on helping individuals in need.
          </p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>User Management (Admins, Volunteers, Beneficiaries)</li>
            <li>Beneficiary Registration</li>
            <li>Volunteer & Donation Management</li>
          </ul>
          <p><strong>Technology Stack:</strong> Java (Spring Boot), MySQL, JSP, HTML, CSS, JavaScript</p>
        </div>

        {/* Project 2 */}
        <div className={styles.project}>
          <h3>E-Commerce Platform</h3>
          <p>
            A comprehensive e-commerce platform where users can browse, shop,
            and make payments online.
          </p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Product Catalog & Search</li>
            <li>Shopping Cart & Checkout</li>
            <li>Payment Gateway Integration</li>
          </ul>
          <p><strong>Technology Stack:</strong> Angular, Java (Spring Boot), MySQL</p>
        </div>

        {/* Project 3 */}
        <div className={styles.project}>
          <h3>StayWell</h3>
          <p>A Spring Boot REST API web service for an online hotel booking application, developed using Core Java and the Spring Framework.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>CRUD operations for hotels and rooms.</li>
            <li>Real-time availability status updates.</li>
            <li>Customers can book, modify, or cancel reservations.</li></ul>
            <p><strong>Technology Stack:</strong> Java (Spring Boot), MySQL</p>

        </div>
      </div>

      {/* Achievements Section */}
      <section className={styles.achievements}>
        <h2>Achievements</h2>
        <ul>
          <li>Java Full Stack Certification from Edubridge India</li>
          <li>Java masterclass from udemy</li>
        </ul>
        
      </section>

      
    </section>
  );
};