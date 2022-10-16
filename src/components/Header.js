import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleSignOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error));
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">User Authentication</Link>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
                <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                {
                    user?.email && <p>Welcome, {user?.email}</p>
                }
                {
                    user?.email ?
                    <button onClick={handleSignOut} className='btn btn-sm'>Log Out</button>
                    :
                    <Link to='/login'>
                        <button className='btn btn-sm'>Log In</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;