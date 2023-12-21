import EditComponent from './EditComponent/EditComponent';

export default function SendMessage(props: { messageRef: HTMLDivElement | null }) {
  return <EditComponent messageRef={props.messageRef} />;
}
