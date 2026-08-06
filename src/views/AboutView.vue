<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about-page wrap">
    <span class="kicker">// 02 — how it started</span>

    <div class="about-header">
      <img
        src="@/assets/images/headshot.JPG"
        alt="Andrea Donati"
        class="headshot"
        width="144"
        height="176"
      />
      <h1>About</h1>
    </div>

    <div class="narrative">
      <p>
        I'm a software engineer. That's the whole starting point — not "engineer who also does
        design," not two identities stapled together, just one person whose applied specialty
        happens to include small-business web and technical work.
      </p>
      <p>
        My career has been built on real, enterprise-scale engineering: architecting and shipping
        a full platform rebuild solo at TBWA — Next.js, React, Node.js, AWS infrastructure, and
        the architecture decisions that let it scale across two platforms — in 8 months against a
        12-month target. Before that, I led Android development at Credera for Fortune 500
        clients, running a team of 4 to 100% on-time delivery while shipping directly on products
        used by millions.
      </p>
      <p>
        The small-business work grew directly out of that, not alongside it. The same discipline
        that goes into architecting a platform for a Fortune 500 client (clear requirements,
        honest scoping, code that holds up after I've moved on) is exactly what a small business
        needs from whoever builds or fixes their site or tools. I do this work because I enjoy the
        craft, and because the same skills apply whether the client is a Fortune 500 enterprise or
        a five-person shop down the street.
      </p>

      <blockquote class="pull-quote">
        "One of my values is how I'm great at transforming difficult tech concepts into real
        world language, and I'm really personable. My soft skills are crucial to my value add as
        an engineer."
      </blockquote>

      <p>
        Translating hard technical work into language people can actually act on, and being
        straightforward and easy to work with while I do it, isn't a soft aside — it's part of how
        I operate as an engineer, whether that's explaining a scoping tradeoff to a client who
        isn't technical, or walking a hiring manager through an architecture decision.
      </p>
      <p>
        Whether the project is enterprise-scale or a single small business's site, the same
        person shows up: someone who treats the problem as worth solving properly, start to
        finish.
      </p>
    </div>

    <RouterLink to="/work" class="text-link">See what I take on →</RouterLink>
  </div>
</template>

<style scoped>
.about-page {
  padding: 3rem 1.5rem 5rem;
}

.about-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.about-header h1 {
  font-size: clamp(2rem, 4vw, 2.75rem);
}

.headshot {
  width: 9rem;
  height: 11rem;
  object-fit: cover;
  border-radius: var(--radius-warm);
}

.narrative {
  max-width: 65ch;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.08rem;
  line-height: 1.75;
  margin-bottom: 2.5rem;
}

.pull-quote {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  line-height: 1.4;
  color: var(--ink);
  border-left: 3px solid var(--indigo);
  padding: 0.25rem 0 0.25rem 1.5rem;
  margin: 1rem 0;
}
</style>
