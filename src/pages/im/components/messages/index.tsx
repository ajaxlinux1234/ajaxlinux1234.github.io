import FullMessage from '@imCmp/fullMessage';
import { MessageType, type Member, type Message } from '@imCmp/interface';
import File from '@imCmp/messages/message/file';
import Img from '@imCmp/messages/message/img';
import Quote from '@imCmp/messages/message/quote';
import Richtext from '@imCmp/messages/message/richtext';
import Robot from '@imCmp/messages/message/robot';
import System from '@imCmp/messages/message/system';
import Text from '@imCmp/messages/message/text';
import Video from '@imCmp/messages/message/video';
import Voice from '@imCmp/messages/message/voice';
import { get, isEmpty } from 'lodash-es';
import { useState } from 'react';
interface Props {
  list: Message[];
  members: Member[];
}
export default function Messages(props: Props) {
  const list = isEmpty(props.list)
    ? [
        {
          uuid: '1',
          type: MessageType.SYSTEM,
          message: '暂无数据',
          createTime: +new Date(),
        },
      ]
    : props.list;
  const [styleMap, setStyleMap] = useState<any>({});
  const onSetStyleMap = (message: Message, style: Record<string, string>) => {
    setStyleMap({
      ...styleMap,
      [message.uuid]: style,
    });
  };
  return (
    <div className="p-4">
      {list.map((one) => {
        const member = props.members.find((i) => i.id === one.sendId) || {
          id: String(+new Date()),
          name: '',
        };
        const style = styleMap[one.uuid];
        return (
          <FullMessage key={one.uuid} style={style} member={member} message={one}>
            {
              {
                system: <System message={one} />,
                text: <Text message={one} />,
                voice: <Voice message={one} />,
                video: <Video message={one} />,
                file: <File message={one} />,
                robot: <Robot message={one} />,
                richtext: <Richtext message={one} />,
                quote: <Quote onSetStyleMap={onSetStyleMap} message={one} />,
                img: <Img message={one} />,
              }[one.type]
            }
          </FullMessage>
        );
      })}
    </div>
  );
}
