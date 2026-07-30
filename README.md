# 山禾 SHAN HE

山禾现代中式料理餐厅首页，使用 Vue 3、Vite 和 TypeScript 构建，并通过
Cloudflare Workers 兼容入口部署到 Sites。

## 本地开发

需要 Node.js `>=22.13.0`。

```bash
npm install
npm run dev
```

## 常用命令

- `npm run dev`：启动本地开发服务
- `npm run build`：执行 Vue TypeScript 检查并生成生产版本
- `npm test`：构建并验证页面、菜品、元数据和托管产物

## 项目结构

- `src/App.vue`：餐厅首页与 13 道菜品数据
- `src/styles.css`：完整响应式视觉样式
- `index.html`：SEO 和社交分享元数据
- `worker/index.ts`：静态资源与单页应用回退入口
- `.openai/hosting.json`：Sites 项目绑定
