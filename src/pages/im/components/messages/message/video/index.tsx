import type { Message } from '../../../interface';
import styles from './index.less';
export default function Video(props: { message: Message }) {
  if (typeof props.message.message !== 'string') {
    return <span>暂时无法播放</span>;
  }
  return (
    <div className={styles.videoBox}>
      <video src={props.message.message} controls />
    </div>
  );
}
