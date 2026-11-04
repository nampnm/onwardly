<script setup>
import { ref } from 'vue';

defineProps({
  isDark: { type: Boolean, required: true },
  activeSection: { type: String, default: '' }
});

defineEmits(['toggle-theme']);

const menuOpen = ref(false);
const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Sport', href: '#sport', id: 'sport' },
  { label: 'Selected work', href: '#work', id: 'work' },
  { label: 'Contact', href: '#contact', id: 'contact' }
];
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line/70 bg-page/90 backdrop-blur-xl">
    <nav
      class="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10"
      aria-label="Main navigation"
      @keydown.esc="menuOpen = false"
    >
      <a class="text-lg font-extrabold tracking-[-0.06em]" href="#home">
        NAM PHAM<span class="text-accent">.</span>
      </a>
      <div class="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          class="transition-colors hover:text-accent"
          :aria-current="activeSection === link.id ? 'location' : undefined"
        >
          {{ link.label }}
        </a>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="grid size-10 place-items-center rounded-full border border-line bg-surface text-lg transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          type="button"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          title="Toggle color theme"
          @click="$emit('toggle-theme')"
        >
          {{ isDark ? '☀' : '☾' }}
        </button>
        <button
          class="grid size-10 place-items-center rounded-full border border-line bg-surface transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          type="button"
          aria-controls="navLinks"
          :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
          :aria-expanded="menuOpen"
          aria-haspopup="true"
          @click="menuOpen = !menuOpen"
        >
          <span aria-hidden="true">{{ menuOpen ? '×' : '☰' }}</span>
        </button>
      </div>
      <div
        v-show="menuOpen"
        id="navLinks"
        class="absolute inset-x-4 top-[calc(100%+0.5rem)] grid gap-1 rounded-2xl border border-line bg-surface p-3 shadow-[var(--shadow)] md:hidden"
      >
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          class="rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          :aria-current="activeSection === link.id ? 'location' : undefined"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
      </div>
    </nav>
  </header>
</template>
