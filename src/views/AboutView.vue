<template>
  <main class="main-section">
    <div class="left-image">
      <img src="/src/assets/images/headshot.JPG" alt="Left Image" />
    </div>

    <div class="center-text">
      <p>Where small businesses grow into <span class="bold-italic">bold</span>, digital brands</p>
    </div>
  </main>
</template>

<style scoped>
.main-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 2rem;
  gap: 5rem;
  text-align: center;
  color: var(--vt-c-text-light-1);
}

/* Left Image */
.left-image img {
  width: 550px; /* enough width to hold overlapped images */
  height: auto;
  border-radius: 8px;
}

/* Center Text */
.center-text {
  max-width: 400px;
  font-size: 2rem;
  line-height: 1.3;
}

.bold-italic {
  font-weight: bold;
  font-style: italic;
}

/* Right Images container - relative to allow overlay */
.right-images {
  position: relative;
  width: 320px; /* enough width to hold overlapped images */
  height: 200px; /* adjust based on image sizes */
}

/* Individual right images */
.right-image {
  position: absolute;
  max-width: 180px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* First image on right */
.right-image.first {
  top: 0;
  left: 0;
  z-index: 2;
}

/* Second image overlaps and shifts to right and down */
.right-image.second {
  top: 40px;
  left: 100px;
  z-index: 1;
  opacity: 0.9;
}
</style>
