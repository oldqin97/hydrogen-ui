<!--
 * @Author: qin
 * @Date: 2022-04-10 21:52:59
 * @LastEditTime: 2022-04-10 23:00:27
 * @FilePath: \my-ui-lib\my-ui\src\components\message.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div>
    <button @click="handleClick">click</button>
    <button @click="custom">custom</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Message from '../../lib/message';

export default defineComponent({
  name: 'message',
  setup() {
    const handleClick = () => {
      const test = Message({
        // text: '这是测试消息',
        // type: 'success',
        // iconfont: 'icon-test',
      });
    };
    const custom = () => {
      Message({
        text: 'custom',
        type: 'customize',
        iconfont: 'icon-test',
        textColor: '#000',
        bgColor: '#e19af3',
      });
    };

    return {
      handleClick,
      custom,
    };
  },
});
</script>

<style lang="scss" scoped></style>
