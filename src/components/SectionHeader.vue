<template>
  <div class="flex items-start gap-2">
    <div class="flex-grow-0 flex-shrink-0 w-5 text-gray-700 fill-current">
      <slot></slot>
    </div>

    <span class="font-semibold text-gray-700">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss"></style>
