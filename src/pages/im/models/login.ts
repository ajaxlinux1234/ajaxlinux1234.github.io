/**
 * 登录model
 */

import { useState } from 'react';
import { imStore } from '@im/store';
import { request } from '@im/fetch';
export interface UserInterface {
  /** 账户名唯一标识 */
  account?: string;
  /** 用户名称 */
  name?: string;
  /** 刷新 */
  token?: string;
}
export default function login() {
  const [user, setUser] = useState<UserInterface>({});

  const internalSetUser = async (info: UserInterface) => {
    await imStore.setItem('user', info);
    setUser(info);
  };

  const getUser = async () => {
    const res = await request('/user/login');
    const user = res.data;
    setUser(user);
    await imStore.setItem('user', user);
  };
  return {
    user,
    internalSetUser,
    getUser,
  };
}
