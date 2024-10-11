'use client';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, where, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../lib/firebase/firebase';
import ReactMarkdown from 'react-markdown';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { userAgent } from 'next/server';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });

  useEffect(() => {
    const q = query(collection(db, 'comments'), where('postId', '==', postId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        votes: doc.data().votes || 0,  
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
        votes: 0, 
        userAgent: navigator.userAgent,
      });
      setNewComment({ name: '', comment: '' });
    } catch (err) {
      console.error('Error adding comment: ', err);
    }
  };

  const handleVote = async (commentId, increment) => {
    const commentRef = doc(db, 'comments', commentId);
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
      const newVotes = (comment.votes || 0) + (increment ? 1 : -1);
      await updateDoc(commentRef, { votes: newVotes });
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-purple-300 mb-4">Yorumlar</h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-purple-300">{comment.name}</strong>
              <span className="text-gray-400 text-sm">
                {comment.createdAt && comment.createdAt.toDate ? 
                  new Date(comment.createdAt.toDate()).toLocaleString() : 
                  'Tarih bilgisi yok'}
              </span>
            </div>
            <ReactMarkdown className="prose prose-invert max-w-none">
              {comment.comment}
            </ReactMarkdown>
            <div className="flex items-center mt-2">
              <button onClick={() => handleVote(comment.id, true)} className="mr-2">
                <ThumbsUp size={16} className="text-green-500" />
              </button>
              <button onClick={() => handleVote(comment.id, false)} className="mr-2">
                <ThumbsDown size={16} className="text-red-500" />
              </button>
              <span className="text-gray-400">{comment.votes || 0} oy</span>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-8">
        <div>
          <input
            type="text"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            placeholder="İsminiz"
            className="p-2 bg-gray-600 text-white rounded-md w-full mb-4"
            required
          />
        </div>
        <div>
          <textarea
            value={newComment.comment}
            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
            placeholder="Yorumunuz (Markdown desteklenir)"
            className="p-2 bg-gray-600 text-white rounded-md w-full mb-4"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Comments;