import React from "react";

const MatchCard = ({ user, isPinned, onPin, onUnpin, status }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center w-full max-w-md">
      <img
        src={user.photo}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.bio}</p>
      <p className="text-xs mt-2 text-purple-600">Status: {status}</p>
      {isPinned ? (
        <button
          onClick={onUnpin}
          className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
        >
          Unpin
        </button>
      ) : (
        <button
          onClick={onPin}
          className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm"
        >
          Pin
        </button>
      )}
    </div>
  );
};

export default MatchCard;
