import Messages from './components/messages';
import styles from './index.less';
import SendMessage from './components/sendMessage/index';
import classNames from 'classnames';
import { useModel } from 'umi';
import { useEffect, useRef, useState } from 'react';
export default function IM() {
  const sendMsg = classNames({
    [styles.send]: true,
    unreset: true,
  });
  const { messages } = useModel('im.message');
  const { members } = useModel('im.member');
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const messageRef = useRef(null);
  useEffect(() => {
    setRef(messageRef.current);
  }, []);
  return (
    <div className={styles.box}>
      <div ref={messageRef} className={styles.messages}>
        <Messages list={messages} members={members} />
      </div>
      <div className={sendMsg}>
        <SendMessage messageRef={ref} />
      </div>
    </div>
  );
}
