<template>
  <div class="container">
    <h2>Projects -</h2>
    <div class="project" id="agileBot">
      <h3>Agile discord bot</h3>
      <p>A discord bot that also has a web dashboard.</p>
      <p>Technologies used: JS, HTML, </p>
      <p>Link to project</p>
      <p>Link to website</p>
    </div>
    <div class="project" id="DiscordApiWrapper">
      <h3>Discord API wrapper</h3>
      <p>A Discord REST API wrappen to make it easier to interact with.</p>
      <p>Technologies used: JS</p>
      <p>Link to project</p>
      <p>Link to website</p>
    </div>
    <div class="project" id="portfolioWebsite">
      <h3>Portfolio</h3>
      <p>This website!</p>
      <p>Technologies used: JS</p>
      <p>Link to project</p>
      <p>Link to website</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectsComponent"
}
</script>

<style scoped>
#DiscordApiWrapper{
  background-image: url("@/assets/npm-banner.png");
  background-size: cover;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
}
#agileBot {
  background-image: url("@/assets/logo-color.svg");
  background-size: cover;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
}
#portfolioWebsite {
  background-image: url("@/assets/logo-color.svg");
  background-size: cover;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
}
.project {
  margin-bottom: 30px;
  padding: 10px;
  text-align: left;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.3);
}
.container {
  padding-top: 30px;
}
</style>