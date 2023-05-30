import { useEffect, useRef, useState } from 'react';
import type { Message } from '../../../interface';
import styles from './index.less';
export default function Voice(props: { message: Message }) {
  if (typeof props.message.message !== 'string') {
    return <span>暂时无法播放</span>;
  }
  return (
    <div className={styles.audioBox}>
      <audio src={props.message.message} controls></audio>
    </div>
  );
}
