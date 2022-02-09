<template>
  <div class="w-full mt-20">
    <div class="w-full flex justify-center flex-col">
      <div class="w-full p-4 mx-auto flex items-center">
        <h1
          class="px-2 text-4xl inline-block font-bold text-center border-b-2 border-indigo-500 mx-auto pb-1"
        >
          List API
        </h1>
      </div>
      <div class="w-11/12 md:w-full mx-auto">
        <div class="flex justify-center flex-col md:flex-row">
          <div class="w-full md:w-1/2 px-4 py-2">
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Instagram from '../components/api/instagram.vue'

export default {
  components: {
    Instagram,
  },
}
</script>
