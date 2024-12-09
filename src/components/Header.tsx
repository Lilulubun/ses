import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/placeholder.svg"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="backdrop-blur-md bg-white/30 rounded-full px-6 py-2">
              <ul className="flex space-x-8">
                {["Home", "Explore", "Blog"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Book Consultation Button */}
          <div className="hidden md:block">
            <Button
              className="bg-black hover:bg-gray-800 text-white rounded-md"
            >
              Book a consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2"
            >
              <span className="sr-only">Open main menu</span>
              {/* You can add a menu icon here if needed */}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;