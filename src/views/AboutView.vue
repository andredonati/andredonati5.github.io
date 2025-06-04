<template>
  <section class="hero-section">
    <div class="hero-wrapper">
      <!-- Left Image -->
      <div class="hero-image">
        <img src="/src/assets/images/headshot.JPG" alt="Profile image" />
      </div>

      <!-- Right Text + Line -->
      <div class="hero-text-wrapper">
        <div class="vertical-line"></div>

        <!-- Text Content -->
        <div class="hero-text">
          <p class="hero-intro">Hi there</p>
          <h1 class="hero-name">I'm Andrea</h1>
          <p class="hero-bio">
            A software engineer who builds
            <span class="highlight-italic">functional</span> and
            <span class="highlight-italic">beautiful</span> digital experiences.<br />
            My journey started in product, but I shifted to consulting to work more directly with
            clients—and I’ve never looked back.<br />
            I’ve led development teams for Fortune 500 companies, but my true passion lies in
            partnering with
            <span class="highlight-bold highlight-color">small and mid-sized businesses</span
            >.<br />
            Are you ready to bring your vision to life through
            <span class="highlight-italic">thoughtful, strategic technology</span>?
          </p>
          <RouterLink to="/contact" class="hero-button">Work with Me</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(to right, #e0c3fc, #8ec5fc); /* soft purple to lavender blue */
  padding: 80px 20px;
  display: flex;
  justify-content: center;
}

.hero-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  gap: 60px;
  align-items: center;
  padding: 0 20px;
}

.hero-image {
  flex: 1 1 400px;
  max-width: 500px;
}

.hero-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-text-wrapper {
  display: flex;
  flex: 1 1 400px;
  align-items: flex-start;
  gap: 30px;
}

.vertical-line {
  width: 2px;
  background: linear-gradient(to bottom, var(--vt-c-indigo), var(--vt-c-purple));
  flex-shrink: 0;
  height: 100%;
  opacity: 0.6;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Garamond, serif;
  color: var(--vt-c-black);
}

.hero-intro {
  font-size: 1rem;
  color: var(--vt-c-indigo);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.hero-name {
  font-family: 'Brasika', Garamond, serif;
  font-size: 2.5rem;
  color: var(--vt-c-purple);
  margin-bottom: 1rem;
}

.hero-bio {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 60ch;
  color: var(--vt-c-black-soft);
}

.hero-button {
  background: var(--vt-c-indigo);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.hero-button:hover {
  background: var(--vt-c-purple);
}

.highlight-bold {
  font-weight: 700;
  color: var(--vt-c-purple);
}

.highlight-italic {
  font-style: italic;
  font-weight: 700;
  color: var(--vt-c-indigo);
}

@media (max-width: 768px) {
  .hero-wrapper {
    flex-direction: column;
    padding: 0 16px;
  }

  .hero-text-wrapper {
    flex-direction: column;
    gap: 20px;
  }

  .vertical-line {
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, var(--vt-c-indigo), var(--vt-c-purple));
  }

  .hero-name {
    font-size: 2rem;
  }

  .hero-bio {
    font-size: 1rem;
  }
}
</style>
