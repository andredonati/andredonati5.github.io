<template>
  <section class="hero-section">
    <div class="hero-wrapper">
      <!-- Left Image -->
      <div class="hero-image">
        <img src="/src/assets/images/headshot.JPG" alt="Profile image" />
      </div>

      <!-- Right Text + Line -->
      <div class="hero-text-wrapper">
        <!-- Vertical Line -->
        <div class="vertical-line"></div>

        <!-- Text Content -->
        <div class="hero-text">
          <p class="hero-intro">Hi there</p>
          <h1 class="hero-name">I'm Andrea</h1>
          <p class="hero-bio">
            A <span class="highlight-bold">software engineer</span> who builds
            <span class="highlight-italic">functional</span> (and
            <span class="highlight-italic">beautiful</span>) digital experiences.<br />
            My journey started in <span class="highlight-color">product</span>, but I shifted to
            <span class="highlight-bold">consulting</span> to work more directly with clients - and
            I’ve never looked back.<br />
            I’ve led development teams for
            <span class="highlight-color">Fortune 500 companies</span>, but my true passion lies in
            partnering with
            <span class="highlight-bold highlight-color">small and mid-sized businesses</span
            >.<br />
            Are you ready to bring your vision to life through
            <span class="highlight-italic">thoughtful, strategic technology</span>.
          </p>
          <RouterLink to="/contact" class="hero-button">Work with Me</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  padding: 100px 20px;
  background-color: var(--vt-c-text-light-2);
}

.hero-wrapper {
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 60px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.hero-image {
  flex: 1;
  max-width: 600px;
}

.hero-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Wrap line and text side by side */
.hero-text-wrapper {
  display: flex;
  align-items: stretch; /* ensures line stretches with content */
  flex: 1;
  max-width: 500px;
  gap: 30px;
}

/* Line beside text block */
.vertical-line {
  width: 2px;
  background-color: #111;
  flex-shrink: 0;
}

/* Actual text block */
.hero-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-intro {
  font-size: 20px;
  font-stretch: expanded;
  color: #555;
  margin-bottom: 10px;
}

.hero-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #111;
}

.hero-bio {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
}

.hero-button {
  padding: 10px 20px;
  background-color: #111;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.hero-button:hover {
  background-color: #333;
}

/* Highlight styles */
.highlight-bold {
  font-weight: 700;
  color: #2a9d8f; /* teal accent */
}

.highlight-italic {
  font-style: italic;
  color: #264653; /* dark blue accent */
}

.highlight-color {
  color: #e76f51; /* warm coral accent */
}
</style>
