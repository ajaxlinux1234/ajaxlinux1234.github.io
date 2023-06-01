import { v1 } from 'uuid';
import audioMock from '../../assets/voice.mp3';
import videoMock from '../../assets/video.mp4';
import imgMock from '../../assets/bg.jpeg';
import { Member, Message, MessageType, SendType } from './components/interface';

export const messages: Message[] = [
  {
    uuid: '1',
    type: MessageType.SYSTEM,
    sendId: '2',
    send: 'system',
    message: '张三李四加入群聊',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '2',
    type: MessageType.TEXT,
    sendId: '1',
    send: '张三',
    message: '这是文本'.repeat(5),
    createTime: +new Date(),
    sendType: SendType.IN,
  },
  {
    uuid: '3',
    type: MessageType.TEXT,
    sendId: '2',
    send: '李四',
    message: '这是文本'.repeat(100),
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '4',
    type: MessageType.VOICE,
    sendId: '1',
    send: '张三',
    message: audioMock,
    createTime: +new Date(),
    sendType: SendType.IN,
  },
  {
    uuid: '5',
    type: MessageType.VIDEO,
    sendId: '2',
    send: '李四',
    message: videoMock,
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '6',
    type: MessageType.IMG,
    sendId: '2',
    send: '李四',
    message: imgMock,
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '7',
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message:
      'https://cc-im-kefu-cos.7moor.com/im/096ea790-5f07-11ed-8fa2-0d71328dda95/2023-05-31/1685516329503/pdf.pdf',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '8',
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message:
      'https://cc-im-kefu-cos.7moor.com/im/096ea790-5f07-11ed-8fa2-0d71328dda95/2023-05-31/1685516364518/docx.docx',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '9',
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message:
      'https://cc-im-kefu-cos.7moor.com/im/096ea790-5f07-11ed-8fa2-0d71328dda95/2023-05-31/1685516358651/ppt.pptx',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '10',
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message:
      'https://cc-im-kefu-cos.7moor.com/im/096ea790-5f07-11ed-8fa2-0d71328dda95/2023-05-31/1685516354629/excel.xlsx',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '11',
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message:
      'https://cc-im-kefu-cos.7moor.com/im/096ea790-5f07-11ed-8fa2-0d71328dda95/2023-04-28/1682677646960/node_modules.zip',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '12',
    type: MessageType.RICHTEXT,
    sendId: '2',
    send: '李四',
    message: [
      {
        type: 'div',
        style: {
          display: 'flex',
          flexDirection: 'column',
        },
        children: [
          {
            type: 'h2',
            style: {
              fontSize: '16px',
            },
            children: ['这是标题'],
          },
          {
            type: 'a',
            target: 'blank',
            href: 'https://cc-im-kefu-cos.7moor.com/im/096ea790-5f07-11ed-8fa2-0d71328dda95/2023-05-31/1685527473696/8acb0200-ff9a-11ed-ad42-05f2092e7f8c.jpeg',
            children: [
              {
                type: 'img',
                style: {
                  width: '200px',
                  height: '200px',
                  display: 'block',
                },
                src: 'https://cc-im-kefu-cos.7moor.com/im/096ea790-5f07-11ed-8fa2-0d71328dda95/2023-05-31/1685527473696/8acb0200-ff9a-11ed-ad42-05f2092e7f8c.jpeg',
              },
            ],
          },
          {
            type: 'br',
          },
          {
            type: 'video',
            style: {
              width: '200px',
              height: '200px',
            },
            src: 'https://cc-im-kefu-cos.7moor.com/im/096ea790-5f07-11ed-8fa2-0d71328dda95/2023-05-31/1685516340621/video.mp4',
            controls: true,
          },
        ],
      },
    ],
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '13',
    type: MessageType.QUOTE,
    sendId: '2',
    send: '李四',
    message: '这是引用的消息啊',
    quote: {
      uuid: '2',
      type: MessageType.TEXT,
      sendId: '1',
      send: '张三',
      message: '这是文本'.repeat(5),
      createTime: +new Date(),
      sendType: SendType.IN,
    },
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
