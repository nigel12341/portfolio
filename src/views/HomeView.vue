<template>
  <div class="mainView">
    <img id="backToTop" src="/UpArrow.svg" alt="^" v-if="atTheTop && notMobile" @click="scrollToTop"/>
    <LanguageSwitcher id="langSwitch"/>
    <introduction-component/>
    <about-me-in-code-component/>
    <hr>
    <projects-component/>
    <hr>
    <contact-component/>
    <p v-once id="copyright">Copyright (c) Nigel Christiaans 2023-2024</p>
  </div>
</template>

<script lang="ts">
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { defineComponent } from "vue";
import IntroductionComponent from "@/components/introductionComponent.vue";
import AboutMeInCodeComponent from "@/components/aboutMeInCodeComponent.vue";
import ProjectsComponent from "@/components/projectsComponent.vue";
import ContactComponent from "@/components/contactComponent.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ContactComponent, ProjectsComponent, AboutMeInCodeComponent, IntroductionComponent, LanguageSwitcher},
  created() {
    document.title = "Nigel Christiaans";
    const firebaseConfig = {
      apiKey: "AIzaSyA1NKwaKsQDzHWZ0Beio6blT8xoQy0BqmQ",
      authDomain: "portfolio-website-2003.firebaseapp.com",
      projectId: "portfolio-website-2003",
      storageBucket: "portfolio-website-2003.appspot.com",
      messagingSenderId: "732238214166",
      appId: "1:732238214166:web:606c6978ff67fdee55f137",
      measurementId: "G-HE3STT9C9K"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Analytics and get a reference to the service
    getAnalytics(app);
    this.checkScrollPosition();
    if(window.innerWidth < 940) {
      this.notMobile = false;
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    checkScrollPosition() {
      window.addEventListener('scroll', () => {
        const halfPageHeight = document.body.scrollHeight / 4 ;
        this.atTheTop = window.scrollY > halfPageHeight;
      })
    }
  },
  data() {
    return{
      atTheTop: false,
      notMobile: true,
    }
  }
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
  padding-top: 50px;
  background-color: var(--background-entire-color);
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
#copyright {
  color: white;
}
@media screen and (min-width: 2006px) {
  #langSwitch {
    position: sticky;
    top: 2rem;
  }
}
#backToTop {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 72px;
  height: 72px;
  background-color: var(--background-entire-color);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border: 4px solid var(--main-color);
  border-radius:50%;
}

</style>