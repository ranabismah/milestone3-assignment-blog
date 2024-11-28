// src/app/posts/[id]/page.tsx
"use client"; // Ensure this is a Client Component

import { useParams } from 'next/navigation'; // Use useParams instead of useRouter
import { books } from '@/data/books';
import CommentSection from '@/components/commentSection';

const BookDetailPage = () => {
  const { id } = useParams(); // Get the 'id' from the URL

  // If 'id' is not available yet (e.g., during the initial render), show a loading state
  if (!id) {
    return <div>Loading...</div>;
  }

  // Find the book by ID from the books array
  const book = books.find((book) => book.id === id);

  // If the book is not found, show an error message
  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="p-6">
      {/* Book Details Section */}
      <div className="mb-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-[#8B0000] text-center mb-4">{book.title}</h1>

        {/* Image */}
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-64 h-54 object-cover rounded-lg mx-auto mb-4"
        />
        
        {/* Description */}
        <p className="text-lg text-gray-700 mt-4 text-center">{book.description}</p>

        {/* Link to Read the Book */}
        <a
          href={book.content}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B0000] mt-4 inline-block underline text-center"
        >
          Read the Book
        </a>
      </div>

      {/* Comment Section */}
      <CommentSection bookId={book.id} />
    </div>
  );
};

export default BookDetailPage;

