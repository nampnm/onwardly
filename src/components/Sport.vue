<script setup>
const activities = [
  {
    name: 'Gym',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=85',
    alt: 'Weights and equipment in a gym',
    description: 'Strength is earned through patient, consistent effort.'
  },
  {
    name: 'Cycling',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=85',
    alt: 'Cyclist riding on a road',
    description: 'Keep a steady pace, adapt to the road, and go the distance.'
  },
  {
    name: 'Running',
    image:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=85',
    alt: 'Runner training on an outdoor path',
    description: 'Small steps add up when you keep showing up.'
  }
];
</script>

<template>
  <section id="sport" class="border-b border-line/70 py-16 sm:py-20 lg:py-24" aria-labelledby="sportTitle">
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="mb-3 text-xs font-extrabold uppercase tracking-[0.17em] text-accent">Beyond work</div>
          <h2 id="sportTitle" class="text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
            Built one session at a time.
          </h2>
        </div>
        <p class="max-w-md text-base leading-7 text-muted">
          Gym, cycling, and running keep me challenged, focused, and moving forward.
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="activity in activities"
          :key="activity.name"
          class="group overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
        >
          <div class="overflow-hidden">
            <img
              class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              :src="activity.image"
              :alt="activity.alt"
              loading="lazy"
            />
          </div>
          <div class="p-5 sm:p-6">
            <h3 class="mb-2 text-lg font-bold tracking-tight">{{ activity.name }}</h3>
            <p class="m-0 text-sm leading-6 text-muted">{{ activity.description }}</p>
          </div>
        </article>
      </div>
      <p class="mt-7 max-w-3xl text-base leading-7 text-muted">
        Endurance is more than fitness: it’s doing the important work consistently,
        protecting time to recover, and trusting that focused effort compounds into
        lasting progress.
      </p>
    </div>
  </section>
</template>
