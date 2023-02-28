<template>
  <div class="introContainer">
    <div v-once class="nameContainer">
      > Nigel Christiaans
      <span class="blink"> </span>
    </div>
    <p class="shortIntro">{{ $t('introduction.shortIntro') }}
    </p>
    <p class="shortIntro">{{ $t('introduction.shortIntro2') }}</p>
  </div>
</template>

<script>


export default {
  name: "introductionComponent",
}
</script>

<style scoped>
.introContainer {
  margin-bottom: 5rem;
  padding: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color : var(--secondary-color);
}
.blink {
  display:inline;
  position: absolute;
  float: right;
  width: 30px;
  height: 45px;
  background-color: var(--secondary-color);
  animation: blink 1.1s steps(1, end) infinite;
  transform: translate(0, 15px);
}
.nameContainer{
  font-size: 3em;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-family: Monaco,Consolas,Lucida Console,monospace;
  color: var(--main-color);
  width: 100%;
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
span{
  margin-left: 5px;
}
.shortIntro {
font-size: 1.2em;

  margin: 0;
  font-family: Monaco,Consolas,Lucida Console,monospace;
  color: var(--secondary-color);
  padding-top: 1.8rem;
  padding-left: 15px;
}

@media only screen and (max-width: 1040px) {
  .nameContainer{
    font-size: 2em;
  }
  .blink {
    width: 20px;
    height: 35px;
    transform: translate(0, 2px);
  }
}
@media only screen and (max-width: 699px) {
  .nameContainer{
    font-size: 1.5em;
  }
  .blink {
    width: 15px;
    height: 25px;
    transform: translate(0, 3px);
  }
}
</style>