import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const ChatBox = ({ onMilestone }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleReceive = (data) => {
      setMessages((prev) => [...prev, data]);
      if (messages.length + 1 === 100) {
        onMilestone();
      }
    };

    socket.on("receive_message", handleReceive);
    return () => socket.off("receive_message", handleReceive);
  }, [messages, onMilestone]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    const msgObj = {
      content: message,
      timestamp: new Date().toLocaleTimeString(),
    };
    socket.emit("send_message", msgObj);
    setMessage("");
  };

  return (
    <div className="mt-6 bg-white rounded-2xl shadow-md w-full max-w-md p-4">
      <div className="h-60 overflow-y-auto border p-2 rounded mb-3 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-1 text-sm">
            🗨️ <span className="text-gray-800">{msg.content}</span>{" "}
            <span className="text-gray-400 text-xs">({msg.timestamp})</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700"
        >
          Send
        </button>
      </div>
      <div className="mt-2 text-xs text-gray-500 text-center">
        {messages.length}/100 messages
      </div>
    </div>
  );
};

export default ChatBox;
