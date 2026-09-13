import { useState } from "react";
import logoText from "../assets/logo-text.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="mx-auto md:mx-0 md:mr-auto">
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-9 w-auto sm:h-10"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="hover:text-pink-500">
            Home
          </a>
          <a href="#technologies" className="hover:text-pink-500">
            Technologies
          </a>
          <a href="#projects" className="hover:text-pink-500">
            Projects
          </a>
          <a href="#about" className="hover:text-pink-500">
            About
          </a>
          <a href="#contact" className="hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="ml-auto flex items-center gap-1 sm:gap-3">
          <button className="px-2 py-2 text-sm sm:px-4 sm:text-base">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2 text-sm font-medium text-white sm:px-5 sm:text-base">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="py-3 hover:text-pink-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}