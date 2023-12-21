import { messages as msgs, personalMsg } from '@im/mock';
import { Message } from '@imCmp/interface';
import { useModel } from 'umi';
import { useEffect, useState } from 'react';
import { request } from '@im/fetch';

enum MessageOption {
  ADD = 'add',
  DELETE = 'delete',
}
export default function MessageModel() {
  const { activeChannel } = useModel('im.channels');
  const [messages, setMsgs] = useState<Message[]>();

  const getMessages = async () => {
    const res = await request('/messages/getMessages', {
      data: {
        channelId: activeChannel?.channelId,
      },
    });
    const mockData = activeChannel?.groupId ? msgs : personalMsg;
    const data = res.data || mockData;
    setMsgs(data);
  };

  const setMessages = (msg: Message, action: MessageOption = MessageOption.ADD) => {
    if (action === MessageOption.ADD) {
      return setMsgs([...(messages || []), msg]);
    }
    setMsgs(msgs.filter((one) => one.uuid !== msg.uuid));
  };

  useEffect(() => {
    activeChannel?.channelId && getMessages();
  }, [activeChannel]);

  return { messages, setMessages };
}
