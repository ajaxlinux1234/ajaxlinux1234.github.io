import { v1 } from 'uuid';
import audioMock from '../../assets/voice.mp3';
import videoMock from '../../assets/video.mp4';
import fileMock from '../../assets/file.pdf';
import { Member, Message, MessageType, SendType } from './components/interface';

export const messages: Message[] = [
  {
    uuid: v1(),
    type: MessageType.SYSTEM,
    sendId: '2',
    send: 'system',
    message: '张三李四加入群聊',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: v1(),
    type: MessageType.TEXT,
    sendId: '1',
    send: '张三',
    message: '这是文本'.repeat(5),
    createTime: +new Date(),
    sendType: SendType.IN,
  },
  {
    uuid: v1(),
    type: MessageType.TEXT,
    sendId: '2',
    send: '李四',
    message: '这是文本'.repeat(100),
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: v1(),
    type: MessageType.VOICE,
    sendId: '1',
    send: '张三',
    message: audioMock,
    createTime: +new Date(),
    sendType: SendType.IN,
  },
  {
    uuid: v1(),
    type: MessageType.VIDEO,
    sendId: '2',
    send: '李四',
    message: videoMock,
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: v1(),
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message: fileMock,
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
];

export const members: Member[] = [
  {
    id: '1',
    name: '张三',
  },
  {
    id: '2',
    name: '李四',
  },
];
