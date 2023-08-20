<script setup lang="ts">
import TypeEffect from "./TypeEffect.vue"
</script>

<template>
    <div class="flex flex-col h-[95vh]" id="hero">
        <span class="text-[20px] md:text-[34px] font-monospace text-blue-200 font-bold mt-40 md:mt-52">Hello World! My name is</span>
        <span class="text-[50px] md:text-[85px] font-gilroy text-white font-bold mt-10 md:mt-2">Jason Christopher</span>

        <!-- Typing text -->
        <!-- <div class="flex flex-row md:flex-row mt-8 gap-1 md:gap-6">
            <span class="text-[20px] md:text-[34px] font-metropolis text-white font-semibold">I'm a</span>
            <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=30&duration=4000&pause=1000&color=FFCB64&width=550&lines=Fullstack+Developer+;Computer+Science+Student;Teaching+Enthusiast;Web+and+Mobile+App+Developer;Aviation+Enthusiast+%E2%9C%88%EF%B8%8F" class="mt-2.5 ml-14 md:ml-5" alt="Typing SVG" />
        </div> -->
        <TypeEffect />
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- src: https://dev.to/gayathri_r/how-to-add-a-typewriter-animation-in-vuejs-43kj -->
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 6rem;
  font-weight: normal;
  span.typed-text {
    color: #d2b94b;
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 6rem;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
// Cursor blinking CSS Ends...
</style>