/**
 * channel列表
 */
import Avatar, { Shape } from '@imCmp/avatar/avatar';
import styles from '@imCmp/channelList/channelList.less';
import type { Channel } from '@imCmp/interface';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import classnames from 'classnames';
import { useState } from 'react';
import { useModel } from 'umi';

interface ChannelListProps {
  list: Channel[];
}
export default function ChannelList(props: ChannelListProps) {
  const [data, setData] = useState<SelectProps['options']>([]);
  const [value, setValue] = useState<string>();
  const { activeChannel, setActiveChannel } = useModel('im.channels');
  const handleSearch = (newValue: string) => {
    // fetch(newValue, setData);
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={styles['channels']}>
      <div className={styles['channels-search']}>
        <Select
          className={styles.select}
          style={{ width: '200px' }}
          showSearch
          value={value}
          bordered={false}
          placeholder="搜索"
          defaultActiveFirstOption={false}
          suffixIcon={null}
          filterOption={false}
          onSearch={handleSearch}
          onChange={handleChange}
          notFoundContent={null}
          options={(data || []).map((d) => ({
            value: d.value,
            label: d.text,
          }))}
        />
        <div className={styles['channels-add']}>
          <i className="iconfont icon-tianjia"></i>
        </div>
      </div>
      <ul className={styles['channels-list']}>
        {props.list.map((one) => {
          const info = {
            id: one.channelId,
            name: one.channelName,
            nickname: one.nickname,
            shape: Shape.SQUARE,
            avatarClass: styles.avatar,
          };
          const hasMsg = Boolean(one.lastMessage);
          const channelStyle = classnames({
            [styles.channel]: true,
            [styles['active-channel']]: one.channelId === activeChannel?.channelId,
          });
          return (
            <li onClick={() => setActiveChannel(one)} className={channelStyle} key={one.channelId}>
              <Avatar info={info} />
              <div className={styles['channel-text']}>
                <p className={styles['channel-name']}>{one.channelName}</p>
                {hasMsg && (
                  <p
                    className={styles['last-msg']}
                  >{`${one.lastMessage.send}：${one.lastMessage.message}`}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
