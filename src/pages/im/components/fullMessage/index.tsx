import Avatar from '@imCmp/avatar/avatar';
import { IN } from '@imCmp/constants';
import styles from '@imCmp/fullMessage/index.less';
import { Member, Message, MessageType } from '@imCmp/interface';
import type { Pos } from '@imCmp/menu';
import Menu from '@imCmp/menu';
import classnames from 'classnames';
import React, { MouseEventHandler, ReactElement, useState } from 'react';

/**
 * 带头像的消息项
 */
interface Props {
  member: Member;
  message: Message;
  children: ReactElement;
  style?: Record<string, string>;
}
export default function FullMessage(props: Props) {
  const [pos, setPos] = useState<Pos>({ top: 0, left: 0 });
  const [showMenu, toggleMenu] = useState(false);
  if (props.message.type === MessageType.SYSTEM) {
    if (typeof props.message.message !== 'string') {
      return null;
    }
    return (
      <div className={styles.system}>
        <div className={styles.systemText}>{props.message.message}</div>
      </div>
    );
  }
  const showCustomMenu: MouseEventHandler<HTMLDivElement> = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (props.message.type === 'system') {
      return;
    }
    e.preventDefault();
    setPos({
      top: e.pageY,
      left: e.pageX,
    });
    toggleMenu(true);
  };
  const onCloseMenu = () => toggleMenu(false);
  const isIn = props.message.sendType === IN;
  const box = classnames({
    [styles.in]: isIn,
    [styles.out]: !isIn,
    [styles.box]: true,
  });
  const nameBoxClass = classnames({
    'flex flex-col': true,
    'ml-2': isIn,
    'mr-2': !isIn,
  });
  const nameClass = classnames({
    'text-xs text-gray-300 m-0': true,
    'text-right': !isIn,
  });
  const name = props.member.nickname || props.member.name;
  return (
    <div className={box}>
      <Avatar info={props.member} />
      <div className={nameBoxClass}>
        <p className={nameClass}>{name}</p>
        {showMenu ? <Menu message={props.message} pos={pos} onCloseMenu={onCloseMenu} /> : null}
        <div onContextMenu={showCustomMenu} style={props.style} className={styles.msgBox}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
