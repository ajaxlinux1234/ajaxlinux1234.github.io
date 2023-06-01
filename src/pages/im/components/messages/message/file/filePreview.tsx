import GModal, { GModalProps } from '@/components/gModal';
import { omit } from 'lodash-es';

interface FilePreviewProps extends GModalProps {
  url: string; // 文件预览链接
}
export default function FilePreview(props: FilePreviewProps) {
  const gModalProps = omit(props, ['url']);
  return (
    <GModal footer={null} {...gModalProps}>
      <iframe frameBorder="0" style={{ height: '100%', width: '100%' }} src={props.url}></iframe>
    </GModal>
  );
}
