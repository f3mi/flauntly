import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Search', href: '/search' },
  { name: 'Categories', href: '/categories' },
  { name: 'Font Demo', href: '/font-demo' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure as="nav" className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="font-cabinet font-black text-2xl tracking-tight text-gray-900">
                  <span className="text-primary-600">F</span>launtly
                </Link>
              </div>
              
              <div className="hidden md:block">
                <div className="flex items-center space-x-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`nav-link ${location.pathname === item.href ? 'nav-link-active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="flex items-center space-x-3">
                  <Link to="/login" className="outline-button">
                    Sign in
                  </Link>
                  <Link to="/business" className="nav-cta-button">
                    List your business
                  </Link>
                </div>
              </div>
              
              <div className="md:hidden">
                <Disclosure.Button className="mobile-menu-button">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-150 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden bg-white shadow-md rounded-b-lg mx-4 mt-2">
              <div className="px-2 pb-3 pt-2 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={`block px-3 py-2 font-cabinet font-medium text-sm rounded-lg ${
                      location.pathname === item.href
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-2 px-2">
                  <Link
                    to="/login"
                    className="outline-button w-full flex justify-center"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/business"
                    className="nav-cta-button w-full"
                  >
                    List your business
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
} 