<script setup>
import { computed, ref } from 'vue';

const projects = [
  {
    category: '01 / Digital transformation',
    title: 'Aligning teams around a platform launch',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85',
    alt: 'Digital dashboard displayed on a laptop',
    description:
      'Coordinating product, engineering, and operations through scope definition, milestone planning, dependency tracking, and launch readiness.'
  },
  {
    category: '02 / Process improvement',
    title: 'Making delivery more predictable',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85',
    alt: 'Collaborative team workspace',
    description:
      'Helping a cross-functional team improve its planning cadence, clarify ownership, and surface blockers before they affect delivery.'
  },
  {
    category: '03 / Systems implementation',
    title: 'Guiding a change from rollout to adoption',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85',
    alt: 'Workspace materials arranged for project planning',
    description:
      'Bringing stakeholders together around requirements, implementation checkpoints, user communications, and a practical transition plan.'
  }
];

const currentSlide = ref(0);
const currentPosition = computed(
  () =>
    `${String(currentSlide.value + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`
);
const progress = computed(
  () => `${((currentSlide.value + 1) / projects.length) * 100}%`
);
const slidesStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`
}));

function showSlide(offset) {
  currentSlide.value =
    (currentSlide.value + offset + projects.length) % projects.length;
}
</script>

<template>
  <section id="work" class="border-b border-line/70 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="mb-3 text-xs font-extrabold uppercase tracking-[0.17em] text-accent">Project experience</div>
          <h2 class="text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
            Making delivery happen.
          </h2>
        </div>
        <p class="max-w-md text-base leading-7 text-muted">
          Examples of the challenges I help teams navigate. Project details are
          representative; outcomes depend on each team and context.
        </p>
      </div>
      <div class="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-[var(--shadow)]" aria-roledescription="carousel" aria-label="Selected projects">
        <div class="flex transition-transform duration-500 ease-out motion-reduce:transition-none" :style="slidesStyle">
          <article
            v-for="(project, index) in projects"
            :key="project.title"
            class="grid min-w-full md:min-h-[25rem] md:grid-cols-[1.08fr_.92fr]"
            :aria-label="`${index + 1} of ${projects.length}${index === currentSlide ? ', current slide' : ''}`"
          >
            <img class="h-56 w-full object-cover sm:h-72 md:h-full md:min-h-[25rem]" :src="project.image" :alt="project.alt" loading="lazy" />
            <div class="flex flex-col justify-center px-6 py-7 sm:px-9 sm:py-10 md:px-10 lg:px-14">
              <div class="text-xs font-extrabold uppercase tracking-[0.17em] text-accent">{{ project.category }}</div>
              <h3 class="mt-4 text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-3xl">
                {{ project.title }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-muted sm:text-base">{{ project.description }}</p>
              <div v-if="index === currentSlide" class="mt-8 border-t border-line pt-5">
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <button
                    class="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-3.5 text-[0.68rem] font-bold tracking-[0.12em] text-muted transition duration-200 hover:border-accent hover:bg-accent-soft hover:text-accent active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 sm:text-xs"
                    type="button"
                    aria-label="Previous project"
                    @click="showSlide(-1)"
                  >
                    <span aria-hidden="true" class="text-base leading-none">←</span>
                    PREVIOUS
                  </button>
                  <span
                    class="font-mono text-xs font-semibold tracking-[0.12em] text-ink tabular-nums"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {{ currentPosition }}
                  </span>
                  <button
                    class="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-3.5 text-[0.68rem] font-bold tracking-[0.12em] text-muted transition duration-200 hover:border-accent hover:bg-accent-soft hover:text-accent active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 sm:text-xs"
                    type="button"
                    aria-label="Next project"
                    @click="showSlide(1)"
                  >
                    NEXT
                    <span aria-hidden="true" class="text-base leading-none">→</span>
                  </button>
                </div>
                <div
                  class="mt-4 h-0.5 overflow-hidden rounded-full bg-line"
                  role="progressbar"
                  :aria-valuenow="currentSlide + 1"
                  :aria-valuemin="1"
                  :aria-valuemax="projects.length"
                  :aria-label="`Project ${currentSlide + 1} of ${projects.length}`"
                >
                  <div
                    class="h-full rounded-full bg-accent transition-[width] duration-500 ease-out motion-reduce:transition-none"
                    :style="{ width: progress }"
                  ></div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
