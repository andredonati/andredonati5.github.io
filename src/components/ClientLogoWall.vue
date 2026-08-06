<script setup lang="ts">
import { clients } from '@/data/content'

withDefaults(
  defineProps<{
    /** 'full' shows the per-client annotation line (Work page); 'light' is names only (Home). */
    variant?: 'full' | 'light'
  }>(),
  { variant: 'full' },
)
</script>

<template>
  <div class="logo-wall">
    <span class="kicker">// shipped for</span>
    <ul class="strip">
      <li
        v-for="client in clients"
        :key="client.name"
        class="entry"
        :style="{
          transform: `rotate(${client.rotation}deg) translateY(${client.offset}px)`,
        }"
      >
        <span class="name">{{ client.name }}</span>
        <span v-if="variant === 'full'" class="annotation">{{ client.annotation }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo-wall {
  padding: 2rem 0;
}

.strip {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 3.5rem;
  align-items: flex-start;
}

.entry {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--ink);
}

.annotation {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--mono-accent);
}

@media (max-width: 640px) {
  .strip {
    gap: 2rem;
  }
  .entry {
    transform: none !important;
  }
  .name {
    font-size: 1.25rem;
  }
}
</style>
