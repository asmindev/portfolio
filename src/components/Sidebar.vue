<template>
  <nav class="h-screen shadow-lg bg-indigo-500 text-white">
    <div
      class="transition-all duration-150 flex md:-ml-0 md:w-3/12"
      :class="isOpen ? '-ml-0' : '-ml-12'"
    >
      <div class="flex flex-col mt-24 justify-center items-center">
        <Theme class="rounded-md w-8 h-8 bg-indigo-400 mb-10" />
        <div class="flex flex-col">
          <router-link to="/" class="relative">
            <span class="p-3 block md:flex">
              <i class="text-indigo-300 text-2xl ri-home-2-line"></i>
              <h1 class="hidden md:block mx-2">Home</h1>
            </span>
          </router-link>
          <router-link to="/api" class="relative">
            <span class="p-3 block md:flex">
              <i class="text-indigo-300 text-2xl ri-code-s-slash-fill"></i>
              <h1 class="hidden md:block mx-2">API</h1>
            </span>
          </router-link>
          <router-link to="/tools" class="relative">
            <span class="p-3 block md:flex">
              <i class="text-indigo-300 text-2xl ri-tools-fill"></i>
              <h1 class="hidden md:block mx-2">Tools</h1>
            </span>
          </router-link>
          <router-link to="/skill" class="relative">
            <span class="p-3 block md:flex">
              <i class="text-indigo-300 text-2xl ri-stack-line"></i>
              <h1 class="hidden md:block mx-2">Skill</h1>
            </span>
          </router-link>
          <router-link to="/about" class="relative">
            <span class="p-3 block md:flex">
              <i class="text-indigo-300 text-2xl ri-user-line"></i>
              <h1 class="hidden md:block mx-2">About</h1>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Theme from './DarkModeToggle.vue'

export default {
  components: {
    Theme,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const change = () => {
      emit('change', false)
    }
    return { change }
  },
}
</script>
<style scoped>
.router-link-exact-active span i {
  @apply text-white;
}
.router-link-exact-active::before {
  background-color: #fff;
  content: '';
  position: absolute;
  left: -2px;
  top: 0;
  height: 100%;
  height: 100%;
  border: 2px solid white;
}
</style>
