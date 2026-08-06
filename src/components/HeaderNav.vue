<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="header-wrapper">
    <div class="header-content wrap">
      <RouterLink to="/" class="wordmark" @click="closeMenu">
        <span class="wordmark-primary">Andrea Donati</span>
        <span class="wordmark-sub">Donati Designs</span>
      </RouterLink>

      <nav class="nav-links desktop-only" aria-label="Primary">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
          {{ link.label }}
        </RouterLink>
      </nav>

      <button
        class="menu-button"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
        @click="menuOpen = true"
      >
        &#9776;
      </button>
    </div>

    <div class="mobile-menu" :class="{ open: menuOpen }" :inert="!menuOpen">
      <button class="close-button" aria-label="Close navigation menu" @click="closeMenu">
        &times;
      </button>
      <nav class="mobile-nav" aria-label="Mobile" :aria-hidden="!menuOpen">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header-wrapper {
  background-color: var(--paper);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 900;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

/* A hairline appears once there's content to scroll past — approximated with a
   persistent low-opacity line so it reads consistently without JS scroll tracking. */
.header-wrapper::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid var(--line);
}

.header-content {
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.wordmark {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  text-decoration: none;
  color: var(--ink);
}

.wordmark-primary {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: -0.01em;
}

.wordmark-sub {
  font-family: var(--font-brasika);
  font-size: 0.8rem;
  color: var(--mono-accent);
  margin-top: 0.15rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--ink);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.92rem;
  position: relative;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  border-color: var(--warm-accent);
}

.nav-link.router-link-exact-active {
  border-color: var(--indigo);
}

.menu-button {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: var(--ink);
  cursor: pointer;
}

.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--paper);
  padding: 2rem 1.5rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 950;
  border-radius: var(--radius-warm) 0 0 var(--radius-warm);
}

.mobile-menu.open {
  transform: translateX(0);
}

.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--ink);
  cursor: pointer;
  margin-bottom: 2rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.mobile-nav .nav-link {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  border: none;
}

.mobile-nav .nav-link.router-link-exact-active {
  color: var(--indigo);
}

@media (max-width: 780px) {
  .nav-links {
    display: none;
  }

  .menu-button {
    display: block;
  }
}
</style>
