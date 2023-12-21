import localforage from 'localforage';

/** im全局数据库,例如user token等 */
export const imStore = localforage.createInstance({
  name: 'imStore',
});

/** im member数据库 */
export const imMemberStore = localforage.createInstance({
  name: 'imMemberStore',
});
