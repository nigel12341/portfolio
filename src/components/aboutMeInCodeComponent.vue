<template>
  <div class="container">
    <div class="dots red"></div>
    <div class="dots yellow"></div>
    <div class="dots green"></div>
    <div class="terminal">
      <p class="command" id="overrideStyle">{{$t('aboutMeInCode.skills')}}</p>
      <p class="output">{{$t('aboutMeInCode.outputSkills')}}</p>
      <p class="command">{{ $t('aboutMeInCode.resume') }}</p>
      <p class="output"><a :href="linkToResume" target="_blank">"{{$t('aboutMeInCode.resumePdf')}}"</a></p>
      <p class="command">{{ $t('aboutMeInCode.interests') }}</p>
      <p class="output">{{$t('aboutMeInCode.outputInterests')}}</p>
      <p class="command">{{$t('aboutMeInCode.education')}}</p>
      <p class="output">{{$t('aboutMeInCode.outputEducation')}}</p>
      <p class="command">{{$t('aboutMeInCode.contactInfo')}}</p>
      <p class="output">[<a href="mailto:nigel@nigelchristiaans.nl">"nigel@nigelchristiaans.nl"</a>, <a
          href="https://www.linkedin.com/in/n-christiaans/">"LinkedIn"</a>, <a href="https://github.com/nigel12341">"Github"</a>]
      </p>
      <p class="command" id="typingAnimation">
        >
        <span class="npm">npm</span>
        {{ $t('aboutMeInCode.hire') }}
        <span class="packageName">@{{ $t('aboutMeInCode.nigelResumeNPM') }}</span>
        <span class="blink"> </span>
      </p>

    </div>
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
export default defineComponent({
  name: "aboutMeInCodeComponent",
  mounted() {
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
.terminal {
  padding: 10px;
  border-top: 30px solid var(--main-color);
  background-color: var(--background-color);
  border-radius: 10px 10px 5px 5px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.3);
}

.dots {
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  translate: 2px 7px;
  margin-left: 5px;
}

#overrideStyle {
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

.command {
  font-size: 1.2em;
  font-weight: 300;
  margin: 0;
  font-family: Monaco, Consolas, Lucida Console, monospace;
  padding-top: 1.8rem;
  padding-left: 15px;
  color: white;
}

.output {
  font-size: 1.2em;
  font-weight: 300;
  margin: 0;
  font-family: Monaco, Consolas, Lucida Console, monospace;
  color: var(--secondary-color);
  padding-left: 15px;
  padding-right: 30px;
  word-break: break-word;
}

.output > a {
  text-decoration: none;
  color: deepskyblue;
  cursor: pointer;
}

.output > a:hover {
  text-decoration: underline;
}

.npm {
  color: darkgoldenrod;
}

.packageName {
  color: yellowgreen;
}

.blink {
  display: inline-block;
  width: 11px;
  height: 20px;
  background-color: var(--secondary-color);
  animation: blink 1.1s steps(1, end) infinite;
  translate: 0 4px;
}
.container {
  margin-bottom: 5rem;
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