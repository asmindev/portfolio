<template>
  <div class="flex justify-center items-center">
    <svg
      @click="selectTheme('dark')"
      :class="{ hidden: theme === 'dark' }"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      />
    </svg>
    <svg
      @click="selectTheme('light')"
      :class="{ hidden: theme === 'light' }"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>
<script>
const moment = require('moment')
const { ref, onMounted } = require('vue')

export default {
  props: { msg: String },
  setup() {
    const theme = ref(localStorage.getItem('theme') ?? 'light')
    const time = ref(moment().format(moment.HTML5_FMT.TIME_SECONDS))
    setInterval(() => {
      time.value = moment().format(moment.HTML5_FMT.TIME_SECONDS)
    }, 1000)
    const selectTheme = (value) => {
      theme.value = value
      localStorage.setItem('theme', value)
      const root = document.querySelector('html').classList
      root.add(localStorage.getItem('theme'))
      if (value === 'dark') {
        root.remove('light')
      } else {
        root.remove('dark')
      }
    }
    const mount = () => {
      // ketika sistem browser dalam keadaan darkmode ataupun localStorage.theme === dark
      // prettier-ignore
      if (localStorage.getItem('theme') === 'dark' || (localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.querySelector('html').classList.add('dark')
        localStorage.setItem('theme', 'dark')
        theme.value = localStorage.getItem('theme')
      } else {
        localStorage.setItem('theme', 'light')
        document.querySelector('html').classList.add('light')
      }
    }
    onMounted(() => {
      mount()
    })
    return { theme, time, selectTheme }
  },
}
</script>
