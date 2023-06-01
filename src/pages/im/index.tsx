import Messages from './components/messages';
import { messages, members } from './mock';
import styles from './index.less';
export default function IM() {
  console.log(
    <div className={styles.box}>
      <div className={styles.messages}>
        <Messages list={messages} members={members} />
      </div>
      <div className={styles.send}></div>
    </div>,
  );
  return (
    <div className={styles.box}>
      <div className={styles.messages}>
        <Messages list={messages} members={members} />
      </div>
      <div className={styles.send}></div>
    </div>
  );
}
