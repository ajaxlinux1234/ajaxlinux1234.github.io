import Messages from './components/messages';
import { messages, members } from './mock';
import styles from './index.less';
import SendMessage from './components/sendMessage/index';
import classNames from 'classnames';
export default function IM() {
  const sendMsg = classNames({
    [styles.send]: true,
    unreset: true,
  });
  return (
    <div className={styles.box}>
      <div className={styles.messages}>
        <Messages list={messages} members={members} />
      </div>
      <div className={sendMsg}>
        <SendMessage />
      </div>
    </div>
  );
}
