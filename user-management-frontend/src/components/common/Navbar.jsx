import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(UserService.isAuthenticated());
    const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());

    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(UserService.isAuthenticated());
            setIsAdmin(UserService.isAdmin());
        };

        // Check authentication status on component mount
        checkAuth();

        // Listen for custom authChange event
        window.addEventListener('authChange', checkAuth);

        return () => {
            window.removeEventListener('authChange', checkAuth);
        };
    }, []);

    const handleLogout = () => {
        UserService.logout();
        window.location.href = '/';  // Redirect to homepage after logout
    };

    return (
        <nav>
            <ul>
                {!isAuthenticated && <li><Link to="/">Phegon Dev</Link></li>}
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                {isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    );
};

export default Navbar;
