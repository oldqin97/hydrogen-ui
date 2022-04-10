/*
 * @Author: qin
 * @Date: 2022-04-10 19:34:58
 * @LastEditTime: 2022-04-11 03:25:56
 * @FilePath: \my-ui-lib\my-ui\lib\Loading\index.js
 *  -> The best way to explain it is to do it
 */

import { h, render } from 'vue';

import Loading from './src/Loading.vue';

const loading = ({
  show,
  text,
  iconfont,
  img,
  textColor,
  bgColor,
  showIcon,
}) => {
  const oDiv = document.createElement('div');
  document.body.appendChild(oDiv);

  let instance = null;

  const vNode = h(Loading, {
    show,
    text,
    iconfont,
    img,
    textColor,
    bgColor,
    showIcon,
    onVnodeBeforeMount(cpn) {
      instance = cpn;
    },
  });

  render(vNode, oDiv);
  const close = () => {
    instance.component.proxy.handle();
    setTimeout(() => {
      render(null, oDiv);
      document.body.removeChild(oDiv);
    }, 1000);
  };
  
  return close;
};

export default loading;
