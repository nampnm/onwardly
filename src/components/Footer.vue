<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-line py-6 text-sm text-muted">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
      <span>© {{ year }} Nam Pham · IT Project Manager</span>
      <span>Plan well. Deliver together. Keep moving.</span>
    </div>
  </footer>
</template>
