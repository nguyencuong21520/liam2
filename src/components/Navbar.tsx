import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Giới Thiệu", href: "#about" },
    { name: "Kỹ Năng", href: "#skills" },
    { name: "Khoá Học", href: "#courses" },
    { name: "Đánh Giá", href: "#testimonials" },
    { name: "Liên Hệ", href: "#contact" },
  ];

  return (
    <nav className="bg-surface-light dark:bg-surface-dark shadow-sm fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <img
              src="/images/logo.png"
              alt="Lâm Tech Talk"
              className="w-10 h-10"
            /> */}
            <a
              href="#"
              className="text-2xl font-bold text-primary-light dark:text-primary-dark"
            >
              Lâm Tech Talk
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Đổi giao diện sáng/tối"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 sm:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Đổi giao diện sáng/tối"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark"
              aria-label="Menu di động"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-surface-light dark:bg-surface-dark transition-colors duration-200">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
