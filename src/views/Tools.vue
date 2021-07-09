<template>
  <div class="w-full mb-12">
    <h1
      class="mt-12 text-2xl font-semibold uppercase text-center dark:text-gray-100 transition-colors duration-500"
    >
      Tools
    </h1>
    <div class="w-11/12 mx-auto md:flex">
      <Reel @result="resp" />
    </div>

    <div>
      <div v-if="isSuccess" class="w-10/12 h-4/6 mx-auto">
        <!--<img class="m-4" :src="'data:image/png;base64,' + img" />-->
        <video
          class="p-12"
          controls
          :src="'data:video/mp4;base64,' + video"
          type="video/mp4"
        />
        <div class="w-full my-6 flex justify-center">
          <a
            class="bg-indigo-500 rounded flex items-center gap-2 px-4 py-3 text-gray-100"
            :download="
              response['owner'] +
                response['caption'].slice(0, 15).replace(/ /g, '_') +
                '.mp4'
            "
            :href="'data:video/mp4;base64,' + video"
          >
            <i class="ri-download-2-line"></i>Download</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import Reel from '../components/InstagramReel.vue';

export default {
  components: {
    Reel,
  },
  setup() {
    const data = reactive({
      isSuccess: false,
      img: String,
      video: String,
      response: {},
    });
    const resp = (val) => {
      Object.assign(data, val);
    };
    return { resp, ...toRefs(data) };
  },
};
</script>
