/**
 * channel 上部信息：群名（聊天对方昵称），channel更多信息
 */
import styles from '@imCmp/channelHeader/channelHeader.less';
import type { Channel } from '@imCmp/interface';
import classnames from 'classnames';

export default function ChannelHeader(props: Channel) {
  const className = classnames({
    'h-14 w-full flex items-center justify-between border-zinc-200 box-border': true,
    [styles['channel-header']]: true,
  });
  return (
    <div className={className}>
      <span>{props.channelName}</span>
      <i className="iconfont icon-gengduo cursor-pointer"></i>
    </div>
  );
}
