import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: '/duya-brower-cli/',
  base: '/duya-brower-cli',
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    slave: {},
  },
  cssModulesTypescriptLoader: {},
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
        },
      ],
    },
  ],
  fastRefresh: {},
});
