import { getFileName, getSuffix } from '@/pages/utils';
import type { Message } from '@imCmp/interface';
import { FILE_ICON_MAP } from '@msg/file/constants';
import FilePreview from '@msg/file/filePreview';
import styles from '@msg/file/index.less';
import classNames from 'classnames';
export default function File(props: { message: Message }) {
  const message = props.message.message;
  if (typeof message !== 'string') {
    return null;
  }
  const fileSuffix = getSuffix(message);
  const FileIcon = FILE_ICON_MAP[fileSuffix];
  const fileName = getFileName(message);
  const fileClass = classNames({
    'flex items-center': true,
    [styles.file]: true,
  });
  return (
    <FilePreview
      url={message}
      trigger={
        <div className={fileClass}>
          <FileIcon />
          <span className="ml-2 text-sm">{fileName}</span>
        </div>
      }
    />
  );
}
