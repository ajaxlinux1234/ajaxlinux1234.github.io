/**
 * 全局菜单切换等的一些全局操作
 */

import { useState } from 'react';
import type { MenuProps } from '@imCmp/optionMenu/optionMenu';

export default function globalModels() {
  const [activeMenu, setActiveMenu] = useState<MenuProps['key']>('chat');
  return {
    activeMenu,
    setActiveMenu,
  };
}
