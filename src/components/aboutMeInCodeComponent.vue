<template>
  <div class="dots red"> </div>
  <div class="dots yellow"> </div>
  <div class="dots green"> </div>
<div class="container">
  <p class="command" id="overrideStyle">> Nigel.skills</p>
  <p class="output"> ["Java", "Vue", "Javascript", "HTML", "CSS", "Typescript", "MySQL", "NoSQL", "Cypress"]</p>
  <p class="command">> Nigel.interests</p>
  <p class="output">["Airsoft", "Motorcycle riding", "Gaming", "Chilling"]</p>
  <p class="command">> Nigel.education</p>
  <p class="output">"Second year HBO-ICT (Software Engineering) at the Amsterdam University of Applied Sciences."</p>
  <p class="command">> Nigel.resume</p>
  <a class="output" :href="linkToResume" target="_blank" >Resume.pdf</a>
  <p class="command">> Nigel.contactInfo</p>
  <p class="output">[<a href="mailto:nigel@nigelchristiaans.nl">"nigel@nigelchristiaans.nl"</a>, <a href="https://www.linkedin.com/in/n-christiaans/">"LinkedIn"</a>, <a href="https://github.com/nigel12341">"Github"</a>]</p>
  <p class="command">> <span class="blink"> </span></p>
</div>
</template>

<script lang="ts">
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {defineComponent} from "vue";
import {initializeApp} from "firebase/app";

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
    initializeApp(firebaseConfig);
    this.getLinkToResume();
  },
  methods: {
    async getLinkToResume() {
      const storage = getStorage();
      const storageRef = ref(storage, "Resume.pdf");
      this.linkToResume = await getDownloadURL(storageRef);
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
  padding: 10px;
  text-align: left;
  border-top: 30px solid var(--main-color);
  background-color: var(--background-color);
  border-radius: 10px 10px 5px 5px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.3);
}
.dots {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  translate: 1px 26px;
  margin-left: 5px;
}
#overrideStyle{
  padding-top: 0;
}
.red {
  background-color: #FF0000;
}
.yellow {
  background-color: #FFD700;
}
.green {
  background-color: #00FF00;
}
.command{
  font-size: 1.2em;
  font-weight: 300;
  margin: 0;
  font-family: Monaco,Consolas,Lucida Console,monospace;
  color: black;
  padding-top: 1.8rem;
  padding-left: 15px;
}
.output{
  font-size: 1.2em;
  font-weight: 300;
  margin: 0;
  font-family: Monaco,Consolas,Lucida Console,monospace;
  color: #9A0680;
  padding-left: 15px;
  padding-right: 30px;
}
.output > a {
  text-decoration: inherit;
  color: var(--main-color);
  cursor: pointer;
}
.blink {
  display: inline-block;
  width: 11px;
  height: 20px;
  background-color: var(--secondary-color);
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