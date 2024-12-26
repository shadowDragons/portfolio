# Junexus Portfolio

A modern portfolio showcasing projects and skills, built with Next.js 14+ and TypeScript.

⭐ If you find this project useful, please consider giving it a star on GitHub! Your support helps us grow and improve the project.

[English](README.md) | [中文](README-zh.md)

![Junexus Portfolio](./public/og-image.png)

## Features

- 🎨 Beautifully designed layout with responsive design
- 🖌️ Showcase of various projects with detailed descriptions
- 📏 Multiple sections including Projects, and Contact
- 🌓 Dark/Light mode support
- 🌍 i18n support (English & Chinese)
- 📊 Google Analytics integration
- 💅 Styled with Tailwind CSS for a modern look

## Demo

Visit [https://byte.ink](https://byte.ink) to see the live demo.

## Quick Start

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shadowDragons/portfolio)

### Local Development

1. Clone the repository

```bash
git clone https://github.com/shadowDragons/junexus-portfolio.git
cd junexus-portfolio
```

2. Install dependencies

```bash
npm install
or
yarn install
or
pnpm install
```

3. Create environment variables file

```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
or
yarn dev
or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_GA_ID=your-ga-id
```

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

## Project Structure

```
.
├── app/ # Next.js app directory
├── components/ # React components
├── config/ # Site configuration
├── lib/ # Utility functions
├── messages/ # i18n translation files
├── public/ # Static assets
└── styles/ # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Junexus ([https://byte.ink](https://byte.ink))

## Roadmap

- [ ] Add 🌓 Dark/Light mode support

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/)

## Support

If you find my work helpful and would like to support me, you can:

<a href="https://byte.ink/en/sponsor" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;">
</a>

MIT License © 2024-PRESENT [Junexus](https://github.com/shadowDragons)
