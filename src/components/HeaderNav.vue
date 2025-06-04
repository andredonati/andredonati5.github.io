<template>
  <header class="header-wrapper">
    <div class="header-content">
      <!-- Mobile Hamburger -->
      <button class="menu-button" @click="menuOpen = true">&#9776;</button>

      <!-- Centered Logo -->
      <RouterLink to="/" class="logo">Donati Designs</RouterLink>

      <!-- Desktop Nav: All links grouped -->
      <nav class="nav-links desktop-only">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/services" class="nav-link">Services</RouterLink>
        <RouterLink to="/contact" class="nav-link">Work with Me</RouterLink>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <button class="close-button" @click="menuOpen = false">&times;</button>
      <nav class="mobile-nav">
        <RouterLink to="/about" class="nav-link" @click="menuOpen = false">About</RouterLink>
        <RouterLink to="/portfolio" class="nav-link" @click="menuOpen = false"
          >Portfolio</RouterLink
        >
        <RouterLink to="/services" class="nav-link" @click="menuOpen = false">Services</RouterLink>
        <RouterLink to="/contact" class="nav-link" @click="menuOpen = false"
          >Work with Me</RouterLink
        >
      </nav>
    </div>

    <!-- Wave Divider -->
    <div class="header-wave">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="header-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--vt-c-indigo)" />
            <stop offset="100%" stop-color="#8ec5fc" stop-opacity="0.9" />
          </linearGradient>
        </defs>
        <path d="M0,40 C480,100 960,0 1440,60 L1440,100 L0,100 Z" fill="url(#header-fade)" />
      </svg>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'HeaderNav',
  data() {
    return {
      menuOpen: false,
    }
  },
}
</script>

<style scoped>
.header-wrapper {
  background-color: var(--vt-c-indigo);
  width: 100%;
  position: fixed;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 999;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-family: 'Brasika', serif;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--vt-c-white);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  text-underline-offset: 8px; /* adjust value as needed */
  text-decoration: underline;
}

.menu-button {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  left: 1rem;
  top: 1rem;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 250px;
  height: 100%;
  background-color: var(--vt-c-indigo);
  color: white;
  padding: 2rem 1.5rem;
  transition: left 0.3s ease;
  z-index: 1000;
}

.mobile-menu.open {
  left: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .menu-button {
    display: block;
  }

  .logo {
    margin: 0 auto;
  }
}

.header-wave {
  width: 100%;
  line-height: 0;
  position: relative;
  margin-top: -5px;
}

.header-wave svg {
  display: block;
  width: 100%;
  height: 100px;
}
</style>
