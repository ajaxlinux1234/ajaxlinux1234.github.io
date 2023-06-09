import { useState } from 'react';
import { Message } from '../components/interface';
import { messages as msgs } from '../mock';

enum MessageOption {
  ADD = 'add',
  DELETE = 'delete',
}
export default function MessageModel() {
  const [messages, setMessages] = useState<Message[]>(msgs);

  const onSetMsgs = (msg: Message, action: MessageOption = MessageOption.ADD) => {
    if (action === MessageOption.ADD) {
      return setMessages([...messages, msg]);
    }
    setMessages(msgs.filter((one) => one.uuid !== msg.uuid));
  };

  return { messages, setMessages };
}
