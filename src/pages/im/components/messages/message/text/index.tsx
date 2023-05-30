import type { Message } from '../../../interface';
export default function Text(props: { message: Message }) {
  if (typeof props.message.message !== 'string') {
    return null;
  }
  return <div>{props.message.message}</div>;
}
