/*
 * @Author: qin
 * @Date: 2022-04-10 19:34:58
 * @LastEditTime: 2022-04-10 23:40:52
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

  const vNode = h(Loading, {
    show,
    text,
    iconfont,
    img,
    textColor,
    bgColor,
    showIcon,
  });

  render(vNode, oDiv);

  const close = () => {
    render(null, oDiv);
    document.body.removeChild(oDiv);
  };

  return close;
};

export default loading;
