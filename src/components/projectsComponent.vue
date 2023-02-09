<template>
  <div class="projectsContainer">
    <h2 id="title">{{$t('projects.title')}} -</h2>
    <div class="project" id="agileBot">
      <img class="projectImage rounded-circle" src="@/assets/logo-color.svg" alt="Agile bot">
      <h3>{{$t('projects.agileBot.title')}}</h3>
      <p>{{$t('projects.agileBot.description')}}</p>
      <p>
        <span class="techBox">Firebase</span>
        <span class="techBox">JS</span>
        <span class="techBox">NodeJS</span>
      </p>
      <a href="https://github.com/nigel12341/Agile-bot"  target="_blank" class="btn btn-primary githubButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        {{$t('projects.githubRepo')}}</a>

    </div>
    <div class="project" id="agileBotWebDashboard">
      <img class="projectImage rounded-circle" src="@/assets/A-logo-color.svg" alt="Agile bot">
      <h3>{{$t('projects.agileBotWeb.title')}}</h3>
      <p>{{$t('projects.agileBotWeb.description')}}</p>
      <p>
        <span class="techBox">VueJS</span>
        <span class="techBox">Firebase</span>
        <span class="techBox">JS</span>
        <span class="techBox">HTML</span>
        <span class="techBox">CSS</span>
        <span class="techBox">NodeJS</span>
        <span class="techBox">Bootstrap</span>
      </p>
      <a href="https://github.com/nigel12341/Agile-bot-web-dashboard"  target="_blank" class="btn btn-primary githubButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        {{$t('projects.githubRepo')}}</a>
      <a href="https://project.nigelchristiaans.nl/"  target="_blank"  class="btn btn-primary secondButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
        </svg>
        {{$t('projects.linkToWebsite')}}
      </a>
    </div>
    <div class="project" id="DiscordApiWrapper">
      <img class="projectImage" src="@/assets/npm-banner.png" alt="NPM banner">
      <h3>{{$t('projects.discordApiNPM.title')}}</h3>
      <p>{{$t('projects.discordApiNPM.description')}}<br>{{$t('projects.discordApiNPM.description2')}}</p>
      <p>
        <span class="techBox">JS</span>
        <span class="techBox">NodeJS</span>
      </p>
      <a href="https://github.com/nigel12341/discord-api-wrapper"  target="_blank" class="btn btn-primary githubButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        {{$t("projects.githubRepo")}}</a>
      <a href="https://www.npmjs.com/package/discord-api-wrapper"  target="_blank" class="btn btn-primary secondButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box2-heart" viewBox="0 0 16 16">
          <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z"/>
          <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z"/>
        </svg>
        {{$t('projects.discordApiNPM.npmPage')}}
      </a>
    </div>
    <div class="project" id="portfolioWebsite">
      <img class="projectImage rounded-circle" src="@/assets/selfie.png" alt="Selfie">
      <h3>{{$t("projects.portfolioWebsite.title")}}</h3>
      <p>{{$t("projects.portfolioWebsite.description")}}</p>
      <p>
        <span class="techBox">Vue</span>
        <span class="techBox">NodeJS</span>
        <span class="techBox">HTML</span>
        <span class="techBox">CSS</span>
        <span class="techBox">JS</span>
        <span class="techBox">Bootstrap</span>
        <span class="techBox">TS</span>
        <span class="techBox">Firebase</span>
      </p>
      <a href="https://github.com/nigel12341/portfolio" target="_blank" class="btn btn-primary githubButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        {{$t("projects.githubRepo")}}</a>
    </div>
    <div class="project" id="ProjectEWA">
      <img class="projectImage" src="@/assets/gemAmsLogo.svg" alt="logo AMS">
      <h3>{{$t("projects.PEWA.title")}}</h3>
      <p>{{$t("projects.PEWA.description")}}<br>{{$t("projects.PEWA.description2")}}<br>{{$t("projects.PEWA.description3")}}</p>
      <p>
        <span class="techBox">Vue</span>
        <span class="techBox">NodeJS</span>
        <span class="techBox">HTML</span>
        <span class="techBox">CSS</span>
        <span class="techBox">JS</span>
        <span class="techBox">Bootstrap</span>
        <span class="techBox">Java</span>
        <span class="techBox">Spring boot</span>
        <span class="techBox">Junit</span>
      </p>
      <a class="btn btn-secondary disabled" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        {{$t("projects.githubRepo")}} ({{$t("projects.PEWA.unavailable")}})</a>
      <a href="https://ewa-fe-app-production.up.railway.app/#/home"  target="_blank"  class="btn btn-primary secondButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
        </svg>
        {{$t('projects.linkToWebsite')}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectsComponent"
}
</script>

<style scoped>
.project {
  margin-bottom: 30px;
  padding: 20px;
  text-align: left;
  background-color: var(--background-color);
  border-radius: 5px;
}
.projectsContainer{
  margin: 0 auto;
  width: 40%;
  color: var(--secondary-color);
}
.secondButton {
  margin-left: 10px;
  background-color: var(--secondary-color) !important;
  color: black;
  border-color: var(--secondary-color);
}
.techBox {
  margin: 3px;
  padding: 5px;
  display: inline-block;
  border: 2px solid var(--main-color);
  border-radius: 5px;
}
.projectImage {
  width: 150px;
  height: 100%;
  float: right;
}
.githubButton {
  background-color: var(--main-color) !important;
  border-color: var(--main-color);
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
  font-family: Monaco,Consolas,Lucida Console,monospace;
  color: var(--main-color);
  width: 100%;
}
@media only screen and (max-width: 933px) {
  .project {
    width: 80%;
    padding: 10px;
    margin-left: 10%;
  }
  .projectsContainer {
    width: 100%;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 452px) {
  .projectImage{
    display: none;
  }
}
</style>