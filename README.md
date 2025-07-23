# Gmail Signature Creator

A modern, professional email signature designer for Gmail built with Next.js, TypeScript, and Tailwind CSS. Create beautiful, responsive email signatures with real-time preview and one-click copying.

## ✨ Features

### **Core Functionality**
- **4 Professional Templates**: Compact, Balanced, Corporate, and Modern designs
- **Real-time Preview**: See changes instantly as you type
- **Smart Width Fitting**: Signatures automatically size to content
- **Copy to Clipboard**: One-click copying optimized for Gmail
- **Form Validation**: Comprehensive validation with helpful error messages

### **Customization Options**
- **Personal Information**: Name, title, company, email, phone
- **Social Media Integration**: LinkedIn and X/Twitter with icons
- **Company Logo**: Upload and hyperlink company logos
- **Template-specific Options**: Alignment, display styles, and layouts
- **Website Integration**: Flexible website link display options

### **Design & UX**
- **Modern UI**: Built with Shadcn UI and Tailwind CSS
- **Responsive Design**: Works perfectly on all device sizes
- **Professional Styling**: Clean, business-appropriate designs
- **Accessible**: Proper contrast ratios and keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gmail-signature-creator.git
   cd gmail-signature-creator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality, accessible UI components

### **Forms & Validation**
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **Lucide React** - Beautiful, customizable icons

### **Development Tools**
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing and optimization
- **Git** - Version control

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── ui/              # Shadcn UI components
│   │   ├── signature-templates/  # Signature template components
│   │   └── signature-editor.tsx  # Main editor component
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Tailwind utilities
│   └── types/               # TypeScript type definitions
│       └── signature.ts     # Signature-related interfaces
├── public/                  # Static assets
│   └── static/              # Signature assets (logos, icons)
├── components.json          # Shadcn UI configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎯 How to Use

1. **Fill in your information** in the editor panel
2. **Choose a template** from the dropdown menu
3. **Customize options** specific to your chosen template
4. **Add social media** accounts (LinkedIn, X/Twitter)
5. **Preview your signature** in real-time
6. **Copy to clipboard** and paste into Gmail

### **Gmail Integration**

1. Copy your signature using the "Copy Signature" button
2. Go to Gmail Settings (gear icon → "See all settings")
3. Scroll to "Signature" section
4. Click "Create new" and give it a name
5. Paste using **Ctrl+V** (Windows) or **Cmd+V** (Mac)
6. Save changes and select as default signature

## 🔄 Development Roadmap

See [ROADMAP.md](./ROADMAP.md) for detailed development phases and planned features.

### **Phase 1: Foundation & User Management (MVP)** ✅
- ✅ Modern Next.js application with TypeScript
- ✅ 4 professional signature templates
- ✅ Real-time preview and form validation
- ✅ Copy to clipboard functionality
- 🚧 Database integration (Prisma + PostgreSQL)
- 🚧 User authentication (NextAuth.js)

### **Upcoming Phases**
- **Phase 2**: Enhanced customization & team features
- **Phase 3**: Professional features & integrations
- **Phase 4**: Enterprise & advanced features
- **Phase 5**: Mobile app & advanced analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Ready to create professional email signatures?** 🚀 [Get started now!](http://localhost:3000)
