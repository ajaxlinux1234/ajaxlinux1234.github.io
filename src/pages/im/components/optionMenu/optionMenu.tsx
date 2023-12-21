/**
 * 左侧个人信息，聊天，通讯录，收藏菜单
 */
// @ts-ignore
import avatar from '@assets/avatar.jpg';
import { ReactElement } from 'react';
import styles from '@imCmp/optionMenu/optionMenu.less';
import Avatar from '@imCmp/avatar/avatar';
import classnames from 'classnames';
import { useModel } from 'umi';

export interface MenuProps {
  /** 菜单key */
  key: 'personal' | 'chat' | 'addressBook' | 'star';
  /** 菜单图标 */
  icon: (() => ReactElement) | string | 'icon-a-chat1' | 'icon-tongxunlu' | 'icon-shoucang';
  /** 菜单动作函数 */
  action: () => void;
}

export default function OptionMenu() {
  const personalInfo = {
    id: '1',
    name: '1',
    avatar,
  };
  const { activeMenu, setActiveMenu } = useModel('im.global');
  const menus: MenuProps[] = [
    {
      key: 'personal',
      icon: () => <Avatar info={personalInfo} />,
      action: openPersonal,
    },
    {
      key: 'chat',
      icon: 'icon-a-chat1',
      action: onChatActive,
    },
    {
      key: 'addressBook',
      icon: 'icon-tongxunlu',
      action: onAddressBookActive,
    },
    {
      key: 'star',
      icon: 'icon-shoucang',
      action: onStarActive,
    },
  ];

  function openPersonal() {}

  function onChatActive() {}

  function onAddressBookActive() {}

  function onStarActive() {}

  function menuOpts(menu: MenuProps) {
    setActiveMenu(menu.key);
  }

  return (
    <ul className={styles['option-menu']}>
      {menus.map((one) => {
        const strIcon = typeof one.icon === 'string';
        const iconClass = strIcon ? classnames('iconfont', one.icon) : '';
        const iconBoxClass = classnames(
          styles['option-menu-item'],
          one.key === activeMenu && styles['option-menu-item-active'],
        );
        return (
          <li className={iconBoxClass} key={one.key} onClick={() => menuOpts(one)}>
            {/* @ts-ignore */}
            {strIcon ? <i className={iconClass}></i> : one.icon()}
          </li>
        );
      })}
    </ul>
  );
}
