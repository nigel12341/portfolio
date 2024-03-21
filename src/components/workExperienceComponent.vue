<template>
  <div class="workExperienceContainer">
  <h2 id="title">{{ $t('workExperience.title') }} -</h2>

  <section class="workExperience" id="picnic">
    <img class="projectImage rounded-circle" src="@/assets/Picnic_logo.png" alt="Picnic icon">
    <h3>{{ $t("workExperience.picnic.title") }}</h3>
    <h6>{{ $t("workExperience.picnic.timeAtCompany")}}</h6>
    <p>{{ $t("workExperience.picnic.description") }}</p>
    <p v-once>
      <span class="techBox">Samenwerken</span>
      <span class="techBox">1 op 1 gesprekken</span>
      <span class="techBox">Presenteren</span>
      <span class="techBox">Spreken voor groepen</span>
      <span class="techBox">Leiding geven</span>
      <span class="techBox">Opleiden van personeel</span>
      <span class="techBox">Engels</span>
    </p>
    <hr>
      <h3>{{ $t("workExperience.picnic.title2") }}</h3>
    <h6>{{ $t("workExperience.picnic.timeAtCompany2")}}</h6>
      <p>{{ $t("workExperience.picnic.description2") }}</p>

      <p v-once>
        <span class="techBox">Klanttevredenheid</span>
        <span class="techBox">Engels</span>
        <span class="techBox">Presteren onder tijdsdruk</span>
        <span class="techBox">Oplossen van problemen</span>
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
.techBox {
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