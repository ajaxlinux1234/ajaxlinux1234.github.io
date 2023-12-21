import styles from '@imCmp/avatar/index.less';
import type { Member } from '@imCmp/interface';
import classnames from 'classnames';

export enum Shape {
  CIRCLE = 'circle',
  SQUARE = 'square',
}
interface Avatar extends Member {
  /** 头像形状 */
  shape?: Shape;
  /** 盒子样式 */
  avatarClass?: string;
}
export default function Avatar(props: { info: Avatar }) {
  const isSquare = props.info.shape === Shape.SQUARE;
  const box = classnames({
    'h-8': true,
    'w-8': true,
    'min-w-max': true,
    [props.info.avatarClass || '']: props.info.avatarClass,
  });
  const item = classnames({
    'h-full w-8 bg-sky-400 content-center': true,
    rounded: isSquare,
    'rounded-full': !isSquare,
    [styles.avatar]: true,
    [props.info.avatarClass || '']: props.info.avatarClass,
  });
  if (props.info.avatar) {
    return (
      <div className={box}>
        <img className="h-full w-full" src={props.info.avatar} />
      </div>
    );
  }
  const num = (props.info.nickname || props.info.name)[0];
  return (
    <div className={box}>
      <div className={item}>{num}</div>
    </div>
  );
}
