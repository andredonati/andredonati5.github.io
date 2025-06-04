<template>
  <footer class="footer-wrapper">
    <!-- Decorative Top Wave -->
    <div class="footer-wave">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footer-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#8ec5fc" stop-opacity="1" />
            <stop offset="100%" stop-color="var(--vt-c-indigo)" />
          </linearGradient>
        </defs>
        <path d="M0,0 C480,80 960,20 1440,60 L1440,100 L0,100 Z" fill="url(#footer-fade)" />
      </svg>
    </div>

    <!-- Footer Content -->
    <div class="footer-content">
      <p class="footer-text">
        © {{ new Date().getFullYear() }} Donati Designs. All rights reserved.
      </p>
      <div class="footer-links">
        <RouterLink to="/about" class="footer-link">About</RouterLink>
        <RouterLink to="/services" class="footer-link">Services</RouterLink>
        <RouterLink to="/contact" class="footer-link">Work with Me</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer-wrapper {
  background-color: var(--vt-c-indigo);
  color: white;
  position: relative;
  text-align: center;
  padding-top: 0;
}

.footer-wave svg {
  display: block;
  width: 100%;
  height: 100px;
  margin-bottom: -1px;
}

.footer-content {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-text {
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.75;
  text-decoration: underline;
}
</style>
