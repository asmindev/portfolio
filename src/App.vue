<template>
  <main class="font-mono overflow-hidden">
    <div class="flex">
      <Sidebar :isOpen="isOpen" @change="onChange" />
      <div class="container mx-auto relative">
        <div class="p-2 w-full md:hidden absolute flex gap-1 items-center">
          <button @click="toggle" class="focus:outline-none">
            <svg
              :class="isOpen ? 'hidden' : 'block'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <svg
              :class="isOpen ? 'block' : 'hidden'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-indigo-500 dark:text-indigo-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
          <!--<h1 class="uppercase font-bold text-base tracking-widest">Asmin</h1>-->
        </div>
        <router-view class="p-2" />
      </div>
    </div>
    <Footer />
  </main>
</template>
<script>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Sidebar,
    Footer,
  },
  setup() {
    const isOpen = ref(false)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }
    const onChange = (val) => {
      isOpen.value = val
    }
    return { isOpen, toggle, onChange }
  },
}
</script>
<style>
.theme {
  @apply text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-100;
}
.smooth {
  @apply transition-colors duration-500;
}
</style>
