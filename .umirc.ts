import { defineConfig } from '@umijs/max';
import Routes from './config/route';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  define: {
    ENV: 'TEST',
  },
  routes: Routes,
  npmClient: 'npm',
});
