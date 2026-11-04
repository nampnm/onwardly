<script setup>
import { ref } from 'vue';

const formStatus = ref('');

function submitForm(event) {
  const form = event.currentTarget;
  formStatus.value = '';

  if (!form.checkValidity()) {
    const invalid = form.querySelector(':invalid');
    formStatus.value = invalid.validity.valueMissing
      ? 'Please fill out all fields.'
      : invalid.validity.typeMismatch
        ? 'Please enter a valid email address.'
        : invalid.validity.tooShort
          ? `Please add a little more detail (${invalid.minLength} characters minimum).`
          : 'Please check your entries.';
    invalid.focus();
    return;
  }

  formStatus.value = 'Thanks for reaching out! Your message is ready to send.';
  form.reset();
}
</script>

<template>
  <section id="contact" class="py-16 sm:py-20 lg:py-24">
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="mb-3 text-xs font-extrabold uppercase tracking-[0.17em] text-accent">Get in touch</div>
          <h2 class="text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
            Let’s deliver something meaningful.
          </h2>
        </div>
        <p class="max-w-md text-base leading-7 text-muted">
          Interested in working together or talking project delivery? I’d be glad to
          hear from you.
        </p>
      </div>
      <div class="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <p class="mb-4 max-w-sm leading-7 text-muted">
            Share a little about your team or project and what you’re looking to achieve.
          </p>
          <a
            class="font-bold text-accent underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="mailto:minhnam6397@gmail.com"
          >
            minhnam6397@gmail.com
          </a>
        </div>
        <form class="grid gap-5" novalidate @submit.prevent="submitForm">
          <div>
            <label class="mb-2 block text-sm font-semibold" for="name">Your name</label>
            <input
              id="name"
              class="w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-4 focus:ring-accent/15"
              name="name"
              autocomplete="name"
              required
              minlength="2"
              placeholder="Jordan Lee"
            />
          </div>
          <div>
            <label class="mb-2 block text-sm font-semibold" for="email">Email address</label>
            <input
              id="email"
              class="w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-4 focus:ring-accent/15"
              name="email"
              type="email"
              autocomplete="email"
              required
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label class="mb-2 block text-sm font-semibold" for="message">A little about your project</label>
            <textarea
              id="message"
              class="min-h-36 w-full resize-y rounded-xl border border-line bg-surface px-4 py-3 text-ink outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-4 focus:ring-accent/15"
              name="message"
              required
              minlength="10"
              placeholder="What are you planning to deliver?"
            ></textarea>
          </div>
          <div>
            <button
              class="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-page shadow-lg shadow-accent/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              type="submit"
            >
              Get in touch <span aria-hidden="true">↗</span>
            </button>
            <p class="min-h-6 pt-2 text-sm text-accent" role="status" aria-live="polite">{{ formStatus }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
