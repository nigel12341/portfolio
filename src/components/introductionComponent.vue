<template>
  <div class="container">
    <h1 id="name">> Nigel Christiaans<span class="blink"> </span></h1>
    <p id="shortIntro"> I am a second year Software Engineering student at the Amsterdam University of Applied Sciences. My passion is to create software that is easy to use and that solves real world problems.
    </p>
    <p>Check out my projects to see what I have been working on.</p>
  </div>
</template>

<script>


export default {
  name: "introductionComponent",
}
</script>

<style scoped>
#name {
  font-size: 3em;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-family: Monaco,Consolas,Lucida Console,monospace;
  color: var(--main-color);
}
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
  color : var(--secondary-color);
}
.blink {
  display: inline-block;
  width: 30px;
  height: 45px;
  background-color: var(--secondary-color);
  animation: blink 1.1s steps(1, end) infinite;
  translate: 0 8px;
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
</style>