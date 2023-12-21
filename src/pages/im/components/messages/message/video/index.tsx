import type { Message } from '@imCmp/interface';
import styles from '@msg/video/index.less';
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
