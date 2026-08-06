<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ClientLogoWall from '@/components/ClientLogoWall.vue'
import { capabilities } from '@/data/content'
</script>

<template>
  <div class="work-page wrap">
    <span class="kicker">// 01 — what I take on</span>
    <h1>Work</h1>
    <p class="intro">
      Below is the kind of work I take on, described in plain terms rather than sorted into a
      package to pick from: sites that need building, systems that need fixing, technical problems
      that need solving, handled end to end.
    </p>

    <ol class="capability-list">
      <li v-for="item in capabilities" :key="item.number" class="capability-entry">
        <span class="capability-number">{{ item.number }}</span>
        <div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.body }}</p>
        </div>
      </li>
    </ol>

    <hr class="hr" />

    <ClientLogoWall variant="full" />

    <div class="cta-row">
      <RouterLink to="/contact" class="btn btn-primary">Tell me what you need</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.work-page {
  padding: 3rem 1.5rem 5rem;
}

.work-page h1 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: 1.25rem;
}

.intro {
  max-width: 55ch;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--mono-accent);
  margin-bottom: 3rem;
}

.capability-list {
  list-style: none;
  padding: 0;
  margin: 0 0 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 60ch;
}

.capability-entry {
  display: flex;
  gap: 1.5rem;
}

.capability-number {
  font-family: var(--font-mono);
  color: var(--indigo);
  font-size: 1rem;
  padding-top: 0.25rem;
  flex-shrink: 0;
}

.capability-entry h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.capability-entry p {
  color: var(--ink);
  line-height: 1.7;
}

.cta-row {
  margin-top: 3rem;
}
</style>
