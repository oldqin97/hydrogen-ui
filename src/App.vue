<!--
 * @Author: qin
 * @Date: 2022-04-10 15:05:06
 * @LastEditTime: 2022-04-11 02:47:29
 * @FilePath: \my-ui-lib\my-ui\src\App.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="box">
    <!-- <message /> -->
    <loading />
  </div>
</template>

<script>
import message from './components/message.vue';
import Loading from './components/loading.vue';
export default {
  name: 'App',
  components: { message, Loading },
};
</script>

<style lang="scss">
.box {
  width: 300px;
  height: 300px;
  padding: 100px;
  border: 1px solid #eee;
  margin: 0 auto;
}
</style>
