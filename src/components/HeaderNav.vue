<template>
  <header class="header-wrapper">
    <div class="header-content">
      <!-- Mobile Hamburger -->
      <button class="menu-button" @click="menuOpen = true">&#9776;</button>

      <!-- Logo/Title -->
      <h1 class="logo">Donati Designs</h1>

      <!-- Desktop Navigation -->
      <nav class="nav-links desktop-only">
        <template v-for="link in links" :key="link.path">
          <RouterLink :to="link.path" class="nav-link">{{ link.label }}</RouterLink>
        </template>
      </nav>
    </div>

    <!-- Slide-in Mobile Menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <button class="close-button" @click="menuOpen = false">&times;</button>
      <nav class="mobile-nav">
        <template v-for="link in links" :key="link.path">
          <RouterLink :to="link.path" class="nav-link" @click="menuOpen = false">
            {{ link.label }}
          </RouterLink>
        </template>
      </nav>
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
      links: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: 'portfolio', label: 'Portfolio' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Work with Me' },
      ],
    }
  },
}
</script>

<style scoped>
.header-wrapper {
  background-color: var(--vt-c-text-light-2);
  color: white;
  width: 100%;
  height: max-content;
  padding-bottom: 10px;
  position: relative;
}

.header-content {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 20px;
}

/* Desktop nav */
.nav-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #93c5fd;
}

/* Mobile menu button */
.menu-button {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  display: none;
}

/* Show only on mobile */
@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .desktop-only {
    display: none;
  }

  .logo {
    margin-left: 40px; /* room for menu button */
  }
}

/* Slide-in Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: -300px;
  width: 250px;
  height: 100%;
  background-color: var(--vt-c-text-light-2);
  color: white;
  padding: 20px;
  transition: left 0.3s ease;
  z-index: 1000;
}

.mobile-menu.open {
  left: 0;
}

.close-button {
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
