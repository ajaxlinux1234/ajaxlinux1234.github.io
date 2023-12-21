import '@assets/fonts/iconfont.css';
import '@im/global.css';
import styles from '@im/index.less';
import ChannelHeader from '@imCmp/channelHeader/channelHeader';
import ChannelList from '@imCmp/channelList/channelList';
import OptionMenu, { MenuProps } from '@imCmp/optionMenu/optionMenu';
import Messages from '@imCmp/messages';
import SendMessage from '@imCmp/sendMessage';
import IMLogin from '@/pages/im/components/imLogin';
import classNames from 'classnames';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useModel } from 'umi';
import Address from './components/address/address';
export default function IM() {
  const sendMsg = classNames({
    [styles.send]: true,
    unreset: true,
  });
  const { messages } = useModel('im.message');
  const { members } = useModel('im.member');
  const { channels } = useModel('im.channels');
  const { activeMenu } = useModel('im.global');
  const { getUser, user } = useModel('im.login');
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const messageRef = useRef(null);
  useEffect(() => {
    setRef(messageRef.current);
    getUser();
  }, []);
  if (!user?.token) {
    return <IMLogin />;
  }
  const rendMap: Record<MenuProps['key'], ReactElement | null> = {
    personal: null,
    chat: (
      <>
        <div className={styles['channel-box']}>{channels && <ChannelList list={channels} />}</div>
        <div className={styles['message-box']}>
          {channels?.[0] && <ChannelHeader {...(channels[0] || {})} />}
          <div ref={messageRef} className={styles.messages}>
            <Messages list={messages || []} members={members} />
          </div>
          <div className={sendMsg}>
            <SendMessage messageRef={ref} />
          </div>
        </div>
      </>
    ),
    addressBook: <Address />,
    star: <Address />,
  };
  const section = rendMap[activeMenu];
  return (
    <div className={styles['im-box']}>
      <OptionMenu />
      {section}
    </div>
  );
}
