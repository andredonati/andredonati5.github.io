<template>
  <header class="header-wrapper">
    <div class="header-content">
      <!-- Mobile Hamburger -->
      <button class="menu-button" @click="menuOpen = true">&#9776;</button>

      <!-- Left Nav -->
      <nav class="nav-links desktop-only nav-left">
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/portfolio" class="nav-link">Portfolio</RouterLink>
      </nav>

      <!-- Logo / Home Link -->
      <RouterLink to="/" class="logo">Donati Designs</RouterLink>

      <!-- Right Nav -->
      <nav class="nav-links desktop-only nav-right">
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
  background-color: var(--vt-c-text-light-2);
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
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

/* Logo / Home link */
.logo {
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

/* Remove the margin pushes from left/right nav */
.nav-left,
.nav-right {
  margin: 0;
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
