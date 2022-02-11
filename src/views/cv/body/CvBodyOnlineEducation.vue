<template>
  <div class="space-y-3">
    <SectionHeader title="ONLINE EDUCATION_">
      <OnlineEducationIcon />
    </SectionHeader>

    <ul class="ml-2 space-y-2">
      <li v-for="onlineCourse in onlineCourses" :key="onlineCourse.course">
        <a
          class="mb-1 font-semibold text-gray-700"
          :href="onlineCourse.url"
          target="_blank"
          >{{ onlineCourse.course }}
        </a>
        <span class="text-gray-600"> — {{ onlineCourse.institution }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { onlineCourses } from '@/data'

import OnlineEducationIcon from '@/components/icons/OnlineEducationIcon'
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  components: {
    OnlineEducationIcon,
    SectionHeader,
  },
  data() {
    return {
      onlineCourses,
    }
  },
}
</script>

<style scoped lang="scss"></style>
