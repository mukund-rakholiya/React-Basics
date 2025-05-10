import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "light" : "dark"} mode
        </button>
    );
}

export default ThemeToggle;