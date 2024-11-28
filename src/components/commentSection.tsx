// src/components/CommentSection.tsx
"use client";

import { useState } from 'react';

interface CommentSectionProps {
  bookId: string; // Accept bookId as a prop to keep comments separate for each book
}

const CommentSection = ({ bookId }: CommentSectionProps) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {  // Prevent empty comments
      setComments((prev) => [...prev, newComment.trim()]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Comments</h3>
      <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
        <label htmlFor="comment" className="text-lg">Leave a Comment</label>
        <textarea
          id="comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="p-4 border rounded-lg w-full"
          placeholder="Write your comment here"
        />
        <button type="submit" className="bg-[#8B0000] text-white px-6 py-2 rounded-lg hover:bg-[#700000]">
          Submit Comment
        </button>
      </form>
      <div className="mt-6">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="border-b-2 py-2">
              <p>{comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
