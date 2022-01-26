<template>
  <div class="m-6">
    <div class="grid items-center gap-4 mb-6 grid-cols-profile">
      <div>
        <img class="rounded-full" src="@/assets/profile.jpeg" />
      </div>

      <div class="flex flex-col space-y-3">
        <h1 class="text-xl font-semibold text-gray-700">Gustavo Fonseca</h1>
        <p class="text-gray-600">
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
        <div class="flex space-x-6">
          <div class="contact-item">
            <PhoneIcon class="contact-icon" />
            <span>+55 (51) 997339260</span>
          </div>
          <div class="contact-item">
            <EmailIcon class="contact-icon" />
            <a href="mailto:gmtfonseca@gmail.com">gmtfonseca@gmail.com</a>
          </div>
        </div>

        <div class="flex space-x-4">
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

    <div class="grid grid-cols-2 gap-5">
      <div class="sections">
        <div class="section">
          <div class="flex items-center gap-2">
            <WorkExperienceIcon class="section-icon" />
            <h2 class="section-header">WORK EXPERIENCE_</h2>
          </div>

          <div
            v-for="workExperience in workExperiences"
            :key="workExperience.company"
          >
            <div class="mb-1">
              <p class="subsection-title">
                {{ workExperience.role }} — {{ workExperience.company }}
              </p>
              <p class="subsection-period">{{ workExperience.period }}</p>
            </div>

            <ul class="subsection-topics">
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

        <div class="section">
          <div class="flex items-center gap-2">
            <TraditionalEducationIcon class="section-icon" />
            <h2 class="section-header">TRADITIONAL EDUCATION_</h2>
          </div>

          <div
            v-for="traditionalCourse in traditionalCourses"
            :key="traditionalCourse.name"
          >
            <div class="mb-1">
              <p class="subsection-title">
                {{ traditionalCourse.name }} —
                {{ traditionalCourse.institution }}
              </p>
              <p class="subsection-period">{{ traditionalCourse.period }}</p>
            </div>

            <ul class="subsection-topics">
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

      <div class="sections">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <SkillIcon class="section-icon" />
            <h2 class="section-header">SKILLS_</h2>
          </div>

          <div class="space-y-2">
            <div v-for="skill in skills" :key="skill" class="space-y-1">
              <h3 class="font-semibold">{{ skill.level }}</h3>
              <p class="text-xs">
                {{ skill.description }}
              </p>
              <div class="flex flex-wrap gap-2 mt-1 w-96">
                <div
                  v-for="topic in skill.topics"
                  :key="topic"
                  class="px-2 py-2 text-xs font-semibold text-white bg-gray-600 rounded"
                >
                  {{ topic }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-2">
            <SideProjectIcon class="section-icon" />
            <h2 class="section-header">SIDE PROJECTS_</h2>
          </div>

          <ul class="ml-1">
            <li v-for="sideProject in sideProjects" :key="sideProject.name">
              <span class="font-semibold">
                <a :href="sideProject.url">{{ sideProject.name }} </a>:
              </span>
              <span v-for="tech in sideProject.techs" :key="tech">
                {{ tech }}
                <br />
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="section-header"></h2>
          <div class="flex items-center gap-2 mb-2">
            <OnlineEducationIcon class="section-icon" />
            <h2 class="section-header">ONLINE EDUCATION_</h2>
          </div>

          <ul class="ml-1">
            <li
              v-for="onlineCourse in onlineCourses"
              :key="onlineCourse.course"
            >
              <a class="font-semibold" :href="onlineCourse.url" target="_blank"
                >{{ onlineCourse.course }}
              </a>
              <span> - {{ onlineCourse.institution }}</span>
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

<style></style>
