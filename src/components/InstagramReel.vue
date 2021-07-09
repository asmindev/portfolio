<template>
  <div
    class="p-4 flex justify-center flex-col rounded shadow-md dark:bg-gray-700 dark:text-gray-100 smooth"
  >
    <h1 class="mt-8 my-4 text-lg font-semibold uppercase text-center">
      Instagram Reel downloader
    </h1>
    <div class="p-8">
      <div class="relative text-gray-700">
        <input
          :class="
            isEmpty
              ? 'border-red-500 ring-2 ring-red-300 dark:ring-red-400 placeholder-red-300'
              : 'border-indigo-500'
          "
          v-model="url"
          class="watch dark:bg-gray-200 shadow w-full h-10 pl-3 pr-14 text-sm text-indigo-700 placeholder-gray-600 rounded focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-300"
          type="text"
          :placeholder="isEmpty ? 'Dont blank' : 'Instagram reel'"
        />
        <button
          @click="onSubmit"
          :class="{
            hidden: loader,
            'bg-red-500': isEmpty,
            'bg-indigo-500': !isEmpty,
          }"
          class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white rounded-r  focus:outline-none"
        >
          <i class="ri-search-2-line" />
        </button>
        <span
          :class="{ hidden: !loader }"
          class="bg-indigo-500 absolute inset-y-0 right-0 flex items-center px-3 font-bold text-white rounded-r"
        >
          <i class="text-2xl animate-spin inline-block ri-loader-5-fill" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { toRefs, reactive, onMounted } from 'vue';

export default {
  setup(props, { emit }) {
    const data = reactive({
      url: '',
      response: {},
      loader: false,
      isEmpty: false,
    });
    const toParent = reactive({
      isSuccess: false,
      img: String,
      video: String,
      response: {},
    });
    const onSubmit = () => {
      if (data.url !== '') {
        data.loader = true;
        axios
          .post('https://asmin.pythonanywhere.com/api/instagram/reel', {
            url: data.url,
            base64: true,
          })
          .finally(() => {
            data.loader = false;
          })
          .then((resp) => {
            toParent.response = resp.data;
            toParent.img = resp.data.img_base64;
            toParent.video = resp.data.video_base64;
            toParent.isSuccess = true;
            emit('result', toParent);
          })
          .catch((e) => console.log(e));
      } else {
        data.isEmpty = true;
      }
    };
    onMounted(() => {
      const input = document.querySelector('input.watch');
      input.addEventListener('input', () => {
        data.isEmpty = false;
      });
    });
    return {
      onSubmit,
      ...toRefs(data),
    };
  },
};
</script>
