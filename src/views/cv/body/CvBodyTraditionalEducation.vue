Tr
<template>
  <div class="space-y-3">
    <SectionHeader title="TRADITIONAL EDUCATION_">
      <TraditionalEducationIcon />
    </SectionHeader>

    <div class="ml-2 space-y-4">
      <div
        v-for="traditionalCourse in traditionalCourses"
        :key="traditionalCourse.name"
      >
        <div class="mb-1">
          <p class="mb-1 font-semibold text-gray-700">
            {{ traditionalCourse.name }} —
            {{ traditionalCourse.institution }}
          </p>
          <p class="text-sm font-semibold text-gray-500">
            {{ traditionalCourse.period }}
          </p>
        </div>
        <ul class="space-y-2">
          <li
            v-for="task in traditionalCourse.tasks"
            :key="task"
            class="flex items-center space-x-2"
          >
            <ListBulletIcon />
            <span class="text-sm text-gray-600">{{ task }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { traditionalCourses } from '@/data'

import ListBulletIcon from '@/components/icons/ListBulletIcon'
import TraditionalEducationIcon from '@/components/icons/TraditionalEducationIcon'
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  components: {
    ListBulletIcon,
    TraditionalEducationIcon,
    SectionHeader,
  },
  data() {
    return {
      traditionalCourses,
    }
  },
}
</script>

<style scoped lang="scss"></style>
