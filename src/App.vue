<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Sport from './components/Sport.vue';
import Quote from './components/Quote.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const theme = ref(localStorage.getItem('alex-theme') || 'light');
const isDark = computed(() => theme.value === 'dark');
const activeSection = ref('');
let sectionObserver;

function applyTheme() {
  document.documentElement.dataset.theme = theme.value;
  document.querySelector('meta[name="theme-color"]').content = isDark.value
    ? '#141a17'
    : '#f6f5f0';
}

function toggleTheme() {
  theme.value = isDark.value ? 'light' : 'dark';
  localStorage.setItem('alex-theme', theme.value);
  applyTheme();
}

onMounted(() => {
  applyTheme();

  if ('IntersectionObserver' in window) {
    sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) activeSection.value = entry.target.id;
        });
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );
    document.querySelectorAll('main section[id]').forEach(section => {
      sectionObserver.observe(section);
    });
  }
});

onBeforeUnmount(() => sectionObserver?.disconnect());
</script>

<template>
  <Header
    :is-dark="isDark"
    :active-section="activeSection"
    @toggle-theme="toggleTheme"
  />
  <main>
    <Hero />
    <About />
    <Sport />
    <Quote />
    <Work />
    <Contact />
  </main>
  <Footer />
</template>
