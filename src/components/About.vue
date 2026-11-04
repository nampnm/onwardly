<script setup>
const skills = [
  'Agile & Scrum',
  'Project planning',
  'Risk management',
  'Stakeholder alignment',
  'Cross-functional teams',
  'Change management',
  'Jira & Confluence'
];
</script>

<template>
  <section id="about" class="border-b border-line/70 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="mb-3 text-xs font-extrabold uppercase tracking-[0.17em] text-accent">About me</div>
          <h2 class="text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
            Good plans. Better teamwork.
          </h2>
        </div>
        <p class="max-w-md text-base leading-7 text-muted">
          I make complex work easier to navigate, with clear priorities, open
          communication, and steady progress.
        </p>
      </div>
      <div class="grid gap-10 md:grid-cols-2 md:gap-16">
        <div class="space-y-5 text-base leading-8 text-muted">
          <p class="m-0">
            I’m an IT project manager with five years of experience coordinating
            technical teams, stakeholders, and delivery plans. I’m at my best turning
            ambiguity into an achievable roadmap, surfacing risks early, and keeping
            everyone aligned on outcomes.
          </p>
          <p class="m-0">
            Outside work, sport is a big part of my life. I love running, cycling, and
            time in the gym—each one is a reminder that consistent effort and recovery
            matter as much as the plan.
          </p>
        </div>
        <div>
          <div class="mb-4 text-xs font-extrabold uppercase tracking-[0.17em] text-accent">How I deliver</div>
          <div class="flex flex-wrap gap-2.5">
            <span
              v-for="skill in skills"
              :key="skill"
              class="rounded-full border border-accent/10 bg-accent-soft px-4 py-2.5 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:border-accent/30"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
      <div class="mt-10 rounded-2xl border border-line bg-surface p-5 text-sm leading-7 text-muted shadow-sm sm:mt-12 sm:p-6">
        <strong class="text-ink">Outside the project plan:</strong> usually training for
        a run or ride, or getting a gym session in. Sport keeps me curious, disciplined,
        and ready for the next challenge.
      </div>
    </div>
  </section>
</template>
