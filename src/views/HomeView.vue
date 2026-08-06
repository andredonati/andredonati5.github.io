<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import TypewriterIntro from '@/components/TypewriterIntro.vue'
import ClientLogoWall from '@/components/ClientLogoWall.vue'
import { capabilities } from '@/data/content'

const INTRO_FLAG = 'introPlayed'
const showIntro = ref(false)

onMounted(() => {
  if (!sessionStorage.getItem(INTRO_FLAG)) {
    showIntro.value = true
  }
})

function onIntroComplete() {
  sessionStorage.setItem(INTRO_FLAG, '1')
  showIntro.value = false
}

const featured = capabilities.slice(0, 3)
</script>

<template>
  <TypewriterIntro v-if="showIntro" @complete="onIntroComplete" />

  <div class="home-page">
    <section class="hero wrap">
      <h1 class="hero-heading">
        Engineer first. I build the systems — and the sites — that ship.
      </h1>
      <p class="hero-subtext">
        I've architected and shipped enterprise platforms solo, led Android development for
        Fortune 500 clients, and bring that same rigor to small businesses who need something
        built, fixed, or finished.
      </p>
      <div class="hero-ctas">
        <RouterLink to="/contact" class="btn btn-primary">Something to build or fix</RouterLink>
        <RouterLink to="/experience" class="btn btn-outline">Evaluating me professionally</RouterLink>
      </div>
    </section>

    <section class="wrap proof-strip">
      <p class="proof-line">
        <span class="proof-company">TBWA</span> — solo platform rebuild, 8 months against a
        12-month target
      </p>
      <p class="proof-line">
        <span class="proof-company">Credera</span> — Android lead for Fortune 500 clients
        (Mercedes-Benz, NRG Energy)
      </p>
    </section>

    <hr class="hr-warm wrap" />

    <section class="wrap about-preview">
      <span class="kicker">// 01 — who I am</span>
      <p>
        A software engineer first, whose applied specialty happens to include small-business web
        and technical work — not two identities, one engineer whose craft transfers directly.
      </p>
      <RouterLink to="/about" class="text-link">More about me →</RouterLink>
    </section>

    <section class="wrap capability-preview">
      <span class="kicker">// 02 — what I do</span>
      <ol class="capability-list">
        <li v-for="item in featured" :key="item.number" class="capability-entry">
          <span class="capability-number">{{ item.number }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </div>
        </li>
      </ol>
      <RouterLink to="/work" class="text-link">See the full list →</RouterLink>
    </section>

    <hr class="hr wrap" />

    <section class="wrap">
      <ClientLogoWall variant="light" />
    </section>

    <section class="wrap final-cta">
      <h2>Have something to build?</h2>
      <RouterLink to="/contact" class="btn btn-primary">Start a conversation</RouterLink>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  color: var(--ink);
}

.hero {
  padding: 5rem 1.5rem 3rem;
  max-width: 46rem;
  margin: 0 auto;
}

.hero-heading {
  font-size: clamp(2.1rem, 5vw, 3.25rem);
  margin-bottom: 1.25rem;
}

.hero-subtext {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--mono-accent);
  margin-bottom: 2.25rem;
  max-width: 42rem;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.proof-strip {
  max-width: 46rem;
  margin: 0 auto;
  padding: 0 1.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.proof-line {
  font-family: var(--font-mono);
  font-size: 0.92rem;
  color: var(--mono-accent);
}

.proof-company {
  color: var(--ink);
  font-weight: 500;
}

.about-preview,
.capability-preview {
  padding: 3.5rem 1.5rem;
  max-width: 46rem;
  margin: 0 auto;
}

.about-preview p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.capability-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.capability-entry {
  display: flex;
  gap: 1.25rem;
}

.capability-number {
  font-family: var(--font-mono);
  color: var(--indigo);
  font-size: 0.95rem;
  padding-top: 0.2rem;
  flex-shrink: 0;
}

.capability-entry h3 {
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
}

.capability-entry p {
  color: var(--mono-accent);
  line-height: 1.65;
}

.final-cta {
  text-align: center;
  padding: 4rem 1.5rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.final-cta h2 {
  font-size: 1.9rem;
}
</style>
