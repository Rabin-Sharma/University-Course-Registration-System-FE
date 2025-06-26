import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    { id: 'courses', label: 'Browse Courses', href: '/courses' },
    { id: 'schedule', label: 'My Schedule', href: '/schedule' },
    { id: 'registration', label: 'Registration', href: '/registration' }
  ];

  return (
    <aside className="w-64 bg-white shadow-sm h-screen sticky top-0 hidden md:block">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;

            return (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className={`block px-4 py-2 rounded-lg transition duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
