<template>
  <div class="grid items-center gap-8 mb-12 grid-cols-profile">
    <div>
      <img class="rounded-full shadow" src="@/assets/profile.jpeg" />
    </div>

    <div class="flex flex-col justify-center gap-3">
      <h1 class="text-xl font-bold tracking-wider text-gray-700">
        {{ profile.name }}
      </h1>
      <p class="max-w-4xl text-sm leading-6 text-gray-600">
        {{ profile.bio }}
      </p>

      <div class="flex gap-10">
        <div class="contact">
          <PhoneIcon class="contact__icon" />
          <span>{{ profile.phone }}</span>
        </div>
        <div class="contact">
          <EmailIcon class="contact__icon" />
          <a href="mailto:gmtfonseca@gmail.com">{{ profile.email }}</a>
        </div>
      </div>

      <div class="flex gap-6">
        <a
          v-for="social in profile.socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          class="text-gray-700"
        >
          <SocialIcon :path="social.svgPath" class="w-6 h-auto fill-current" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { profile } from '@/data'

import EmailIcon from '@/assets/icons/EmailIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import SocialIcon from '@/assets/icons/SocialIcon'

export default {
  name: 'App',
  components: {
    EmailIcon,
    PhoneIcon,
    SocialIcon,
  },
  data() {
    return {
      profile,
    }
  },
}
</script>

<style scoped lang="scss">
.contact {
  @apply flex items-center space-x-2 text-gray-700;

  &__icon {
    @apply w-5 h-auto fill-current;
  }
}
</style>
