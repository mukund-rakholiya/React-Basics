import React from 'react';
import { Link } from "react-router-dom";

const Home: React.FC = () => {

    return (
        <div>
            <Link to={"./counter/Counter.tsx"}>Counter</Link>
            <br /><br /><br /><br />
            <Link to={"./user/user.tsx"}>Users</Link>
        </div>
    );
}

export default Home
