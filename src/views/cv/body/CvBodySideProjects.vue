<template>
  <div class="space-y-3">
    <SectionHeader title="SIDE PROJECTS_">
      <SideProjectIcon />
    </SectionHeader>

    <ul class="ml-2 space-y-4">
      <li
        v-for="sideProject in sideProjects"
        :key="sideProject"
        class="p-4 bg-gray-200 rounded"
      >
        <div class="flex items-start justify-between mb-1">
          <h3 class="font-semibold text-gray-700">
            {{ sideProject.name }}
          </h3>

          <div class="flex gap-2">
            <span
              v-for="tech in sideProject.techs"
              :key="tech"
              class="px-2 py-1 font-semibold text-gray-700 bg-gray-300 rounded text-xxs"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <p class="mt-2 text-xs leading-5 text-gray-600">
          {{ sideProject.description }}
        </p>

        <div class="flex gap-3 mt-3 font-semibold">
          <div class="px-3 py-1 text-xs text-white bg-gray-600 rounded">
            <a :href="sideProject.sourceUrl" target="_blank">Source Code</a>
          </div>
          <div
            v-if="sideProject.demoUrl"
            class="px-3 py-1 text-xs text-white bg-gray-600 rounded"
          >
            <a :href="sideProject.demoUrl" target="_blank">Demo</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { sideProjects } from '@/data'

import SideProjectIcon from '@/components/icons/SideProjectIcon'
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  components: {
    SideProjectIcon,
    SectionHeader,
  },
  data() {
    return {
      sideProjects,
    }
  },
}
</script>

<style scoped lang="scss"></style>
