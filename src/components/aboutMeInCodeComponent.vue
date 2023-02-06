<template>
<div class="container">
  <p>> Nigel.skills</p>
  <p> ["Java", "Vue", "Javascript", "HTML", "CSS", "Typescript", "MySQL", "NoSQL", "Cypress"]</p>
  <p>> Nigel.interests</p>
  <p>["Airsoft", "Motorcycle riding", "Gaming", "Chilling"]</p>
  <p>> Nigel.education</p>
  <p>"Second year HBO-ICT (Software Engineering) at the Amsterdam University of Applied Sciences."</p>
  <p>> Nigel.resume</p>
  <a :href="linkToResume" target="_blank" >CV</a>
  <p>> Nigel.contactInfo</p>
  <p>[<a href="mailto:nigel@nigelchristiaans.nl">"nigel@nigelchristiaans.nl"</a>, <a href="https://www.linkedin.com/in/n-christiaans/">"LinkedIn"</a>, <a href="https://github.com/nigel12341">"Github"</a>]</p>
  <p>> <span class="blink"> </span></p>
</div>
</template>

<script lang="ts">
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {defineComponent} from "vue";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA1NKwaKsQDzHWZ0Beio6blT8xoQy0BqmQ",
  authDomain: "portfolio-website-2003.firebaseapp.com",
  projectId: "portfolio-website-2003",
  storageBucket: "portfolio-website-2003.appspot.com",
  messagingSenderId: "732238214166",
  appId: "1:732238214166:web:606c6978ff67fdee55f137",
  measurementId: "G-HE3STT9C9K"
};
export default defineComponent ({
  name: "aboutMeInCodeComponent",
  created() {

    const app = initializeApp(firebaseConfig);
    this.getLinkToResume();
  },
  methods: {
    async getLinkToResume() {
      const storage = getStorage();
      const storageRef = ref(storage, "Resume.pdf");
      const link = await getDownloadURL(storageRef);
      this.linkToResume = link;
    },
  },
  data() {
    return {
      linkToResume: "",
    }
  }
})

</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: flex-start;
}
.blink {
  display: inline-block;
  width: 11px;
  height: 20px;
  background-color: #79018C;
  animation: blink 1.1s steps(1, end) infinite;
  translate: 0 4px;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>