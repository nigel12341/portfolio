<template>
  <div class="container">
    <introduction-component/>
    <about-me-in-code-component/>
    <skills-component/>
    <projects-component/>
    <contact-component/>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import IntroductionComponent from "@/components/introductionComponent.vue";
import AboutMeInCodeComponent from "@/components/aboutMeInCodeComponent.vue";
import ProjectsComponent from "@/components/projectsComponent.vue";
import SkillsComponent from "@/components/skillsComponent.vue";
import ContactComponent from "@/components/contactComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {ContactComponent, SkillsComponent, ProjectsComponent, AboutMeInCodeComponent, IntroductionComponent}
})
</script>

<style scoped>
.container {
  margin: auto;
  width: 70%;
}
</style>