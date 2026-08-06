<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useTypewriter } from '@/composables/useTypewriter'

const emit = defineEmits<{ complete: [] }>()

const promptText = '> whoami'
const identityText = 'Andrea Donati — engineer, first. Nice to meet you.'

const fadingOut = ref(false)
const hidden = ref(false)

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const { revealed, activeLine, start, skip } = useTypewriter({
  lines: [{ text: promptText }, { text: identityText, delayBefore: 220 }],
  charDelay: 32,
  holdAfter: 350,
  onComplete: crossFade,
})

function crossFade() {
  fadingOut.value = true
  window.setTimeout(() => {
    hidden.value = true
    emit('complete')
  }, 420)
}

function skipIntro() {
  if (fadingOut.value) return
  skip()
}

onMounted(() => {
  if (prefersReducedMotion) {
    // Show the finished state briefly, then go straight to the cross-fade.
    revealed.value = [promptText, identityText]
    activeLine.value = 2
    window.setTimeout(crossFade, 250)
  } else {
    start()
  }

  window.addEventListener('keydown', skipIntro)
  window.addEventListener('pointerdown', skipIntro)
  window.addEventListener('wheel', skipIntro, { passive: true })
  window.addEventListener('touchstart', skipIntro, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', skipIntro)
  window.removeEventListener('pointerdown', skipIntro)
  window.removeEventListener('wheel', skipIntro)
  window.removeEventListener('touchstart', skipIntro)
})
</script>

<template>
  <div
    v-if="!hidden"
    class="intro-overlay"
    :class="{ 'is-fading': fadingOut }"
    role="presentation"
    aria-hidden="true"
  >
    <div class="intro-content">
      <p class="intro-prompt">
        {{ revealed[0]
        }}<span v-if="activeLine === 0" class="cursor" aria-hidden="true"></span>
      </p>
      <p class="intro-identity">
        {{ revealed[1]
        }}<span v-if="activeLine === 1" class="cursor" aria-hidden="true"></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
  transition: opacity 0.42s ease;
  opacity: 1;
}

.intro-overlay.is-fading {
  opacity: 0;
  pointer-events: none;
}

.intro-content {
  max-width: 44rem;
  width: 100%;
}

.intro-prompt {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 2.4vw, 1.35rem);
  color: var(--paper-mute);
  margin-bottom: 1rem;
}

.intro-identity {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.5rem, 5vw, 2.75rem);
  color: var(--paper);
  min-height: 1.2em;
}

.cursor {
  display: inline-block;
  width: 0.55ch;
  height: 1em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: var(--warm-accent);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .intro-overlay {
    transition: opacity 0.2s linear;
  }
  .cursor {
    animation: none;
    opacity: 1;
  }
}
</style>
