import classNames from 'classnames';
import { getFileName, getSuffix } from '@/pages/utils';
import type { Message } from '../../../interface';
import { FILE_ICON_MAP } from './constants';
import styles from './index.less';
import FilePreview from './filePreview';
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
