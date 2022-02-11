<template>
  <div class="grid grid-cols-2 gap-8">
    <div class="sections">
      <CvBodyWorkExperience />

      <CvBodyTraditionalEducation />
    </div>

    <div class="sections">
      <CvBodySkills />

      <CvBodySideProjects />

      <CvBodyOnlineEducation />
    </div>
  </div>
</template>

<script>
import CvBodyWorkExperience from '@/views/cv/body/CvBodyWorkExperience.vue'
import CvBodyTraditionalEducation from '@/views/cv/body/CvBodyTraditionalEducation.vue'
import CvBodySkills from '@/views/cv/body/CvBodySkills.vue'
import CvBodySideProjects from '@/views/cv/body/CvBodySideProjects.vue'
import CvBodyOnlineEducation from '@/views/cv/body/CvBodyOnlineEducation.vue'

export default {
  components: {
    CvBodyWorkExperience,
    CvBodyTraditionalEducation,
    CvBodySkills,
    CvBodySideProjects,
    CvBodyOnlineEducation,
  },
}
</script>

<style scoped lang="scss">
.sections {
  @apply space-y-7;
}
</style>
