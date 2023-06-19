import { omit } from 'lodash-es';
import { Richtext } from './im/components/interface';

/**
 * 获取文件后缀名
 */
export const getSuffix = (str: string) => /[^.]*$/g.exec(str)?.[0] || '';

/**
 * 获取带suffix的文件名
 */
export const getFileName = (str: string) =>
  (/[^/]*(?=\?)/g.exec(str) || /[^/]*$/g.exec(str))?.[0] || '';

/**
 * 递归创建元素
 */
export const createElement = (elementMap: Richtext | string) => {
  if (typeof elementMap === 'string') {
    return document.createTextNode(elementMap);
  }
  const node = document.createElement(elementMap.type);
  const props = omit(elementMap, ['type', 'children']);
  Object.entries(props).forEach(([key, value]) => {
    node.setAttribute(key, objToString(value));
  });
  if (elementMap.children) {
    const nodes = elementMap.children.map((el) => createElement(el));
    nodes.forEach((one) => node.appendChild(one));
  }
  return node;
};
/**
 * 通过元素递归创建元素数组
 */
export const createElementMap = (element: Element): Richtext => {
  if (!(element instanceof HTMLElement)) {
    return { type: 'span' };
  }
  const type: any = element.tagName.toLocaleLowerCase();
  const attributes = getAllAttributes(element);
  const children = element.children;
  return {
    type,
    ...attributes,
    children: children.length
      ? [...children].map((one) => createElementMap(one))
      : [element.innerText],
  };
};

/**
 * 获取dom元素的所有属性，并返回{属性: 属性值}
 */
export const getAllAttributes = (element: HTMLElement): Record<string, any> => {
  const attributes = [...element.attributes].map((i) => i.name);
  return Object.fromEntries(attributes.map((attr) => [attr, element.getAttribute(attr)]));
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

/**
 * file转blob
 */
export function fileToBlob(file: File): Promise<Blob> {
  // 创建 FileReader 对象
  const reader = new FileReader();
  return new Promise((resolve) => {
    // FileReader 添加 load 事件
    reader.addEventListener('load', (e) => {
      let blob: any;
      if (typeof e.target?.result === 'object' && e.target?.result) {
        blob = new Blob([e.target?.result]);
      } else {
        blob = e.target?.result;
      }
      resolve(blob);
    });
    // FileReader 以 ArrayBuffer 格式 读取 File 对象中数据
    reader.readAsArrayBuffer(file);
  });
}

export async function fileToBlobUrl(file: File) {
  const blob: Blob = await fileToBlob(file);
  return URL.createObjectURL(blob);
}
