<script setup lang="ts">
import { workHistory, skillGroups, stats } from '@/data/content'
</script>

<template>
  <div class="experience-page">
    <div class="wrap header-block">
      <span class="kicker">// 03 — experience &amp; skills</span>
      <h1>Experience &amp; Skills</h1>
      <p class="framing">
        Translating hard technical work into plain language, and being straightforward to work
        with while doing it, is part of how I operate as an engineer — not a footnote to the
        technical output below.
      </p>
    </div>

    <div class="wrap stats-row">
      <div v-for="stat in stats" :key="stat.label" class="stat">
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>

    <section class="dark-band">
      <div class="wrap">
        <h2 class="kicker kicker-dark">// work history</h2>
        <ul class="history-list">
          <li v-for="row in workHistory" :key="row.role + row.dateRange" class="history-row">
            <span class="history-date">{{ row.dateRange }}</span>
            <div class="history-body">
              <h3>{{ row.role }} · {{ row.company }}</h3>
              <p class="history-location">{{ row.location }}</p>
              <p class="history-description">{{ row.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div class="wrap skills-block">
      <h2 class="kicker">// skills</h2>
      <div class="skill-groups">
        <div v-for="group in skillGroups" :key="group.label" class="skill-group">
          <h3>{{ group.label }}</h3>
          <ul class="tag-list">
            <li v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-block {
  padding: 3rem 1.5rem 2rem;
}

.header-block h1 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: 1rem;
}

.framing {
  max-width: 55ch;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--mono-accent);
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding: 0 1.5rem 3rem;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 10rem;
}

.stat-value {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2rem;
  color: var(--indigo);
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--mono-accent);
}

.dark-band {
  background: var(--indigo-deep);
  color: var(--paper);
  padding: 3.5rem 0;
}

.kicker-dark {
  color: var(--paper-mute);
  opacity: 0.85;
}

.history-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
}

.history-row {
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(250, 249, 246, 0.16);
}

.history-row:last-child {
  border-bottom: 1px solid rgba(250, 249, 246, 0.16);
}

.history-date {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--paper-mute);
}

.history-body h3 {
  font-size: 1.15rem;
  margin-bottom: 0.3rem;
}

.history-location {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--paper-mute);
  opacity: 0.8;
  margin-bottom: 0.6rem;
}

.history-description {
  line-height: 1.65;
  color: var(--paper-mute);
  max-width: 60ch;
}

.skills-block {
  padding: 4rem 1.5rem 5rem;
}

.skill-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2.5rem;
  margin-top: 1.5rem;
}

.skill-group h3 {
  font-size: 1rem;
  font-family: var(--font-display);
  margin-bottom: 0.9rem;
}

.tag-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--ink);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sharp);
  padding: 0.35rem 0.6rem;
  background: transparent;
}

@media (max-width: 640px) {
  .history-row {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
}
</style>
