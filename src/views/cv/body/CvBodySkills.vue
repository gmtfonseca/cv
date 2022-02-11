<template>
  <div class="space-y-3">
    <SectionHeader title="SKILLS_">
      <SkillIcon />
    </SectionHeader>

    <div class="ml-2 space-y-4">
      <div v-for="skill in skills" :key="skill">
        <h3 class="mb-1 font-semibold text-gray-700">{{ skill.level }}</h3>
        <p class="mt-1 mb-3 text-xs text-gray-600">
          {{ skill.description }}
        </p>
        <div class="flex flex-wrap gap-2 mt-1">
          <div
            v-for="topic in skill.topics"
            :key="topic"
            class="px-2 py-1 text-xs font-semibold text-gray-900 bg-gray-300 rounded"
          >
            {{ topic }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { skills } from '@/data'

import SkillIcon from '@/components/icons/SkillIcon'
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  components: {
    SkillIcon,
    SectionHeader,
  },
  data() {
    return {
      skills,
    }
  },
}
</script>

<style scoped lang="scss"></style>
