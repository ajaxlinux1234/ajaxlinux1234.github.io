import { ReactElement, ReactNode } from 'react';

/**
 * 消息类型
 */
export enum MessageType {
  TEXT = 'text',
  IMG = 'img',
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

type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : T extends object
  ? DeepPartialObject<T>
  : T | undefined;

interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}

type DeepPartialObject<T> = {
  [Key in keyof T]?: DeepPartial<T[Key]>;
};

type OmitEvent<T> = Omit<T, 'addEventListener' | 'removeEventListener' | 'children' | 'sizes'>;

type TagElement = { type: keyof HTMLElementTagNameMap } & Richtext;
/**
 * 富文本消息
 */
export interface Richtext
  extends DeepPartial<OmitEvent<HTMLElement>>,
    DeepPartial<OmitEvent<HTMLImageElement>>,
    DeepPartial<OmitEvent<HTMLVideoElement>>,
    DeepPartial<OmitEvent<HTMLAudioElement>>,
    DeepPartial<OmitEvent<HTMLLinkElement>> {
  type: keyof HTMLElementTagNameMap; // html tag
  children?: string[] | Richtext[];
}

/**
 * 消息接口
 */
export interface Message {
  uuid: string; // 消息id
  sendId: Member['id']; // 消息发送者id
  send: Member['nickname'] | Member['name']; // 发送方
  type: MessageType;
  message: string | Richtext[];
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
