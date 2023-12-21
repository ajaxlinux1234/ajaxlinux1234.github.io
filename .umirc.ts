export default {
  routes: [
    {
      path: '/im',
      component: 'im',
    },
  ],
  tailwindcss: {},
  plugins: [
    '@umijs/plugins/dist/tailwindcss',
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
  ],
  initialState: {},
  model: {},
  alias: {
    '@': '/src',
    '@assets': '/src/assets',
    '@im': '/src/pages/im',
    '@imCmp': '/src/pages/im/components',
    '@imModel': '/src/pages/im/models',
    '@msg': '/src/pages/im/components/messages/message',
  },
};
