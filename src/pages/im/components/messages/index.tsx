import { get } from 'lodash-es';
import type { Member, Message } from '../interface';
import styles from './index.less';
import FullMessage from '../fullMessage';
import System from './message/system';
import Text from './message/text';
import Voice from './message/voice';
import Video from './message/video';
import File from './message/file';
import Robot from './message/robot';
import Richtext from './message/richtext';
import Quote from './message/quote';
interface Props {
  list: Message[];
  members: Member[];
}
export default function Messages(props: Props) {
  if (!get(props.list, 'length')) {
    return null;
  }
  return (
    <div className="p-4">
      {props.list.map((one) => {
        const member = props.members.find((i) => i.id === one.sendId) || {
          id: String(+new Date()),
          name: '',
        };
        return (
          <FullMessage key={one.uuid} member={member} message={one}>
            {
              {
                system: <System message={one} />,
                text: <Text message={one} />,
                voice: <Voice message={one} />,
                video: <Video message={one} />,
                file: <File message={one} />,
                robot: <Robot message={one} />,
                richtext: <Richtext message={one} />,
                quote: <Quote message={one} />,
              }[one.type]
            }
          </FullMessage>
        );
      })}
    </div>
  );
}
