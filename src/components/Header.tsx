// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#8B0000] p-4 shadow-lg">
      <div className="text-2xl font-bold">
        <Link href="/" className="text-black">Novel's Blog</Link>
      </div>
    </header>
  );
};

export default Header;


