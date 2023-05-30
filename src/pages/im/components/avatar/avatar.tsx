import type { Member } from '../interface';
import classnames from 'classnames';
import styles from './index.less';

enum Shape {
  CIRCLE = 'circle',
  SQUARE = 'square',
}
interface Avatar extends Member {
  shape?: Shape; // 头像形状
}
export default function Avatar(props: { info: Avatar }) {
  const isSquare = props.info.shape === Shape.SQUARE;
  const box = classnames({
    'h-8': true,
    'w-8': true,
    'min-w-max': true,
  });
  const item = classnames({
    'h-full w-8 bg-sky-400 content-center': true,
    rounded: isSquare,
    'rounded-full': !isSquare,
    [styles.avatar]: true,
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
