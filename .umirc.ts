import { defineConfig } from 'umi';
export default defineConfig({
  npmClient: 'pnpm',
  chainWebpack(memo, { env, webpack }) {
    console.log('memo', memo.module.rule('jsx-ts-tsx'))
  },
});
