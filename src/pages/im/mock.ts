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
      'https://xiadafang-1308958530.cos.ap-beijing.myqcloud.com/pdf.pdf?q-sign-algorithm=sha1&q-ak=AKIDCw7oO2Y8ZjerGJbk4cDhbzyhlKsKcoYqBiQQGxyvE1j3R64YX2Zf14atgYK-b3r2&q-sign-time=1687142630;1687146230&q-key-time=1687142630;1687146230&q-header-list=host&q-url-param-list=&q-signature=ca4cac36da48b8ddcc451bfe03f18ce67054a3f5&x-cos-security-token=U7Oj62XkeCc672DeYrF5juQHm2dW9rSadcb9b1f47918a485b244c5fda1c41e9dvDfLDOnuINeNuwZmo71ESLrt9tHfS2Cz5h2mriaWNkkOPoj0kKhwDEYPI4VkC5B4IyotL-V999KcJ2wzBWpGYw0HCnrPRSQ6mbuQ8Lx8wCzjgOIruBQiFruTX0CLZrA7IfL76StOrzd_WKC0C9KDItLq3crxWY7PdNjuLbd5UseiNn7PyBISYaW-pm3o5sue',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '8',
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message:
      'https://xiadafang-1308958530.cos.ap-beijing.myqcloud.com/docx.docx?q-sign-algorithm=sha1&q-ak=AKIDDXsianHDRJMuIujT4In4pNuGXw92YCNRmUGbXrVh-EaUaYazoKrbo1GVUu_H4po4&q-sign-time=1687142656;1687146256&q-key-time=1687142656;1687146256&q-header-list=host&q-url-param-list=&q-signature=a41cb1d7cb62d92ff38f27bab48e38b59073db2f&x-cos-security-token=PnExH1MDpGuQQitVJAJ3hHXVK1NeMcva63f9aa3432de35f0c9502620c5c332a3N033DOUO2inTfh_1gtySL03-D4rNXJe0TcpKKHU_TDFmD1kTJPvjDEPASzifQrY6oTeZi9Bibtf7iHxFFDqDqdvwAOgxwIKHJoe3WkAioYMKfUJDqWcA0rRYA8ftE6hnPaNiwHbj2wlJsaXNk4lDZz0Pqk6nX9yFnMp2Q2RCpNN5mxxCBb0GZsCY9RQnstA5',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '9',
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message:
      'https://xiadafang-1308958530.cos.ap-beijing.myqcloud.com/ppt.pptx?q-sign-algorithm=sha1&q-ak=AKIDPgI_eyZXaIL1eX60h2pL8ZESXnFosoNt999Jv1R8Zc3IzUvj7Q75OG-4glNuCCQY&q-sign-time=1687142670;1687146270&q-key-time=1687142670;1687146270&q-header-list=host&q-url-param-list=&q-signature=d5274d75d923017c2effb9254c6ecc18656c5a42&x-cos-security-token=U7Oj62XkeCc672DeYrF5juQHm2dW9rSa953e2b4d77220c17514bc324c00cc038vDfLDOnuINeNuwZmo71ESB_QxgIu9jDUSpY9bxA24yFDMt6fhbYzKEYZP47kLMEjcPMKyk96bfnyTqN3ml8AKocK0B92tQxYTmxP9IuWZhyGccwI_DvPDpEXutn7egJt06TWtG_1ctkwkFo61-Ql-TJStvA-enqIG7hszdisrIPrptkP0368C-6GJGNLih-2',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '10',
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message:
      'https://xiadafang-1308958530.cos.ap-beijing.myqcloud.com/excel.xlsx?q-sign-algorithm=sha1&q-ak=AKIDLMkTGE-9n35Yneig0VTpe-9_eJCeXX_aN0P0EZQU7wJvgBVVtJMx3clIpLhg4lRf&q-sign-time=1687142747;1687146347&q-key-time=1687142747;1687146347&q-header-list=host&q-url-param-list=&q-signature=482b53afe7265607919c9339cece7c2937790e3b&x-cos-security-token=PnExH1MDpGuQQitVJAJ3hHXVK1NeMcvac77f70c51c96fee81831c17a998ddaa2N033DOUO2inTfh_1gtySLx1iWo4wIW5ysg_XTITH0m95Lsd3YWmVi6X9oCXwNViM3GhpYplrpeyxaD-SMjveQaofly3WPPJYtLA5FkvS6niPhPlTw2rOi8UKkhhLukhes9rj-wRUeISLWZrsap5YCFld85xnIfSYOuIWBKqPWlZNuJ6HpXRj2-nHEApxgFyl',
    createTime: +new Date(),
    sendType: SendType.OUT,
  },
  {
    uuid: '11',
    type: MessageType.FILE,
    sendId: '2',
    send: '李四',
    message:
      'https://xiadafang-1308958530.cos.ap-beijing.myqcloud.com/avatar.zip?q-sign-algorithm=sha1&q-ak=AKIDPUhldi_yX3by8jriaJGIPkthQZ2hgBcnOVQS8ta9lBBMF6PxsHpJ-3ev6XFDfbgy&q-sign-time=1687144984;1687148584&q-key-time=1687144984;1687148584&q-header-list=host&q-url-param-list=&q-signature=ca3f923823f51b7f22468d112f8e0f243cec5b36&x-cos-security-token=PnExH1MDpGuQQitVJAJ3hHXVK1NeMcva97136bbeb74ff04025e6ec368fc3b1a6N033DOUO2inTfh_1gtySLzVyA7myqjQ0z08PY1KcfR2UCP1prAh1ZKw0iZrNNXOXI-soZJwb_IY8auNuCb6zN_p1BEFF1hF7uUI8y64Crxszq1zDb8ai9hUjdU-RONBQmmWi3wqxSgxKB0UvuU55deF6C7MU0Xk_7Z4x917EqZKKe0ryXZQtSS3XYCeT5bP4',
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
            href: 'https://xiadafang-1308958530.cos.ap-beijing.myqcloud.com/bg.jpeg?q-sign-algorithm=sha1&q-ak=AKID-Dk7yJS5FvsbIvtDnAAGAW0PaB7sBThJjDFSPbqMSAtQvdNSHIS0odXtkXsqvWBi&q-sign-time=1687142532;1687146132&q-key-time=1687142532;1687146132&q-header-list=host&q-url-param-list=ci-process&q-signature=2fa3383d88384ae3d6ed7a22e1411a7b25daf13d&x-cos-security-token=PnExH1MDpGuQQitVJAJ3hHXVK1NeMcvab55ff7ee846762bf656fbe41dc333bb8N033DOUO2inTfh_1gtySL4VVr-pJWTOLF6wrb57kXnt_YRULCFIU7s1zQkHMQjHeyvP3Pxzc5nT0gX95VEXDF5XROM1dar6vJMBLm-ixeMmKSJiFv8q45MHxRrF_amqo9Vj2E6eXCHV6Laj6AFhHwoysgGWyXTHTaODRF9Igi-jhmPC5j5MQFHtCkhFqN2eW&ci-process=originImage',
            children: [
              {
                type: 'img',
                style: {
                  width: '200px',
                  height: '200px',
                  display: 'block',
                },
                src: 'https://xiadafang-1308958530.cos.ap-beijing.myqcloud.com/bg.jpeg?q-sign-algorithm=sha1&q-ak=AKID-Dk7yJS5FvsbIvtDnAAGAW0PaB7sBThJjDFSPbqMSAtQvdNSHIS0odXtkXsqvWBi&q-sign-time=1687142532;1687146132&q-key-time=1687142532;1687146132&q-header-list=host&q-url-param-list=ci-process&q-signature=2fa3383d88384ae3d6ed7a22e1411a7b25daf13d&x-cos-security-token=PnExH1MDpGuQQitVJAJ3hHXVK1NeMcvab55ff7ee846762bf656fbe41dc333bb8N033DOUO2inTfh_1gtySL4VVr-pJWTOLF6wrb57kXnt_YRULCFIU7s1zQkHMQjHeyvP3Pxzc5nT0gX95VEXDF5XROM1dar6vJMBLm-ixeMmKSJiFv8q45MHxRrF_amqo9Vj2E6eXCHV6Laj6AFhHwoysgGWyXTHTaODRF9Igi-jhmPC5j5MQFHtCkhFqN2eW&ci-process=originImage',
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
            src: 'https://xiadafang-1308958530.cos.ap-beijing.myqcloud.com/video.mp4?q-sign-algorithm=sha1&q-ak=AKIDcxpsV9CzkMRKNQxo2XmFbzt5WRdGlWbD9BzlX-DC14OhqIDRO0NFKnn_AAGDKRVq&q-sign-time=1687142781;1687146381&q-key-time=1687142781;1687146381&q-header-list=host&q-url-param-list=&q-signature=10fdf67aeb838cf9bc3548acb6e3819145925452&x-cos-security-token=PnExH1MDpGuQQitVJAJ3hHXVK1NeMcva37a638a33ebb9bcc9693808b7ecdf987N033DOUO2inTfh_1gtySL9e2YcekttX4p1FXmYnQdvmqp1SCefL0RawKViLf7pC8M3KaTgpct3J1F2cfQ21WtgH2YtTAyziVFxAdOXQJhDOpm7YtmyEY3mjXI3YAR7x1INSp5c580dDBh1cG3Fwt8dDw0WAzcL2P30nPTcLmjvIepp2aQh5y7j30spUuP-5V',
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
