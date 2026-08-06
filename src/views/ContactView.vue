<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

type Intent = 'project' | 'professional'

const intent = ref<Intent>('project')
const formSubmitted = ref(false)
const emailTouched = ref(false)
const email = ref('')

const route = useRoute()

onMounted(() => {
  if (route.query.submitted === 'true') {
    formSubmitted.value = true
  }
})

const emailLooksValid = computed(() => !email.value || /\S+@\S+\.\S+/.test(email.value))
</script>

<template>
  <div class="contact-page wrap">
    <span class="kicker">// 04 — get in touch</span>
    <h1>Contact</h1>
    <p class="qualifying-line">
      After you fill out the form below, I'll review if I am the right person to bring your
      project to life. If it feels aligned, we'll hop on a call to talk through the technical
      problem, the timeline, and whether I'm the right fit to take it on.
    </p>

    <div v-if="formSubmitted" class="confirmation">
      <h2>Thank you!</h2>
      <p>Your message has been sent. I'll be in touch soon.</p>
    </div>

    <form
      v-else
      class="contact-form"
      action="https://formspree.io/f/manjwzpn?redirect=/contact?submitted=true"
      method="POST"
    >
      <div class="toggle" role="tablist" aria-label="What are you reaching out about?">
        <button
          type="button"
          role="tab"
          :aria-selected="intent === 'project'"
          class="toggle-option"
          :class="{ active: intent === 'project' }"
          @click="intent = 'project'"
        >
          Project inquiry
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="intent === 'professional'"
          class="toggle-option"
          :class="{ active: intent === 'professional' }"
          @click="intent = 'professional'"
        >
          Professional / career contact
        </button>
      </div>
      <input type="hidden" name="intent" :value="intent" />

      <div class="field-row">
        <div class="field">
          <label for="firstName">First name</label>
          <input id="firstName" type="text" name="firstName" required />
        </div>
        <div class="field">
          <label for="lastName">Last name</label>
          <input id="lastName" type="text" name="lastName" required />
        </div>
      </div>

      <div class="field">
        <label for="email">Email address</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          required
          @blur="emailTouched = true"
        />
        <p v-if="emailTouched && !emailLooksValid" class="field-error">
          mind double-checking that email?
        </p>
      </div>

      <div v-if="intent === 'project'" class="field">
        <label for="businessName">Business name</label>
        <input id="businessName" type="text" name="businessName" />
      </div>
      <div v-else class="field-row">
        <div class="field">
          <label for="role">Role</label>
          <input id="role" type="text" name="role" />
        </div>
        <div class="field">
          <label for="company">Company</label>
          <input id="company" type="text" name="company" />
        </div>
      </div>

      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary submit-btn">Send</button>
    </form>
  </div>
</template>

<style scoped>
.contact-page {
  padding: 3rem 1.5rem 6rem;
  max-width: 40rem;
}

.contact-page h1 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: 1.25rem;
}

.qualifying-line {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--mono-accent);
  margin-bottom: 2.5rem;
}

.confirmation {
  padding: 2rem 0;
}

.confirmation h2 {
  margin-bottom: 0.75rem;
}

.toggle {
  display: flex;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-warm);
  overflow: hidden;
  margin-bottom: 2rem;
}

.toggle-option {
  flex: 1;
  padding: 0.85rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--ink);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.toggle-option.active {
  background: var(--ink);
  color: var(--paper);
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--mono-accent);
}

input,
textarea {
  padding: 0.75rem 0.9rem;
  font-size: 1rem;
  font-family: var(--font-body);
  border-radius: var(--radius-sharp);
  border: 1px solid var(--line-strong);
  background: var(--paper);
  color: var(--ink);
  transition: border-color 0.2s ease;
}

input:focus,
textarea:focus {
  border-color: var(--warm-accent);
  outline: none;
}

textarea {
  min-height: 130px;
  resize: vertical;
}

.field-error {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--error);
}

.submit-btn {
  margin-top: 0.5rem;
}

@media (max-width: 560px) {
  .field-row {
    grid-template-columns: 1fr;
  }
}
</style>
