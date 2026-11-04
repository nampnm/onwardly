<script setup>
import { computed, ref } from 'vue';

const quotes = [
  {
    text: 'Strong delivery starts with a shared goal, a realistic plan, and a team that can speak openly.',
    author: 'How I work'
  },
  {
    text: 'Make the next step clear, then help the team take it together.',
    author: 'A delivery principle'
  },
  {
    text: 'Surface risks early. Solve problems together. Keep learning.',
    author: 'A delivery principle'
  },
  {
    text: 'Sustainable progress is built through focus, consistency, and recovery.',
    author: 'A training principle'
  },
  {
    text: 'A good plan creates direction; good communication keeps it moving.',
    author: 'A delivery principle'
  }
];

const quoteIndex = ref(0);
const quote = computed(() => quotes[quoteIndex.value]);

function showAnotherQuote() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * quotes.length);
  } while (nextIndex === quoteIndex.value);
  quoteIndex.value = nextIndex;
}
</script>

<template>
  <section class="border-b border-line/70 py-16 sm:py-20 lg:py-24" aria-labelledby="quoteTitle">
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="mb-8">
        <div class="mb-3 text-xs font-extrabold uppercase tracking-[0.17em] text-accent">My approach</div>
        <h2 id="quoteTitle" class="text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
          Progress comes from clarity.
        </h2>
      </div>
      <div class="flex min-h-64 flex-col justify-between rounded-3xl border border-line bg-accent-soft p-6 sm:p-9 lg:p-11">
        <div class="max-w-4xl">
          <span class="block h-10 text-6xl leading-none text-accent" aria-hidden="true">“</span>
          <p id="quote" class="my-4 text-xl leading-relaxed tracking-tight text-ink sm:text-2xl lg:text-3xl">
            {{ quote.text }}
          </p>
        </div>
        <div class="flex flex-col gap-4 border-t border-accent/15 pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span id="quoteAuthor" class="font-medium">— {{ quote.author }}</span>
          <button
            class="inline-flex min-h-11 items-center justify-center rounded-xl border border-line bg-surface px-4 py-2 font-semibold text-ink transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            type="button"
            @click="showAnotherQuote"
          >
            Another principle ↻
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
