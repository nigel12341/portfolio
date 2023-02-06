<template>
  <div class="mainView">
    <introduction-component/>
    <about-me-in-code-component/>
    <projects-component/>
    <skills-component/>
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
.mainView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
}
template {
  background-color: var(--background-color);
}
</style>