<!--
 * @Author: qin
 * @Date: 2022-04-10 19:35:14
 * @LastEditTime: 2022-04-11 03:23:46
 * @FilePath: \my-ui-lib\my-ui\lib\Loading\src\Loading.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <transition name="fade">
    <div
      v-show="tag"
      class="h-loading-wrapper"
      :style="{ 'background-color': bgColor, position: 'fixed' }"
    >
      <div class="h-loading" :style="{ color: textColor }">
        <i
          :class="['iconfont', iconfont, 'h-loading-icon']"
          v-if="showIcon && img === ''"
        ></i>
        <img :src="img" v-if="img !== ''" class="h-loading-img" />
        <span class="h-loading-text">{{ text }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Loading',
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: '正在加载...',
    },
    iconfont: {
      type: String,
      default: 'icon-loading',
    },
    img: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '#fff',
    },
    bgColor: {
      type: String,
      default: 'rgba(0,0,0,0.5)',
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const tag = ref(false);

    const handle = () => {
      tag.value = !tag.value;
    };

    onMounted(() => {
      handle();
    });

    return {
      tag,
      handle,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './assets/font/iconfont.css';

.fade-enter-active {
  animation: fade-in 0.5s ease-out both;
}
.fade-leave-active {
  animation: fade-in 0.5s ease-out reverse both;
}

.h-loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100000;
  width: 100%;
  height: 100%;
  .h-loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    color: #fff;
    text-align: center;
    .h-loading-icon {
      font-size: 20px;
      animation: iconfont-rotate 1s linear infinite;
    }
    .h-loading-img {
      display: block;
      width: 20px;
      height: 20px;
      object-fit: contain;
      animation: iconfont-rotate 1s linear infinite;
    }
    .h-loading-text {
      margin-top: 10px;
      font-size: 15px;
      letter-spacing: 5px;
      animation: text-in-expand 1s linear infinite alternate both;
    }
  }
}
@keyframes iconfont-rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes fade-in {
  0% {
    transform: translateZ(-100px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}

@keyframes text-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
