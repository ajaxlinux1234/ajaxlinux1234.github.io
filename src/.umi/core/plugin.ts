// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import * as Plugin_0 from '@@/core/helmet.ts';
import * as Plugin_1 from '/Users/wangchengkun/Documents/ajaxlinux1234.github.io/src/.umi/plugin-initialState/runtime.tsx';
import * as Plugin_2 from '/Users/wangchengkun/Documents/ajaxlinux1234.github.io/src/.umi/plugin-model/runtime.tsx';
import { PluginManager } from 'umi';

function __defaultExport (obj) {
  if (obj.default) {
    return typeof obj.default === 'function' ? obj.default() :  obj.default
  }
  return obj;
}
export function getPlugins() {
  return [
    {
      apply: Plugin_0,
      path: process.env.NODE_ENV === 'production' ? void 0 : '@@/core/helmet.ts',
    },
    {
      apply: Plugin_1,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/Users/wangchengkun/Documents/ajaxlinux1234.github.io/src/.umi/plugin-initialState/runtime.tsx',
    },
    {
      apply: Plugin_2,
      path: process.env.NODE_ENV === 'production' ? void 0 : '/Users/wangchengkun/Documents/ajaxlinux1234.github.io/src/.umi/plugin-model/runtime.tsx',
    },
  ];
}

export function getValidKeys() {
  return ['patchRoutes','patchClientRoutes','modifyContextOpts','modifyClientRenderOpts','rootContainer','innerProvider','i18nProvider','accessProvider','dataflowProvider','outerProvider','render','onRouteChange','getInitialState',];
}

let pluginManager = null;

export function createPluginManager() {
  pluginManager = PluginManager.create({
    plugins: getPlugins(),
    validKeys: getValidKeys(),
  });


  return pluginManager;
}

export function getPluginManager() {
  return pluginManager;
}
