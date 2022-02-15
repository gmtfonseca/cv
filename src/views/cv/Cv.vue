<template>
  <div class="m-4">
    <CvHeader class="mb-10" />
    <CvBody />
  </div>
</template>

<script>
import CvHeader from '@/views/cv/header/CvHeader.vue'
import CvBody from '@/views/cv/body/CvBody.vue'

export default {
  components: {
    CvHeader,
    CvBody,
  },
}
</script>

<style></style>
