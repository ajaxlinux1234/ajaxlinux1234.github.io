import { ReactElement, useState } from 'react';
import { Modal, ModalProps } from 'antd';
import { omit } from 'lodash-es';
import styles from './index.less';

export interface GModalProps extends ModalProps {
  children?: ReactElement;
  trigger: ReactElement; // 触发弹窗显示的元素
}
export default function GModal(props: GModalProps) {
  const modalProps = omit(props, ['children', 'trigger']);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div onClick={toggleOpen}>{props.trigger}</div>
      <Modal wrapClassName={styles.modal} onCancel={toggleOpen} open={open} {...modalProps}>
        {props.children}
      </Modal>
    </>
  );
}
