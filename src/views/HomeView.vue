<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1 class="hero-heading">Design that works as hard as you do</h1>

        <p class="hero-subtext">
          For service-based businesses ready to stand out online and grow with confidence.
        </p>
        <RouterLink to="/contact" class="hero-button">Let’s Work Together</RouterLink>
      </div>
    </section>

    <!-- Decorative Divider Icon -->
    <div class="divider-icon">⁂</div>

    <!-- About Preview Section -->
    <section class="about-preview section-muted">
      <h2>Meet Andrea</h2>
      <p>
        A software engineer turned creative partner for small businesses. With experience leading
        development teams for Fortune 500 companies, Andrea now brings big-agency thinking to
        growing brands who want more than just a pretty website.
      </p>
      <RouterLink to="/about" class="link">More About Me →</RouterLink>
    </section>

    <!-- Gradient Divider Line -->
    <div class="gradient-break"></div>

    <!-- Featured Services Section -->
    <section class="featured-services">
      <h2>What I Offer</h2>
      <div class="services-grid">
        <div class="service-card">
          <img
            src="/src/assets/images/brand-strategy.jpeg"
            alt="Moodboard showing branding strategy concept"
          />
          <h3>Brand Strategy</h3>
          <p>
            Align your business mission, messaging, and visuals into a cohesive brand experience
            that stands out.
          </p>
          <RouterLink :to="{ path: '/services', hash: '#brand-strategy' }" class="link">
            Explore Brand Strategy →
          </RouterLink>
        </div>
        <div class="service-card">
          <img
            src="/src/assets/images/web-design.jpeg"
            alt="Modern website design on desktop and mobile devices"
          />
          <h3>Web Design</h3>
          <p>
            Strategic, custom web design focused on conversions, performance, and bringing your
            vision to life.
          </p>
          <RouterLink :to="{ path: '/services', hash: '#web-design' }" class="link">
            Explore Web Design →
          </RouterLink>
        </div>
        <div class="service-card">
          <img
            src="/src/assets/images/Donati Designs.png"
            alt="Donati Designs logo on brown background with laptop in view"
          />
          <h3>A La Carte</h3>
          <p>
            Need just one piece? Choose targeted services like SEO, analytics, or digital templates.
          </p>
          <RouterLink :to="{ path: '/services', hash: '#custom-services' }" class="link">
            Learn More →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Decorative Divider -->
    <div class="divider-icon">⁂</div>

    <!-- Final Call to Action -->
    <section class="final-cta section-muted">
      <h2>Let’s make something beautiful</h2>
      <p style="margin-bottom: 30px">
        Whether you’re launching something new or leveling up your online presence, I’d love to hear
        from you.
      </p>
      <RouterLink to="/contact" class="hero-button">Start Your Project</RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-page {
  background: linear-gradient(to left, #e0c3fc, #8ec5fc);
  color: var(--vt-c-black);
}

.hero {
  text-align: center;
  padding: 8rem 2rem 6rem;
  max-width: 800px;
  margin: 0 auto;
}
.hero-heading {
  font-family: 'Brasika', Garamond, serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--vt-c-indigo);
}
.hero-subtext {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.hero-button {
  background-color: var(--vt-c-indigo);
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}
.hero-button:hover {
  background-color: var(--vt-c-purple);
}

.about-preview,
.final-cta {
  text-align: center;
  padding: 5rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}
.about-preview h2,
.final-cta h2,
.featured-services h2 {
  font-family: 'Brasika', Garamond, serif;
  font-size: 2rem;
  color: var(--vt-c-indigo);
  margin-bottom: 1rem;
}
.link {
  display: inline-block;
  margin-top: 1rem;
  color: var(--vt-c-indigo);
  text-decoration: none;
  font-weight: 600;
}
.link:hover {
  color: var(--vt-c-purple);
}

.featured-services {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.service-card {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
}
.service-card:hover {
  transform: translateY(-8px);
}
.service-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.divider-icon {
  text-align: center;
  font-size: 2rem;
  color: var(--vt-c-purple);
  margin: 3rem 0;
}

.gradient-break {
  height: 20px;
  background: linear-gradient(to right, #e0c3fc, #8ec5fc);
  opacity: 0.4;
}

.section-muted {
  background: rgba(255, 255, 255, 0.1);
}
</style>
