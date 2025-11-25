import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import logo from 'figma:asset/66f1c11b43901f3cea2d2f36e869bdbe1974a1e3.png';

interface HeaderProps {
  cartCount: number;
}

export function Header({ cartCount }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Grant Writing Seminar Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#0C4A6E] transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#0C4A6E] transition-colors">
              Seminars
            </a>
            <a href="#" className="text-gray-700 hover:text-[#0C4A6E] transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-[#0C4A6E] transition-colors">
              About
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#DC2626] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login Button */}
            <Button 
              className="hidden md:inline-flex bg-[#0C4A6E] hover:bg-[#075985] text-white"
            >
              Login
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-[#0C4A6E] transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0C4A6E] transition-colors">
                Seminars
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0C4A6E] transition-colors">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0C4A6E] transition-colors">
                About
              </a>
              <Button className="bg-[#0C4A6E] hover:bg-[#075985] text-white w-full">
                Login
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
