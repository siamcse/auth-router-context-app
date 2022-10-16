import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>Welcome to home, {user?.email}</h2>
        </div>
    );
};

export default Home;