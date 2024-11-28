// src/app/page.tsx
import { books } from '../data/books';
import Link from 'next/link';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#F5F5DC] text-[#8B0000] p-8 text-center">
        <h1 className="text-5xl font-bold">Welcome to the Novel Blog</h1>
        <p className="mt-4 text-lg">Explore a collection of inspiring novels, reviews, and discussions.</p>
      </section>

      {/* Novels Collection */}
      <div className="space-y-8 px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-[#8B0000] mt-6">Novels Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:border-4 hover:border-[#8B0000] hover:scale-105"
            >
              <Link href={`/posts/${book.id}`}>
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 transform transition duration-300 ease-in-out"
                />
                <h3 className="text-xl font-semibold text-[#8B0000]">{book.title}</h3>
                <p className="text-gray-700 mt-2">{book.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
