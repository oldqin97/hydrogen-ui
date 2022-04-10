<!--
 * @Author: qin
 * @Date: 2022-04-10 21:55:42
 * @LastEditTime: 2022-04-10 23:39:56
 * @FilePath: \my-ui-lib\my-ui\src\components\loading.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div>
    <button @click="handle">111</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import Loading from '../../lib/Loading/index';
export default defineComponent({
  name: 'loading',
  setup() {
    const show = ref(false);

    return {
      show,
    };
  },
  methods: {
    handle() {
      let close = Loading({
        
      });
      setTimeout(() => {
        close();
      }, 5000);
    },
  },
});
</script>

<style lang="scss" scoped></style>
