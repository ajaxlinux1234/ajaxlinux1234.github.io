import { useState } from 'react';
import { Message } from '../components/interface';
import { messages as msgs } from '../mock';

enum MessageOption {
  ADD = 'add',
  DELETE = 'delete',
}
export default function MessageModel() {
  const [messages, setMsgs] = useState<Message[]>(msgs);

  const setMessages = (msg: Message, action: MessageOption = MessageOption.ADD) => {
    if (action === MessageOption.ADD) {
      return setMsgs([...messages, msg]);
    }
    setMsgs(msgs.filter((one) => one.uuid !== msg.uuid));
  };

  return { messages, setMessages };
}
