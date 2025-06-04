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
            :eraseSpeed="20"
            @typed="handleTyped"
            class="vue-typer"
          />
          <div v-if="!showWriter" class="vue-typer">
            {{ finalText }}
          </div>
          <p v-if="showParagraph" class="fade-in">
            After you fill out the form below, I’ll review if I am the right person to bring your
            project to life. If it feels aligned, we’ll hop on a call to learn more about your
            goals, problems, and how we can provide the most value to you and your business.
          </p>
        </div>
      </div>
      <div class="right" v-show="showParagraph" :class="{ 'slide-in': slideInActive }">
        <div class="right" v-show="showParagraph" :class="{ 'slide-in': slideInActive }">
          <div class="contact-form">
            <div v-if="formSubmitted">
              <h2>Thank you!</h2>
              <p>Your message has been sent. I'll be in touch soon.</p>
            </div>

            <form
              v-else
              action="https://formspree.io/f/manjwzpn?redirect=/contact?submitted=true"
              method="POST"
            >
              <input type="text" name="firstName" placeholder="First name" required />
              <input type="text" name="lastName" placeholder="Last name" required />
              <input type="email" name="email" placeholder="Email address" required />

              <select name="service" required>
                <option disabled selected value="">Select a service</option>
                <option value="web design">Web Design</option>
                <option value="branding">Brand Strategy</option>
                <option value="seo">A La Carte</option>
              </select>

              <textarea name="message" placeholder="Your message..." required></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueWriter } from 'vue-writer'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const formSubmitted = ref(false)

onMounted(() => {
  if (route.query.submitted === 'true') {
    formSubmitted.value = true
  }
})
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
      slideInActive: false,
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
        }, 50)
      }
    },
  },
}
</script>

<style scoped>
.contact {
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #e0c3fc, #8ec5fc);
  min-height: 600px;
}

.left,
.right {
  flex: 1 1 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-container {
  max-width: 700px;
  text-align: center;
  padding: 0 1rem;
}

.vue-typer {
  font-family: 'Brasika', Garamond, serif;
  font-size: 3rem;
  color: var(--vt-c-purple);
  margin-bottom: 1rem;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 0.5s;
  font-family: Garamond, serif;
  font-size: 1.1rem;
  color: var(--vt-c-black-soft);
  line-height: 1.8;
  max-width: 60ch;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

input,
select,
textarea {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-family: Garamond, serif;
  width: 100%;
  transition: border-color 0.3s ease;
  margin-bottom: 10px;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--vt-c-purple);
  outline: none;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  background: var(--vt-c-indigo);
  color: white;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Garamond, serif;
}

button:hover {
  background: var(--vt-c-purple);
}

.right {
  opacity: 0;
  transform: translateX(80px);
  transition: all 1.5s ease-in-out;
}

.right.slide-in {
  opacity: 1;
  transform: translateX(0);
}

.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  49% {
    background-color: black;
  }
  50%,
  100% {
    background-color: transparent;
  }
}

@media (max-width: 768px) {
  .contact {
    flex-direction: column;
    padding: 2rem 1rem;
  }
  .contact-form {
    padding: 1.5rem;
  }
  .vue-typer {
    font-size: 2.25rem;
  }
}
</style>
