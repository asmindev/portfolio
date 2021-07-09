<template>
  <div>
    <h1 class="text-gray-800">Child</h1>
    <button class="bg-indigo-500 rounded p-4 text-white" @click="test">
      Click Me
    </button>
  </div>
</template>
<script>
import { onMounted } from 'vue'

export default {
  setup(props, { emit }) {
    const test = () => {
      emit('test', 'Dari child');
    };
    onMounted(test)
    return { test };
  },
};
</script>
