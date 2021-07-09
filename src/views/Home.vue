<template>
  <div class="w-full mx-auto h-screen">
    <div
      class="h-full flex justify-center items-center md:justify-start text-gray-700 dark:text-gray-100"
    >
      <div class="px-4 w-full antialiased md:w-1/2">
        <h1 class="text-2xl font-semibold md:text-3xl">
          Hi there 👋,
        </h1>
        <h1 class="text-3xl font-bold md:text-4xl">I am Front-end Dev.</h1>
        <div class="text-sm font-medium mt-2 md:text-md">
          <p
            id="writer"
            class="leading-4 inline h-2 border-r-2 border-gray-700"
          >
            {{ text }}
          </p>
          <div class="p-8 mt-4">
            <a class="text-4xl text-center w-full inline-block" href="https://github.com/asmin-dev" target="_blank">
              <i class="ri-github-fill"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      text: '',
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      const writer = 'Hi i am Asmin, Live in Watabea. Focused on building beautiful and awesome websites. ';
      if (this.counter !== writer.length) {
        this.text += writer[this.counter];
        this.counter += 1;
      }
    }, 100);

    document.querySelector('title').innerText = 'Asmin portofolio';
    anime({
      targets: '.tr',
      translateX: 30,
      easing: 'easeOutElastic(2, .5)',
      duration: 1000,
      direction: 'alternate',
      endDelay: 0,
      delay: anime.stagger(50),
    });
  },
};
</script>

<style scoped>
.border-r-2 {
  animation: typing 4s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    @apply border-transparent;
  }
  50% {
    @apply border-indigo-500 dark:border-gray-100;
  }
}
</style>
