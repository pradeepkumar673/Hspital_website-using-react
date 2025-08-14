import { useState } from 'react';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full flex justify-between items-center p-6 bg-rose-300 px-10 relative font-cursive">
            <h1 className="text-xl font-bold font-sans">Central Los Santosh Medical Center</h1>
            
            {/* Hamburger Icon */}
            <button 
                className="lg:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg 
                    className="w-6 h-6"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-4 font-sans font-semibold">
                <li><a className="hover:underline font-semibold" href="#">Home</a></li>
                <li><a className="hover:underline font-semibold" href="#">About</a></li>
                <li><a className="hover:underline font-semibold" href="#">Contact</a></li>
                <li><a className="hover:underline font-semibold" href="#">Login</a></li>
                <li><a className="hover:underline font-semibold" href="#">Register</a></li>
            </ul>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {/* Overlay */}
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Sidebar */}
                <div 
                    className={`fixed right-0 top-0 h-full w-64 bg-rose-300 z-50 p-6 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {/* Close Button - now properly visible */}
                    <button 
                        className="absolute right-6 top-6 focus:outline-none text-gray-800 hover:text-black transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg 
                            className="w-6 h-6"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Mobile Menu Items */}
                    <ul className="flex flex-col gap-6 font-sans font-semibold mt-10">
                        <li><a className="hover:underline font-semibold block" href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a className="hover:underline font-semibold block" href="#" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a className="hover:underline font-semibold block" href="#" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                        <li><a className="hover:underline font-semibold block" href="#" onClick={() => setIsMenuOpen(false)}>Login</a></li>
                        <li><a className="hover:underline font-semibold block" href="#" onClick={() => setIsMenuOpen(false)}>Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;