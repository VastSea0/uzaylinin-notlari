import React from 'react';

function Card({ title, content }) {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-purple-500">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-purple-300 mb-4">
          {title}
        </h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Card;
