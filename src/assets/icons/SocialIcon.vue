<template>
  <svg viewBox="0 0 24 24">
    <path :d="path" />
  </svg>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
}
</script>
