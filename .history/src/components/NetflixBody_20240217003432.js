import React from "react";

export default function NetflixBody() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Enjoy on your TV</h2>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Download your shows to watch offline
        </h2>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Stranger Things</h2>
        <p>Downloading...</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Watch everywhere</h2>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Create profiles for kids</h2>
        <p>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <ul>
          <li>What is Netflix?</li>
          <li>How much does Netflix cost?</li>
          <li>Where can I watch?</li>
          <li>How do I cancel?</li>
          <li>What can I watch on Netflix?</li>
          <li>Is Netflix good for kids?</li>
        </ul>
      </div>
    </div>
  );
}
