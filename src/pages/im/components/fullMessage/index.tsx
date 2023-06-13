import { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './index.less';
import { Member, Message, MessageType } from '../interface';
import { IN } from '../constants';
import Avatar from '../avatar/avatar';

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
    'text-xs text-gray-300': true,
    'text-right': !isIn,
  });
  const name = props.member.nickname || props.member.name;
  return (
    <div className={box}>
      <Avatar info={props.member} />
      <div className={nameBoxClass}>
        <p className={nameClass}>{name}</p>
        <div style={props.style} className={styles.msgBox}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
