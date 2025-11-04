import Link from "next/link";
import styles from "./page.module.css";
import { papers } from "./papers";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Top 5 Machine Learning Papers for Beginners</h1>
        <p className={styles.tagline}>
          A concise, opinionated starting set with summaries and reading tips.
        </p>
      </header>

      <section className={styles.grid}>
        {papers.map((paper, idx) => (
          <article key={paper.id} className={styles.card}>
            <div className={styles.rank}>#{idx + 1}</div>
            <h2 className={styles.title}>{paper.title}</h2>
            <p className={styles.meta}>
              <span>{paper.authors}</span> ? <span>{paper.year}</span>
            </p>
            <p className={styles.summary}>{paper.summary}</p>
            <ul className={styles.list}>
              {paper.whyItMatters && (
                <li>
                  <strong>Why it matters:</strong> {paper.whyItMatters}
                </li>
              )}
              {paper.readingTips && (
                <li>
                  <strong>Reading tips:</strong> {paper.readingTips}
                </li>
              )}
              {paper.keyTakeaways?.length ? (
                <li>
                  <strong>Key takeaways:</strong>
                  <ul>
                    {paper.keyTakeaways.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </li>
              ) : null}
            </ul>
            <div className={styles.links}>
              {paper.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>
          Curated by an AI assistant. Best viewed as a starting point?follow
          references in each paper to go deeper.
        </p>
      </footer>
    </main>
  );
}
