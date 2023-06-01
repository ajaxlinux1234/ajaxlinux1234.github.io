import type { Message } from '../../../interface';
import styles from './index.less';
import Text from '../text';
import Voice from '../voice';
import Video from '../video';
import File from '../file';
import Robot from '../robot';
import Richtext from '../richtext';
import Img from '../img';
import { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'antd';
export default function Quote(props: { message: Message }) {
  const { message } = props.message;
  const quote = props.message?.quote;
  if (typeof message !== 'string') {
    return null;
  }
  if (!quote?.type) {
    return null;
  }
  const quoteRef: any = useRef(null);
  const [top, setTop] = useState(0);
  useEffect(() => {
    if (!quoteRef.current) {
      return;
    }
    const parent = quoteRef.current?.parentElement;
    const [{ height }] = parent.getClientRects();
    setTop(height);
  }, []);
  const cmpMap = {
    system: null,
    text: <Text message={quote} />,
    voice: <Voice message={quote} />,
    video: <Video message={quote} />,
    file: <File message={quote} />,
    robot: <Robot message={quote} />,
    richtext: <Richtext message={quote} />,
    img: <Img message={quote} />,
    quote: null,
  };
  const cmp = cmpMap[quote.type];
  return (
    <>
      {message}
      <Tooltip title={cmp} trigger="click" placement="right">
        <div style={{ top: `${top}px` }} ref={quoteRef} className={styles.quote}>
          {cmp}
        </div>
      </Tooltip>
    </>
  );
}
