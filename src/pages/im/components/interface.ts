/**
 * 消息类型
 */
export enum MessageType {
  TEXT = 'text',
  VOICE = 'voice',
  VIDEO = 'video',
  FILE = 'file',
  RICHTEXT = 'richtext',
  ROBOT = 'robot',
  QUOTE = 'quote',
  SYSTEM = 'system',
}

/**
 * 消息发送方还是接收方
 */
export enum SendType {
  IN = 'in',
  OUT = 'out',
}

/**
 * 消息接口
 */
export interface Message {
  uuid: string; // 消息id
  sendId: Member['id']; // 消息发送者id
  send: Member['nickname'] | Member['name']; // 发送方
  type: MessageType;
  message: string | Record<string, unknown> | Record<string, unknown>[];
  createTime: number;
  quote?: Message; // 引用消息的标识
  sendType: SendType;
  groupId?: string; // 是否是群聊的标识
}

/**
 * 成员接口
 */
export interface Member {
  id: string;
  name: string; // 真实名称
  nickname?: string; // 昵称
  groupNickname?: string; // 群备注
  avatar?: string; // 成员头像
}
