# Junexus 个人作品集

一个现代化的作品集，展示项目和技能，基于 Next.js 14+ 和 TypeScript 构建。

⭐ 如果你觉得这个项目有用，请考虑在 GitHub 上给它一个星星！你的支持帮助我们成长和改进项目。

[English](README.md) | [中文](README-zh.md)

![Junexus 个人作品集](./public/og-image.png)

## 特性

- 🎨 精美设计的响应式布局
- 🖌️ 展示多个项目及详细描述
- 📏 包含多个部分，包括项目和联系方式
- 🌍 支持国际化（英语和中文）
- 📊 集成 Google Analytics
- 💅 使用 Tailwind CSS 进行现代化样式设计

## 演示

访问 [https://byte.ink](https://byte.ink) 查看在线演示。

## 快速开始

### 在 Vercel 上部署

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shadowDragons/portfolio)

### 本地开发

1. 克隆仓库

```bash
git clone https://github.com/shadowDragons/junexus-portfolio.git
cd junexus-portfolio
```

2. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 创建环 ��� 变量文件

```bash
cp .env.example .env
```

4. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 环境变量

在根目录下创建一个 `.env` 文件，内容如下：

```env
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 技术栈

- [Next.js 14](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - 样式
- [next-intl](https://next-intl-docs.vercel.app/) - 国际化
- [next-themes](https://github.com/pacocoursey/next-themes) - 主题管理

## 项目结构

```
.
├── app/ # Next.js 应用目录
├── components/ # React 组件
├── config/ # 网站配置
├── lib/ # 工具函数
├── messages/ # 国际化翻译文件
├── public/ # 静态资源
└── styles/ # 全局样式
```

## 贡献

欢迎贡献！请随时提交 Pull Request。

## 许可证

该项目根据 MIT 许可证进行许可 - 详见 [LICENSE](LICENSE) 文件。

## 作者

Junexus ([https://byte.ink](https://byte.ink))

## 路线图

- [ ] 添加 🌓 深色/浅色模式支持

## 鸣谢

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/)

## 支持项目

如果你觉得我的工作对你有帮助，可以考虑支持我：

<a href="https://byte.ink/zh/sponsor" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;">
</a>

MIT License © 2024-PRESENT [Junexus](https://github.com/shadowDragons)
