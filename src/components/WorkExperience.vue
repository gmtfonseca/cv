<template>
  <div class="space-y-3">
    <SectionHeader title="WORK EXPERIENCE_">
      <WorkExperienceIcon />
    </SectionHeader>

    <div class="ml-2 space-y-4">
      <div
        v-for="workExperience in workExperiences"
        :key="workExperience.company"
      >
        <div class="mb-1">
          <p class="mb-1 font-semibold text-gray-700">
            {{ workExperience.role }} — {{ workExperience.company }}
          </p>
          <p class="text-sm font-semibold text-gray-500">
            {{ workExperience.period }}
          </p>
        </div>
        <ul class="space-y-2">
          <li
            v-for="task in workExperience.tasks"
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
import { workExperiences } from '@/data'

import ListBulletIcon from '@/assets/icons/ListBulletIcon'
import WorkExperienceIcon from '@/assets/icons/WorkExperienceIcon'
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  components: {
    ListBulletIcon,
    WorkExperienceIcon,
    SectionHeader,
  },
  data() {
    return {
      workExperiences,
    }
  },
}
</script>

<style scoped lang="scss"></style>
