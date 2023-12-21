import type { Message } from '@imCmp/interface';
import File from '@msg/file';
import Img from '@msg/img';
import styles from '@msg/quote/index.less';
import Richtext from '@msg/richtext';
import Robot from '@msg/robot';
import Text from '@msg/text';
import Video from '@msg/video';
import Voice from '@msg/voice';
import { Tooltip } from 'antd';
import { useEffect, useRef, useState } from 'react';
export default function Quote(props: {
  message: Message;
  onSetStyleMap: (message: Message, style: Record<string, string>) => void;
}) {
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
    props.onSetStyleMap(props.message, {
      marginBottom: height + 16,
    });
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
