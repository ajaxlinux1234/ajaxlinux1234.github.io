import type { Message } from '@imCmp/interface';
import FilePreview from '@msg/file/filePreview';
export default function Img(props: { message: Message }) {
  const url = props.message.message;
  if (typeof url !== 'string') {
    return null;
  }
  return (
    <FilePreview
      url={url}
      trigger={<img className="cursor-pointer" height="200px" width="200px" src={url} />}
    />
  );
}
