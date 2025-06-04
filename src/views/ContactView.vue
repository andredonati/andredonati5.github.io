<template>
  <div class="app">
    <div class="contact">
      <div class="left">
        <div class="text-container">
          <VueWriter
            v-if="showWriter"
            :array="['Ready to get started?', 'Let\'s get in touch!']"
            :iterations="1"
            :repeat="false"
            :typeSpeed="100"
            :caret="cursor"
            @typed="handleTyped"
            class="vue-typer"
          />
          <div v-if="!showWriter" class="vue-typer">
            {{ finalText }}
          </div>
          <p v-if="showParagraph" class="fade-in">
            After you fill out the form below, we’ll review if we're the right studio to bring your
            project to life. If it feels aligned, we’ll hop on a call to learn more about your
            goals, problems, and how we can provide the most value to you and your business.
          </p>
        </div>
      </div>
      <div class="right" v-show="showParagraph" :class="{ 'slide-in': slideInActive }">
        <form action="https://formspree.io/f/manjwzpn" method="POST" class="contact-form">
          <input type="text" name="firstName" placeholder="First name" required />
          <input type="text" name="lastName" placeholder="Last name" required />
          <input type="email" name="email" placeholder="Email address" required />

          <select name="service" required>
            <option disabled selected value="">Select a service</option>
            <option value="web design">Web Design</option>
            <option value="branding">Brand Strategy</option>
            <option value="seo">SEO</option>
          </select>

          <textarea name="message" placeholder="Your message..." required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { VueWriter } from 'vue-writer'

export default {
  name: 'ContactView',
  components: {
    VueWriter,
  },
  data() {
    return {
      showWriter: true,
      showParagraph: false,
      typedCount: 0,
      slideInActive: false, // control sliding animation separately
    }
  },
  methods: {
    handleTyped(word) {
      this.typedCount += 1
      if (this.typedCount === 2) {
        this.showParagraph = true
        this.showWriter = false
        this.finalText = "Let's get in touch!"
        setTimeout(() => {
          this.slideInActive = true
        }, 50) // small delay (50ms)
      }
    },
  },
}
</script>

<style>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
}
.left {
  flex: 1;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-container {
  max-width: 700px;
  text-align: center;
}

.text-container .vue-typer,
.text-container p {
  margin: 0 auto;
  line-height: 1.6;
  color: var(--vt-c-purple);
}

.right {
  flex: 1;
  width: 100%;
  max-width: 600px;
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  transform: translateX(100%);
  opacity: 0;
  transition:
    transform 2.5s ease-in-out,
    opacity 1s ease-in-out;
  pointer-events: none;
  position: relative;
}

.right.slide-in {
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
}
.vue-typer {
  font-family: 'Brasika', Garamond, serif;
  font-size: 4rem;
  color: var(--vt-c-purple);
}
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}
@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
input,
select,
textarea {
  padding: 14px 18px;
  font-size: 1rem;
  border-radius: 30px; /* bubble shape */
  border: none;
  box-shadow: 0 2px 6px rgba(55, 39, 114, 0.3);
  background-color: var(--vt-c-purple);
  outline: none;
  transition: box-shadow 0.2s ease;
  font-family: Garamond, serif;
  color: white;
  width: 400px;
}

input:focus,
select:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(55, 39, 114, 0.6); /* soft focus ring */
}
input::placeholder,
select::placeholder,
textarea::placeholder {
  color: white;
  opacity: 1;
}

textarea {
  border-radius: 20px; /* slightly less rounded for text area */
  resize: none;
  min-height: 120px;
}

button {
  padding: 12px 24px;
  border-radius: 30px;
  background-color: var(--vt-c-text-light-2);
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-shadow: 0 2px 6px rgba(55, 39, 114, 0.3);
}

button:hover {
  background-color: var(--vt-c-purple);
}

.contact {
  display: flex;
  flex-wrap: wrap;
  min-height: 50vh;
  padding: 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  overflow-x: hidden; /* prevent horizontal scroll */
  /* background-color: var(--vt-c-text-light-2); */
}
@media (max-width: 768px) {
  .contact {
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .left,
  .right {
    min-width: 100%;
    flex: 1 1 100%;
    justify-content: center;
  }

  .contact {
    flex-direction: column;
  }

  .contact-form {
    padding-left: 0;
    padding: 20px;
  }
  .text-container {
    max-width: 100%;
    padding: 0 1rem;
  }
}

/* Fade-in animation for the paragraph */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 0.5s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
