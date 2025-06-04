<!-- Updated Services.vue -->
<template>
  <div class="services">
    <section class="hero-image">
      <div class="hero-content">
        <h1 class="hero-heading">
          your business is <span class="emphasized-web">great</span>, <br />
          your <span class="emphasized-word">website</span> should
          <span class="emphasized-word">prove</span> it
        </h1>
        <p class="hero-body">
          I design strategic, conversion-focused websites for service-based small businesses ready
          to show up online with confidence. Through custom design, SEO, and digital strategy, I
          help turn your site into your hardest-working asset.
        </p>
      </div>
    </section>
  </div>

  <!-- Wave Divider 1 -->
  <div class="section-divider double-wave">
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient id="fade-to-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--vt-c-indigo)" />
          <stop offset="100%" stop-color="white" stop-opacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M0,40 C360,160 1080,0 1440,100 L1440,200 L0,200 Z"
        fill="var(--vt-c-purple)"
        opacity="0.3"
      />
      <path d="M0,60 C480,180 960,20 1440,120 L1440,200 L0,200 Z" fill="url(#fade-to-bg)" />
    </svg>
  </div>

  <!-- Brand Strategy Section -->
  <section class="service-block">
    <div class="service-wrapper">
      <div class="service-image">
        <img src="/src/assets/images/brand-strategy.jpeg" alt="Brand strategy" />
      </div>
      <div class="service-text">
        <div class="service-header">
          <span class="service-number">No. 1</span>
          <h2 class="service-title">Brand Strategy</h2>
        </div>
        <p class="service-description">
          A strong brand strategy builds a clear, consistent identity that sets you apart and
          connects with your audience. It defines your mission, values, and voice—aligning visuals
          and messaging to create trust, recognition, and long-term growth.
        </p>
        <div class="accordion" @click="toggleAccordion">
          <div class="accordion-header">
            <span>{{ isOpen ? '–' : '+' }}</span>
            <h3>What’s Included</h3>
          </div>
          <transition name="accordion">
            <div v-show="isOpen" class="accordion-content">
              <p class="accordion-intro">Depending on the package, the deliverables can include:</p>
              <ul class="accordion-list">
                <li>Comprehensive Brand Strategy + Positioning</li>
                <li>Competitor Analysis</li>
                <li>Strategy-Based Brand Vision + Keywords</li>
                <li>Mood Board</li>
                <li><strong>1</strong> Primary Logo</li>
                <li><strong>1</strong> Secondary Logo</li>
                <li>Color Palette</li>
                <li>Typography Selections</li>
                <li>In-Depth Creative Direction Concepts + Guide</li>
                <li><strong>2</strong> Rounds of Edits</li>
                <li>Onboarding Kit with Questionnaire</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Between A La Carte and the next section -->
    <div class="section-divider curve-up">
      <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fade-curve" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--vt-c-indigo)" />
            <stop offset="100%" stop-color="var(--color-background)" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 C200,0 1240,200 1440,100 L1440,150 L0,150 Z"
          fill="var(--vt-c-text-light-2)"
          opacity="0.2"
        />
        <path d="M0,120 C200,20 1240,180 1440,120 L1440,150 L0,150 Z" fill="url(#fade-curve)" />
      </svg>
    </div>
    <!-- Web Design Section -->
    <div class="service-wrapper flipped">
      <div class="service-text">
        <div class="service-header">
          <span class="service-number">No. 2</span>
          <h2 class="service-title">Web Design</h2>
        </div>
        <p class="service-description">
          Custom web design tailored to your brand and business goals. I focus on creating sites
          that are not only visually compelling, but optimized for conversions, mobile performance,
          and growth – so your site works as hard as you do.
        </p>
        <div class="accordion" @click="toggleAccordion2">
          <div class="accordion-header">
            <span>{{ isOpen2 ? '–' : '+' }}</span>
            <h3>What’s Included</h3>
          </div>
          <transition name="accordion">
            <div v-show="isOpen2" class="accordion-content">
              <p class="accordion-intro">Depending on the scope, your site may include:</p>
              <ul class="accordion-list">
                <li>Responsive Custom Website (1–5+ pages)</li>
                <li>Conversion-Focused Layout & Structure</li>
                <li>Mobile & SEO Optimization</li>
                <li>Social Media Integration</li>
                <li>SEO Optimization</li>
                <li>1:1 Website Training & Support</li>
                <li>Launch Checklist</li>
                <li><strong>2</strong> Rounds of Edits</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
      <div class="service-image">
        <img src="/src/assets/images/web-design.jpeg" alt="Web design" />
      </div>
    </div>

    <div class="section-divider angled-wave">
      <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fade-angle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--vt-c-indigo)" />
            <stop offset="100%" stop-color="var(--color-background)" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0,20 C150,80 1290,80 1440,20 L1440,150 L0,150 Z"
          fill="var(--vt-c-purple)"
          opacity="0.3"
        />
        <path d="M0,40 C200,100 1240,100 1440,40 L1440,150 L0,150 Z" fill="url(#fade-angle)" />
      </svg>
    </div>

    <!-- A La Carte Section -->
    <div class="service-wrapper">
      <div class="service-image">
        <img src="/src/assets/images/Donati Designs.png" alt="A La Carte Services" />
      </div>
      <div class="service-text">
        <div class="service-header">
          <span class="service-number">No. 3</span>
          <h2 class="service-title">A La Carte</h2>
        </div>
        <p class="service-description">
          Need just one piece of the puzzle? My à la carte services are perfect for businesses
          looking to elevate a specific touchpoint – without committing to a full package. Choose
          exactly what you need, when you need it.
        </p>
        <div class="accordion" @click="toggleAccordion3">
          <div class="accordion-header">
            <span>{{ isOpen3 ? '–' : '+' }}</span>
            <h3>What’s Included</h3>
          </div>
          <transition name="accordion">
            <div v-show="isOpen3" class="accordion-content">
              <p class="accordion-intro">A La Carte options may include:</p>
              <ul class="accordion-list">
                <li>One-Pager Website</li>
                <li>Sales or Landing Page</li>
                <li>Website Audit + Feedback Report</li>
                <li>CMS or CRM implementations</li>
                <li>Analytics</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isOpen2 = ref(false)
