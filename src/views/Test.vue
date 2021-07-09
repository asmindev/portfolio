<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div><Test @test="find" /></div>
  </div>
</template>
<script>
import Test from '../components/Test.vue';

export default {
  components: {
    Test,
  },
  setup() {
    const find = (val) => console.log(val);
    return { find };
  },
};
</script>
