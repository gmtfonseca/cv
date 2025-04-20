<template>
  <div class="m-4">
    <CvHeader class="mb-10" />
    <CvBody />
    <CvFooter />
  </div>
</template>

<script>
import CvHeader from '@/views/cv/header/CvHeader.vue'
import CvBody from '@/views/cv/body/CvBody.vue'
import CvFooter from '@/views/cv/footer/CvFooter.vue'

export default {
  components: {
    CvHeader,
    CvBody,
    CvFooter,
  },
}
</script>

<style></style>
