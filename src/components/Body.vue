<template>
  <div class="grid grid-cols-2 gap-8">
    <div class="sections">
      <WorkExperience />

      <TraditionalEducation />
    </div>

    <div class="sections">
      <Skills />

      <SideProjects />

      <OnlineEducation />
    </div>
  </div>
</template>

<script>
import WorkExperience from '@/components/WorkExperience.vue'
import TraditionalEducation from '@/components/TraditionalEducation.vue'
import Skills from '@/components/Skills.vue'
import SideProjects from '@/components/SideProjects.vue'
import OnlineEducation from '@/components/OnlineEducation.vue'

export default {
  name: 'App',
  components: {
    WorkExperience,
    TraditionalEducation,
    Skills,
    SideProjects,
    OnlineEducation,
  },
}
</script>

<style scoped lang="scss">
.sections {
  @apply space-y-7;
}
</style>
