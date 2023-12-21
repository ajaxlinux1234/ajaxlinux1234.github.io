import type { Message } from '@imCmp/interface';
import styles from '@msg/voice/index.less';
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
