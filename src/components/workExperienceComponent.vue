<template>
  <div class="workExperienceContainer">
  <h2 id="title">{{ $t('workExperience.title') }} -</h2>
    <section class="workExperience" id="defensie">
      <img class="projectImage rounded-circle" src="@/assets/landmacht-logo.webp" alt="Defensie icon">
      <h3>{{ $t("workExperience.defensie.title") }}</h3>
      <h5>{{ $t("workExperience.defensie.company")}}</h5>
      <h5>{{ $t("workExperience.defensie.timeAtCompany")}}</h5>
      <p>{{ $t("workExperience.defensie.description") }}</p>
      <!-- not needed yet -->
<!--      <p>-->
<!--        <span class="skillsBox">{{ $t("workExperience.skills.collaborate") }}</span>-->
<!--        <span class="skillsBox">{{ $t("workExperience.skills.1-on-1 interviews") }}</span>-->
<!--        <span class="skillsBox">{{ $t("workExperience.skills.presenting") }}</span>-->
<!--        <span class="skillsBox">{{ $t("workExperience.skills.speaking in front of groups") }}</span>-->
<!--        <span class="skillsBox">{{ $t("workExperience.skills.leadership") }}</span>-->
<!--        <span class="skillsBox">{{ $t("workExperience.skills.training staff") }}</span>-->
<!--        <span class="skillsBox">{{ $t("workExperience.skills.english") }}</span>-->
<!--      </p>-->
    </section>
    <section class="workExperience" id="RYSST">
      <img class="projectImage rounded-circle" src="@/assets/rysst-logo.webp" alt="Picnic icon">
      <h3>{{ $t("workExperience.RYSST.title") }}</h3>
      <h6>{{ $t("workExperience.RYSST.timeAtCompany")}}</h6>
      <p>{{ $t("workExperience.RYSST.description") }}</p>
      <p>
        <span class="skillsBox">{{ $t("workExperience.skills.collaborate") }}</span>
        <span class="skillsBox">{{ $t("workExperience.skills.speaking in front of groups") }}</span>
        <span class="skillsBox">{{ $t("workExperience.skills.leadership") }}</span>
        <span class="skillsBox">{{ $t("workExperience.skills.english") }}</span>
        <span class="skillsBox">Skrum</span>
      </p>
    </section>
  <section class="workExperience" id="picnic">
    <img class="projectImage rounded-circle" src="@/assets/Picnic_logo.webp" alt="Picnic icon">
    <h3>{{ $t("workExperience.picnic.title") }}</h3>
    <h6>{{ $t("workExperience.picnic.timeAtCompany")}}</h6>
    <p>{{ $t("workExperience.picnic.description") }}</p>
    <p>
      <span class="skillsBox">{{ $t("workExperience.skills.collaborate") }}</span>
      <span class="skillsBox">{{ $t("workExperience.skills.1-on-1 interviews") }}</span>
      <span class="skillsBox">{{ $t("workExperience.skills.presenting") }}</span>
      <span class="skillsBox">{{ $t("workExperience.skills.speaking in front of groups") }}</span>
      <span class="skillsBox">{{ $t("workExperience.skills.leadership") }}</span>
      <span class="skillsBox">{{ $t("workExperience.skills.training staff") }}</span>
      <span class="skillsBox">{{ $t("workExperience.skills.english") }}</span>
    </p>
    <hr>
      <h3>{{ $t("workExperience.picnic.title2") }}</h3>
    <h6>{{ $t("workExperience.picnic.timeAtCompany2")}}</h6>
      <p>{{ $t("workExperience.picnic.description2") }}</p>

    <p>
      <span class="skillsBox">{{ $t("workExperience.skills.customer satisfaction") }}</span>
      <span class="skillsBox">{{ $t("workExperience.skills.english") }}</span>
      <span class="skillsBox">{{ $t("workExperience.skills.performing under pressure") }}</span>
      <span class="skillsBox">{{ $t("workExperience.skills.problem solving") }}</span>
    </p>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
hr{
  width: 100%;
  border: 2px solid var(--main-color);
  padding: 0;
  margin: 0;
}
.skillsBox {
  margin: 3px;
  padding: 5px;
  display: inline-block;
  border: 2px solid var(--main-color);
  border-radius: 5px;
}
.workExperience {
  margin-bottom: 30px;
  padding: 20px;
  text-align: left;
  background-color: var(--background-color);
  border-radius: 5px;
}
.workExperienceContainer {
  margin: 0 auto;
  width: 40%;
  color: var(--secondary-color);
}
.projectImage {
  width: 150px;
  height: 150px;
  float: right;
}
#title {
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  font-size: 2.5em;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-family: Monaco, Consolas, Lucida Console, monospace;
  color: var(--main-color);
  width: 100%;
}
</style>