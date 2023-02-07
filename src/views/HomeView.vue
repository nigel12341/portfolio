<template>
  <div class="mainView">
    <LanguageSwitcher/>
    <introduction-component/>
    <about-me-in-code-component/>
    <hr>
    <projects-component/>
    <skills-component/>
    <hr>
    <contact-component/>
    <p>Copyright (c) Nigel Christiaans 2023</p>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import IntroductionComponent from "@/components/introductionComponent.vue";
import AboutMeInCodeComponent from "@/components/aboutMeInCodeComponent.vue";
import ProjectsComponent from "@/components/projectsComponent.vue";
import SkillsComponent from "@/components/skillsComponent.vue";
import ContactComponent from "@/components/contactComponent.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ContactComponent, SkillsComponent, ProjectsComponent, AboutMeInCodeComponent, IntroductionComponent, LanguageSwitcher}
})
</script>

<style scoped>
.mainView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 50px;
}
template {
  background-color: var(--background-color);
}
p{
  margin-top: 10rem;
}
hr{
  width: 70%;
  border: 2px solid var(--main-color);
  padding: 0;
  margin: 0;
}
</style>