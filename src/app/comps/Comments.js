'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase/firebase';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });

  useEffect(() => {
    const q = query(collection(db, 'comments'), where('postId', '==', postId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(fetchedComments);
    });

    return () => unsubscribe();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.comment) return;

    try {
      await addDoc(collection(db, 'comments'), {
        name: newComment.name,
        comment: newComment.comment,
        postId,
        createdAt: new Date(),
      });
      setNewComment({ name: '', comment: '' });
    } catch (err) {
      console.error('Error adding comment: ', err);
    }
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">Yorumlar</h2>

      <ul className="space-y-6">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-purple-300">{comment.name}</p>
            <p className="text-gray-300 mt-2">{comment.comment}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            placeholder="İsminiz"
            className="p-3 bg-gray-700 text-white rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={newComment.comment}
            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
            placeholder="Yorumunuz"
            className="p-3 bg-gray-700 text-white rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300">Gönder</button>
      </form>
    </div>
  );
};

export default Comments;