import type { Message } from '@imCmp/interface';
export default function Text(props: { message: Message }) {
  if (typeof props.message.message !== 'string') {
    return null;
  }
  return <div className="text-justify">{props.message.message}</div>;
}
