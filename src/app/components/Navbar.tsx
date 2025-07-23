import Link from 'next/link';
import { basePath } from '../../constants';

const Navbar = () => {
  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative flex space-x-4">
          <Link href="/" className="relative px-3 py-2 group">
            <span className="absolute inset-0 bg-gray-700 rounded transition-all duration-300 scale-0 group-hover:scale-100"></span>
            <span className="relative z-10 hover:text-gray-300 transition duration-300">about</span>
          </Link>
          <Link href="/pictures" className="relative px-3 py-2 group">
            <span className="absolute inset-0 bg-gray-700 rounded transition-all duration-300 scale-0 group-hover:scale-100"></span>
            <span className="relative z-10 hover:text-gray-300 transition duration-300">pictures</span>
          </Link>
          <Link
            href="/resume"
            target="_blank" rel="noopener noreferrer"
            className="relative px-3 py-2 group"
          >
            <span className="absolute inset-0 bg-gray-700 rounded transition-all duration-300 scale-0 group-hover:scale-100"></span>
            <span className="relative z-10 hover:text-gray-300 transition duration-300">resume</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
