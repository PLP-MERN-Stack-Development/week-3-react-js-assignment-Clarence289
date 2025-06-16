[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19791283&assignment_repo_type=AssignmentRepo)
# React Task Manager with API Integration

A modern, responsive React application that combines task management with API integration. Built with React, Vite, and Tailwind CSS, this application demonstrates best practices in component architecture, state management, and API integration.
![Screenshot (16)](https://github.com/user-attachments/assets/1eb6ddfb-8c61-4639-8a61-a0916c4bdc14)



## 🌟 Features

### Task Management
- ✨ Add, complete, and delete tasks
- 🔍 Filter tasks (All, Active, Completed)
- 💾 Persistent storage using localStorage
- 🎨 Clean and intuitive interface

### API Integration
- 📱 Fetch and display posts from JSONPlaceholder
- 🔎 Search functionality
- 📄 Pagination support
- ⚡ Real-time updates

### Modern UI/UX
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🎯 Modern component architecture
- 🎨 Styled with Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-Clarence289.git
cd week-3-react-js-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Routing
- [Axios](https://axios-http.com/) - API requests
- [Heroicons](https://heroicons.com/) - Icons

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Posts.jsx
│   └── TaskManager.jsx
├── context/         # React context providers
│   └── ThemeContext.jsx
├── hooks/           # Custom React hooks
│   └── useLocalStorage.js
├── api/             # API integration
│   └── posts.js
└── App.jsx          # Main application component
```

## 🎯 Key Features Implementation

### Task Management
- Tasks are stored in localStorage using a custom hook
- Filter tasks by status (All, Active, Completed)
- Add new tasks with validation
- Mark tasks as complete/incomplete
- Delete tasks with confirmation

### API Integration
- Fetch posts from JSONPlaceholder API
- Implement pagination
- Search functionality
- Error handling and loading states

### Theme Support
- Dark/Light mode toggle
- Persistent theme preference
- Smooth transitions between themes

## 🎨 Styling

The application uses Tailwind CSS for styling with custom components:
- Responsive design for all screen sizes
- Custom button variants (primary, secondary, danger)
- Card components for content display
- Dark mode support with custom color schemes

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Vite Documentation](https://vitejs.dev/)

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 