const isOpen3 = ref(false)

function toggleAccordion() {
  isOpen.value = !isOpen.value
}
function toggleAccordion2() {
  isOpen2.value = !isOpen2.value
}
function toggleAccordion3() {
  isOpen3.value = !isOpen3.value
}
</script>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.section-divider {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
  line-height: 0;
  background: transparent;
}

.section-divider.double-wave {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background: transparent;
  margin-top: -5px; /* helps blend if needed */
}

.double-wave svg {
  display: block;
  width: 100%;
  height: 200px;
}
.section-divider {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background: transparent;
  margin-top: -1px;
}

.angled-wave svg,
.curve-up svg {
  display: block;
  width: 100%;
  height: 150px;
}

.hero-image {
  width: 100%;
  height: 80vh;
  /* background-color: var(--vt-c-text-light-2); muted olive green */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.hero-content {
  text-align: center;
  color: var(--vt-c-text-light-1);
  padding: 2.5rem;
  border-radius: 12px;
  max-width: 800px;
}

.hero-heading {
  font-size: 2.75rem;
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: 'Brasika', Garamond, serif;
  color: black; /* All text uses this except highlighted words */
}

.emphasized-word {
  font-weight: 700;
  font-style: italic;
  color: var(--vt-c-indigo); /* deep purple highlight */
}
.emphasized-web {
  font-weight: 700;
  font-style: italic;
  color: var(--vt-c-text-light-1); /* deep purple highlight */
}

.hero-body {
  font-size: 1.2rem;
  line-height: 1.7;
  font-family: Garamond, serif;
  color: black;
  max-width: 60ch;
  margin: 0 auto;
}
/* Service Section Styling */
.service-block {
  /* padding: 100px 20px; */
  background-color: var(--color-background);
}

.service-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.service-image {
  flex: 1 1 50%;
  max-width: 500px;
}

.service-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.service-text {
  flex: 1 1 50%;
  font-family: Garamond, serif;
  color: var(--vt-c-black);
}

.service-title {
  font-family: 'Brasika', Garamond, serif;
  font-size: 2rem;
  color: var(--vt-c-indigo);
  margin-bottom: 1rem; /* was 3rem – now tighter */
}

.service-description {
  font-size: 1.1rem;
  line-height: 2;
  color: var(--vt-c-black-soft);
  margin-bottom: 1.5rem;
}

.service-link {
  font-weight: 600;
  color: var(--vt-c-indigo);
  text-decoration: none;
  border-bottom: 1px solid var(--vt-c-indigo);
  padding-bottom: 2px;
  transition: all 0.3s ease;
}
.service-header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  /* Removed: top: -80px; */
}

/* No. 1 styling */
.service-number {
  position: absolute;
  top: -40px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vt-c-purple);
  font-family: Garamond, serif;
  letter-spacing: 1px;
}

/* Adjust for smaller screens */
@media (max-width: 768px) {
  .service-number {
    position: static;
    margin-bottom: 0.5rem;
  }
}

.service-link:hover {
  color: var(--vt-c-purple);
  border-color: var(--vt-c-purple);
}

.accordion {
  margin-top: 2rem;
  cursor: pointer;
  user-select: none;
}

.accordion-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Garamond, serif;
  color: var(--vt-c-indigo);
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.accordion-header span {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
}

.accordion-content {
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style-type: disc;
  color: var(--vt-c-black-soft);
  line-height: 1.8;
  font-size: 1rem;
}
.accordion-enter-active,
.accordion-leave-active {
  transition:
    max-height 0.5s ease-out,
    opacity 0.4s ease-out;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
.accordion-intro {
  margin-bottom: 1rem;
  font-style: italic;
  color: var(--vt-c-black-soft);
}

.accordion-list {
  padding-left: 1.5rem;
  list-style-type: disc;
  color: var(--vt-c-black-soft);
  line-height: 2;
  font-size: 1rem;
}

.accordion-list li strong {
  color: var(--vt-c-indigo);
  font-weight: 600;
}
</style>
