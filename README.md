# Right Sidebar Component

A modern, responsive right-sidebar component built with Next.js, React, and Tailwind CSS. This project demonstrates how to implement a sleek sidebar that slides in from the right side of the screen with smooth animations and a toggle button.

## 🚀 Features

- **Smooth Animations**: CSS transitions for opening/closing the sidebar
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **TypeScript Support**: Fully typed for better development experience
- **Customizable**: Easy to modify content and styling
- **Fixed Positioning**: Sidebar stays in place while scrolling

## 📸 Screenshots

### Sidebar Closed
![Sidebar Closed](https://raw.githubusercontent.com/intway-software/right-sidebar/main/images/img2.png)

### Sidebar Open
![Sidebar Open](https://raw.githubusercontent.com/intway-software/right-sidebar/main/images/img1.png)

## 🛠️ How It Works

The right sidebar component consists of two main parts:

### 1. Toggle Button
- **Position**: Fixed on the right side of the screen
- **Functionality**: Toggles the sidebar open/closed state
- **Animation**: Moves horizontally when sidebar opens/closes
- **Icon**: Changes between left and right chevrons based on state

### 2. Sidebar Panel
- **Position**: Fixed on the right side, positioned below the header
- **Animation**: Slides in from the right with smooth transform transitions
- **Content**: Scrollable area with customizable cards and sections
- **Styling**: Modern card-based layout with proper spacing

### Key Implementation Details

```typescript
// State management for sidebar visibility
const [isOpen, setIsOpen] = useState(false)

// Dynamic positioning based on sidebar state
className={cn(
  "fixed z-50 h-14 w-14 rounded-l-xl rounded-r-none bg-gray-100 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-xl",
  isOpen ? "right-80" : "right-0",
)}

// Smooth slide animation
className={cn(
  "fixed right-0 z-40 h-[calc(100vh-200px)] w-80 border-l bg-card shadow-2xl transition-transform duration-300",
  isOpen ? "translate-x-0" : "translate-x-full",
)}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone git@github.com:intway-software/right-sidebar.git
cd right-sidebar
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
right-sidebar/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with sidebar implementation
├── components/
│   ├── right-sidebar.tsx    # Main sidebar component
│   ├── theme-provider.tsx   # Theme context provider
│   └── ui/                  # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎨 Customization

### Modifying Sidebar Content

Edit the `components/right-sidebar.tsx` file to customize the sidebar content:

```typescript
// Replace the example cards with your own content
<div className="mt-4 space-y-4">
  <Card>
    <CardHeader>
      <CardTitle>Your Section Title</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">Your content here</p>
    </CardContent>
  </Card>
</div>
```

### Styling Customization

The component uses Tailwind CSS classes that can be easily modified:

- **Width**: Change `w-80` to adjust sidebar width
- **Colors**: Modify `bg-card`, `text-foreground`, etc.
- **Animations**: Adjust `duration-300` for different animation speeds
- **Positioning**: Modify `top: "200px"` to change vertical position

## 🧩 Dependencies

- **Next.js 15.5.6**: React framework
- **React 19.2.0**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **TypeScript**: Type safety

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Developed by [Intway Software](https://www.intway.com.ar)**