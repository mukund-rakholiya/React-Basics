import React from 'react';
import { Link } from "react-router-dom";
import ThemeToggle from './theme/ThemeToggle';

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <ThemeToggle />
            <nav className='nav-links'>
                <Link to={"./counter/Counter.tsx"}>Counter</Link>
                <Link to={"./user/user.tsx"}>Users</Link>
                <Link to={"./form/UserForm.tsx"}>Add User</Link>
            </nav>
        </div>
    );
}

export default Home
