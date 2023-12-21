/**
 * 消息菜单组件
 */
import { Message } from '@imCmp/interface';
import styles from '@imCmp/menu/index.less';
import React, { useEffect } from 'react';

export interface Pos {
  top: React.MouseEvent<HTMLDivElement>['pageX'];
  left: React.MouseEvent<HTMLDivElement>['pageY'];
}

export interface MenuProps {
  /** 消息对象 */
  message: Message;
  /** 菜单弹出位置 */
  pos: Pos;
  /** 隐藏菜单弹框 */
  onCloseMenu(): void;
}

export default function Menu(props: MenuProps) {
  const onCopy = () => {
    console.log('复制成功');
  };
  const onQuote = () => {};
  const onTranslate = () => {};
  const onMultipleChoice = () => {};
  const onForward = () => {};
  const onFavorite = () => {};
  const menuList = [
    {
      text: '复制',
      action: onCopy,
    },
    {
      text: '引用',
      action: onQuote,
    },
    {
      text: '翻译',
      action: onTranslate,
    },
    {
      text: '多选',
      action: onMultipleChoice,
    },
    {
      text: '转发',
      action: onForward,
    },
    {
      text: '收藏',
      action: onFavorite,
    },
  ];
  const internalHandle = (e: MouseEvent) => {
    props.onCloseMenu();
  };
  useEffect(() => {
    document.addEventListener('click', internalHandle);
    return () => document.removeEventListener('click', internalHandle);
  }, []);
  const actionUnion = (action: () => void) => {
    action?.();
    props.onCloseMenu();
  };
  return (
    <div className={styles.menu} style={props.pos}>
      {menuList.map((one) => (
        <div className={styles.item} onClick={() => actionUnion(one.action)}>
          {one.text}
        </div>
      ))}
    </div>
  );
}

function getAllAncestors(element: HTMLElement | null) {
  if (element === null) {
    return [];
  }
  var ancestors = [];
  var currentElement = element.parentElement;

  while (currentElement !== null) {
    ancestors.push(currentElement);
    currentElement = currentElement.parentElement;
  }

  return ancestors;
}
