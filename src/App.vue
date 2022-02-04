<template>
  <div class="m-4">
    <div class="grid items-center gap-8 mb-8 grid-cols-profile">
      <div>
        <img class="rounded-full" src="@/assets/profile.jpeg" />
      </div>

      <div class="flex flex-col gap-3">
        <h1 class="text-xl font-bold text-gray-700">Gustavo Fonseca</h1>
        <p class="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ipsam
          explicabo iusto provident eum sapiente, earum, enim laborum eius
          dolorem consequuntur doloribus quam alias a! Quis ex beatae aliquid
          distinctio.
          <!-- First and foremost, I love coding, and I feel blessed that I've been able to do it for a living for more than 10 years.
      
            I've been working as a solo developer for the past few years, but I've also been part of a big team, therefore I feel confident that I have both the team play and self-discipline necessary
            to succeed in any work environment.
      
            Lastly, based on my expertises and according to the industry terminology, I'm classified as a Full-Stack Developer, however, I prefer to describe myself simply as a Software Engineer, that
            is, someone who is willing to tackle any problem, regardless of the environment, with code. 
          -->
        </p>
        <div class="flex gap-6">
          <div class="contact-item">
            <PhoneIcon class="contact-icon" />
            <span>+55 (51) 997339260</span>
          </div>
          <div class="contact-item">
            <EmailIcon class="contact-icon" />
            <a href="mailto:gmtfonseca@gmail.com">gmtfonseca@gmail.com</a>
          </div>
        </div>

        <div class="flex gap-6">
          <a
            href="https://www.linkedin.com/in/gustavo-fonseca-0300ba209/"
            target="_blank"
            class="social-item"
          >
            <LinkedInIcon class="social-icon" />
          </a>
          <a
            href="https://github.com/gmtfonseca"
            target="_blank"
            class="social-icon"
          >
            <GitHubIcon class="social-icon" />
          </a>
          <a
            href="https://stackoverflow.com/users/3245229/gustavo-fonseca?tab=profile"
            target="_blank"
            class="social-item"
          >
            <StackOverflowIcon class="social-icon" />
          </a>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-8">
      <div class="sections">
        <div class="section">
          <div class="section-header">
            <WorkExperienceIcon class="section-icon" />
            <h2 class="section-title">WORK EXPERIENCE_</h2>
          </div>

          <div class="subsections">
            <div
              v-for="workExperience in workExperiences"
              :key="workExperience.company"
            >
              <div class="mb-1">
                <p class="subsection-title">
                  {{ workExperience.role }} — {{ workExperience.company }}
                </p>
                <p class="subsection-timeline">{{ workExperience.period }}</p>
              </div>
              <ul class="space-y-1">
                <li
                  v-for="task in workExperience.tasks"
                  :key="task"
                  class="topic"
                >
                  <ListBulletIcon />
                  <span>{{ task }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-header">
            <TraditionalEducationIcon class="section-icon" />
            <h2 class="section-title">TRADITIONAL EDUCATION_</h2>
          </div>

          <div class="subsections">
            <div
              v-for="traditionalCourse in traditionalCourses"
              :key="traditionalCourse.name"
            >
              <div class="mb-1">
                <p class="subsection-title">
                  {{ traditionalCourse.name }} —
                  {{ traditionalCourse.institution }}
                </p>
                <p class="subsection-timeline">
                  {{ traditionalCourse.period }}
                </p>
              </div>
              <ul class="space-y-1">
                <li
                  v-for="task in traditionalCourse.tasks"
                  :key="task"
                  class="topic"
                >
                  <ListBulletIcon />
                  <span>{{ task }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="sections">
        <div class="section">
          <div class="section-header">
            <SkillIcon class="section-icon" />
            <h2 class="section-title">SKILLS_</h2>
          </div>

          <div class="subsections">
            <div v-for="skill in skills" :key="skill">
              <h3 class="subsection-title">{{ skill.level }}</h3>
              <p class="mt-1 mb-3 text-xs text-gray-600">
                {{ skill.description }}
              </p>
              <div class="flex flex-wrap gap-2 mt-1">
                <div
                  v-for="topic in skill.topics"
                  :key="topic"
                  class="px-2 py-1 text-xs font-semibold text-gray-900 bg-gray-200 rounded"
                >
                  {{ topic }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-header">
            <SideProjectIcon class="section-icon" />
            <h2 class="section-title">SIDE PROJECTS_</h2>
          </div>

          <ul class="subsections">
            <li
              v-for="sideProject in sideProjects"
              :key="sideProject"
              class="p-4 bg-gray-100 rounded"
            >
              <div>
                <h3 class="subsection-title">
                  {{ sideProject.name }}
                </h3>

                <p class="mt-2 text-xs text-gray-600">
                  {{ sideProject.description }}
                </p>

                <div class="flex gap-3 mt-3 font-semibold">
                  <div class="px-2 py-1 text-xs text-white bg-gray-600 rounded">
                    <a :href="sideProject.sourceUrl">Source Code</a>
                  </div>
                  <div class="px-2 py-1 text-xs text-white bg-gray-600 rounded">
                    <a :href="sideProject.demoUrl">Demo</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="section">
          <div class="section-header">
            <OnlineEducationIcon class="section-icon" />
            <h2 class="section-title">ONLINE EDUCATION_</h2>
          </div>

          <ul class="ml-2 space-y-1">
            <li
              v-for="onlineCourse in onlineCourses"
              :key="onlineCourse.course"
            >
              <a
                class="subsection-title"
                :href="onlineCourse.url"
                target="_blank"
                >{{ onlineCourse.course }}
              </a>
              <span class="text-gray-600">
                — {{ onlineCourse.institution }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  workExperiences,
  traditionalCourses,
  onlineCourses,
  sideProjects,
  skills,
} from '@/data'

import ListBulletIcon from '@/assets/icons/ListBulletIcon'
import WorkExperienceIcon from '@/assets/icons/WorkExperienceIcon'
import SideProjectIcon from '@/assets/icons/SideProjectIcon'
import TraditionalEducationIcon from '@/assets/icons/TraditionalEducationIcon'
import OnlineEducationIcon from '@/assets/icons/OnlineEducationIcon'
import SkillIcon from '@/assets/icons/SkillIcon'
import EmailIcon from '@/assets/icons/EmailIcon'
import GitHubIcon from '@/assets/icons/GitHubIcon'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import StackOverflowIcon from '@/assets/icons/StackOverflowIcon'

export default {
  name: 'App',
  components: {
    ListBulletIcon,
    WorkExperienceIcon,
    SideProjectIcon,
    TraditionalEducationIcon,
    OnlineEducationIcon,
    SkillIcon,
    EmailIcon,
    GitHubIcon,
    LinkedInIcon,
    PhoneIcon,
    StackOverflowIcon,
  },
  data() {
    return {
      workExperiences,
      traditionalCourses,
      onlineCourses,
      sideProjects,
      skills,
    }
  },
}
</script>

<style>
html {
  font-size: 100%;
  font-family: 'Montserrat', sans-serif;
  /* font-family: 'Open Sans', sans-serif; */
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

.contact-item {
  @apply flex items-center space-x-2 text-gray-700;
}

.contact-icon {
  @apply w-5 h-auto fill-current;
}

.social-item {
  @apply text-gray-700;
}

.social-icon {
  @apply w-6 h-auto text-gray-700 fill-current;
}

.sections {
  @apply space-y-7;
}

.section {
  @apply space-y-3;
}

.section-header {
  @apply flex items-start gap-2;
}

.section-icon {
  @apply flex-grow-0 flex-shrink-0 w-5 text-gray-700 fill-current;
}

.section-title {
  @apply font-bold text-gray-700;
}

.subsections {
  @apply ml-2 space-y-4;
}

.subsection-title {
  @apply mb-1 font-semibold text-gray-700;
}

.subsection-timeline {
  @apply text-sm font-semibold text-gray-500;
}

.topic {
  @apply flex items-center space-x-2 text-sm text-gray-600;
}
</style>
