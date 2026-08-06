import { ref, type Ref } from 'vue'

export interface TypewriterLine {
  /** Full text of the line, revealed character by character. */
  text: string
  /** Delay before this line starts typing, in ms. */
  delayBefore?: number
}

export interface UseTypewriterOptions {
  lines: TypewriterLine[]
  /** ms per character. */
  charDelay?: number
  /** ms to hold on the finished state before calling onComplete. */
  holdAfter?: number
  onComplete?: () => void
}

export interface UseTypewriterReturn {
  /** Revealed text per line, same length as input lines. */
  revealed: Ref<string[]>
  /** Index of the line currently being typed, or lines.length once done. */
  activeLine: Ref<number>
  done: Ref<boolean>
  /** Start the sequence. No-op if already started. */
  start: () => void
  /** Jump straight to the fully-typed end state and fire onComplete. */
  skip: () => void
}

/**
 * Small, dependency-free character-by-character typewriter effect.
 *
 * Built in-house rather than via vue-typer / vue-typer-next / vue-writer — see
 * pipeline/build-flags.md (2026-08-06 resolved entry) for the audit that led here.
 * In short: this needs several lines that all stay visible at once (a terminal
 * transcript, not a rotating/erasing headline), each with independent typography,
 * plus an instant "skip on any interaction" affordance and prefers-reduced-motion
 * support — none of the three packages give all of that without roughly as much
 * glue code as writing the effect directly.
 */
export function useTypewriter(options: UseTypewriterOptions): UseTypewriterReturn {
  const { lines, charDelay = 45, holdAfter = 400, onComplete } = options

  const revealed = ref<string[]>(lines.map(() => ''))
  const activeLine = ref(0)
  const done = ref(false)

  let timers: ReturnType<typeof setTimeout>[] = []
  let started = false

  function clearTimers() {
    timers.forEach((t) => clearTimeout(t))
    timers = []
  }

  function finish() {
    if (done.value) return
    clearTimers()
    revealed.value = lines.map((l) => l.text)
    activeLine.value = lines.length
    done.value = true
    onComplete?.()
  }

  function typeLine(lineIndex: number) {
    if (lineIndex >= lines.length) {
      const holdTimer = setTimeout(finish, holdAfter)
      timers.push(holdTimer)
      return
    }

    activeLine.value = lineIndex
    const line = lines[lineIndex]
    let charIndex = 0

    const startTimer = setTimeout(
      function typeChar() {
        charIndex += 1
        revealed.value[lineIndex] = line.text.slice(0, charIndex)
        if (charIndex < line.text.length) {
          const t = setTimeout(typeChar, charDelay)
          timers.push(t)
        } else {
          typeLine(lineIndex + 1)
        }
      },
      line.delayBefore ?? 0,
    )
    timers.push(startTimer)
  }

  function start() {
    if (started) return
    started = true
    typeLine(0)
  }

  function skip() {
    started = true
    finish()
  }

  return { revealed, activeLine, done, start, skip }
}
