<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({ name: 'SiteFooter' })

const links = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <footer class="footer-wrapper">
    <div class="wrap footer-content">
      <div class="footer-top">
        <div>
          <p class="footer-name">Andrea Donati</p>
          <p class="footer-sub">Small-business web &amp; technical work under Donati Designs</p>
        </div>
        <nav class="footer-links">
          <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="footer-link">
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>

      <hr class="hr" />

      <div class="footer-bottom">
        <p class="footer-text">© {{ new Date().getFullYear() }} Andrea Donati.</p>
        <p class="footer-contact">andydonati55@gmail.com</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  background: var(--ink);
  color: var(--paper);
  padding: 3rem 0 2rem;
}

.footer-content .hr {
  border-top-color: rgba(250, 249, 246, 0.16);
  margin: 2rem 0 1.5rem;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
}

.footer-sub {
  font-family: var(--font-brasika);
  font-size: 0.9rem;
  color: var(--paper-mute);
  margin-top: 0.35rem;
  opacity: 0.8;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-start;
}

.footer-link {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--paper);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.footer-link:hover,
.footer-link:focus-visible {
  border-color: var(--warm-accent);
  color: var(--warm-accent);
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--paper-mute);
  opacity: 0.75;
}
</style>
