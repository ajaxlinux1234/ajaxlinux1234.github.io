import { omit } from 'lodash-es';
import { Richtext } from './im/components/interface';

/**
 * 获取文件后缀名
 */
export const getSuffix = (str: string) => /[^.]*$/g.exec(str)?.[0] || '';

/**
 * 获取带suffix的文件名
 */
export const getFileName = (str: string) => /[^/]*$/g.exec(str)?.[0] || '';

/**
 * 递归创建元素
 */
export const createElement = (element: Richtext | string) => {
  if (typeof element === 'string') {
    return document.createTextNode(element);
  }
  const node = document.createElement(element.type);
  const props = omit(element, ['type', 'children']);
  Object.entries(props).forEach(([key, value]) => {
    node.setAttribute(key, objToString(value));
  });
  if (element.children) {
    const nodes = element.children.map((el) => createElement(el));
    nodes.forEach((one) => node.appendChild(one));
  }
  return node;
};
/**
 * 对象转字符串
 */
export const objToString = (obj: any) => {
  if (typeof obj !== 'object') {
    return obj;
  }
  return Object.entries(obj)
    .map(([key, value]) => `${camelToDash(key)}:${value};`)
    .join('');
};

/**
 * 驼峰转横线
 */
export function camelToDash(str: string) {
  return str.replace(/[A-Z]/g, function (item: string) {
    return '-' + item.toLowerCase();
  });
}
/**
 * dom转dom字符串
 * @param element
 * @returns
 */
export const nodeToString = (element: HTMLElement | string) => {
  if (typeof element === 'string') {
    return element;
  }
  const div = document.createElement('div');
  div.appendChild(element);
  return div.innerHTML;
};
