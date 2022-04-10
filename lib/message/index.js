/*
 * @Author: qin
 * @Date: 2022-04-10 15:07:26
 * @LastEditTime: 2022-04-10 19:47:09
 * @FilePath: \my-ui-lib\my-ui\lib\message\index.js
 *  -> The best way to explain it is to do it
 */

import { h, render } from 'vue';
import HMessage from './src/Message.vue';

const message = ({
  text,
  type,
  timeout,
  iconfont,
  customClass,
  textColor,
  bgColor,
}) => {
  const oDiv = document.createElement('div');
  let timer = null;

  oDiv.setAttribute('class', 'h-message-wrapper');

  document.body.appendChild(oDiv);

  const vNode = h(HMessage, {
    text,
    type,
    timeout,
    iconfont,
    customClass,
    textColor,
    bgColor,
  });

  render(vNode, oDiv);

  clearTimeout(timer);

  timer = setTimeout(() => {
    render(null, oDiv);
    document.body.removeChild(oDiv);
    clearTimeout(timer);
  }, timeout ?? 2500);
};

export default message;
