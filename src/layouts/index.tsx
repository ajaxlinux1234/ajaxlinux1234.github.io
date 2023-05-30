import { history, Outlet } from 'umi';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './index.less';
import { useEffect, useState } from 'react';

export default function Layout() {
  const items: MenuProps['items'] = [
    {
      label: 'IM',
      key: 'im',
    },
    {
      label: '国际化',
      key: 'translate',
    },
  ];
  const [current, setCurrent] = useState('im');

  const onClick: MenuProps['onClick'] = (e) => {
    history.push(e.key);
    setCurrent(e.key);
  };

  useEffect(() => history.push('im'), []);
  return (
    <div className={styles.navMenu}>
      <Menu
        style={{ background: 'unset', color: '#fff' }}
        mode="horizontal"
        selectedKeys={[current]}
        defaultSelectedKeys={['im']}
        items={items}
        onClick={onClick}
      />
      <Outlet />
      <div className={styles.bg}></div>
    </div>
  );
}
