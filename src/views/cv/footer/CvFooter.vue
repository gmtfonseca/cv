<template>
  <footer class="mt-10 text-xs text-gray-500 text-center">
    <p class="flex items-center justify-center gap-1">
      {{ profile.footerText }}
      <a
        href="https://github.com/gmtfonseca/cv"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-500 hover:text-gray-700 transition-colors"
      >
        <GitHubIcon />
      </a>
    </p>
  </footer>
</template>

<script>
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
import { profile } from '@/data'

export default {
  components: {
    GitHubIcon,
  },
  setup() {
    return {
      profile,
    }
  },
}
</script>

<style scoped></style>
