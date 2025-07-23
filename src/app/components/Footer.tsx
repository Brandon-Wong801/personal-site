import Link from 'next/link';

const Footer = ({ className = "" }: { className?: string }) => {
  return (
    <footer className={`text-white py-6 ${className}`}>
      <div className="container mx-auto grid grid-cols-2 gap-50">
        {/* Left Column */}
        <div className="text-left">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-500 transition duration-300">About</Link>
            </li>
            <li>
              <Link href="/pictures" className="hover:text-gray-500 transition duration-300">Pictures</Link>
            </li>
            <li>
              <Link href="/resume" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration-300">Resume</Link>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="text-left">
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/Brandon-Wong801" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration-300">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/brandon-wong808/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition duration-300">LinkedIn</a>
            </li>
            <li>
              <a href="mailto:wong.brandon808@gmail.com" className="hover:text-gray-500 transition duration-300">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
