<!--
 * @Author: qin
 * @Date: 2022-04-10 15:07:41
 * @LastEditTime: 2022-04-10 19:26:35
 * @FilePath: \my-ui-lib\my-ui\lib\message\src\Message.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <transition name="slide">
    <div
      :class="['h-message', customClass]"
      :style="style[type]"
      v-if="show"
    >
      <i class="iconfont" :class="[style[type].iconfont]"></i>
      <span class="text">{{ text }}</span>
    </div>
  </transition>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Message',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
    customClass: {
      type: String,
    },
    iconfont: {
      type: String,
    },
    timeout: {
      type: Number,
      default: 3000,
    },
    textColor: {
      type: String,
    },
    bgColor: {
      type: String,
    },
  },
  setup(props) {
    const show = ref(false);
    const style = ref({
      info: {
        iconfont: props.iconfont || 'icon-info',
        color: '#7a7374',
        backgroundColor: '#e2e1e4',
        borderColor: '#e2e1e4',
      },
      warn: {
        iconfont: props.iconfont || 'icon-warning',
        color: '#fc8c23',
        backgroundColor: '#f2e7e5',
        borderColor: '#f2e7e5',
      },
      error: {
        iconfont: props.iconfont || 'icon-error',
        color: '#c02c38',
        backgroundColor: '#f0c9cf',
        borderColor: '#f0c9cf',
      },
      success: {
        iconfont: props.iconfont || 'icon-success',
        color: '#207f4c',
        backgroundColor: '#a4cab6',
        borderColor: '#a4cab6',
      },
      customize: {
        iconfont: props.iconfont,
        color: props.textColor,
        backgroundColor: props.bgColor,
        borderColor: props.bgColor,
      },
    });

    onMounted(() => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, props.timeout - 1000);
    });

    return { show, style };
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
@import './assets/font/iconfont.css';

.slide-enter-active {
  animation: fade-in-top 0.5s ease-out both;
}

.slide-leave-active {
  animation: fade-in-top 0.5s ease-out reverse both;
}
@keyframes fade-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.h-message {
  position: fixed;
  top: 20px;
  left: 50%;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: auto;
  min-height: 50px;
  padding: 10px 15px;
  border: 1px solid #eee;
  background-color: #f5f5f5;
  color: #777;
  border-radius: 5px;
  i {
    margin-right: 5px;
    font-size: 15px;
  }
  .text {
    font-size: 15px;
    line-height: 22px;
  }
}
</style>
