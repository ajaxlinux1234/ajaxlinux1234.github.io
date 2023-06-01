import { createElement, nodeToString } from '@/pages/utils';
import type { Message, Richtext } from '../../../interface';
export default function Richtext(props: { message: Message }) {
  const message = props.message.message;
  if (!Array.isArray(message)) {
    return null;
  }
  const dom: Richtext = {
    type: 'div',
    children: message,
  };
  const html = nodeToString(createElement(dom) as any);
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
