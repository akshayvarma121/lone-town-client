import React, { useState, useEffect } from 'react';
import MatchCard from './components/MatchCard';
import ChatBox from './components/ChatBox';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import Footer from './components/Footer';

// Sample match pool
const matchPool = [
  {
    name: "Aarushi Sharma",
    bio: "Writer, introvert, coffee lover ☕ | Looking for deep talks.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ishita Roy",
    bio: "UX designer | Loves plants 🌱 & deep convos",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Simran Kaur",
    bio: "Engineer | Dreamer | Trekker 🏔️",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
  }
];

function App() {
  const [matchIndex, setMatchIndex] = useState(0);
  const user = matchPool[matchIndex];
  const [isPinned, setIsPinned] = useState(false);
  const [status, setStatus] = useState("Matched");
  const [milestoneReached, setMilestoneReached] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const [freezeTimeLeft, setFreezeTimeLeft] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Save match data to Firebase
  const saveToFirestore = async (data, collectionName = "matches") => {
    try {
      await addDoc(collection(db, collectionName), {
        ...data,
        timestamp: new Date()
      });
      console.log("✅ Data saved to Firebase:", data);
    } catch (error) {
      console.error("❌ Error saving to Firebase:", error);
    }
  };

  const handlePin = () => {
    setIsPinned(true);
    setStatus("Pinned");

    saveToFirestore({
      name: user.name,
      pinned: true
    });
  };

  const handleUnpin = () => {
    setIsPinned(false);
    setStatus("Frozen (24h)");
    setIsFrozen(true);
    setFreezeTimeLeft(86400);

    const feedbackOptions = [
      "Mismatch in communication style",
      "Lack of shared goals or values",
      "Response time was too slow",
      "Not enough engagement in the conversation",
      "Conversation felt one-sided"
    ];
    const randomFeedback = feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
    setFeedback(randomFeedback);

    saveToFirestore({
      name: user.name,
      pinned: false,
      feedback: randomFeedback,
      freezeStart: new Date(),
      freezeEnd: new Date(Date.now() + 86400000)
    });
  };

  const handleMilestone = () => {
    setMilestoneReached(true);
    saveToFirestore({
      name: user.name,
      milestoneReached: true
    }, "milestones");
  };

  useEffect(() => {
    if (!isFrozen || freezeTimeLeft <= 0) return;

    const timer = setInterval(() => {
      setFreezeTimeLeft((prev) => {
        if (prev <= 1) {
          setIsFrozen(false);
          setStatus("Available");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isFrozen, freezeTimeLeft]);

  const handleNextMatch = () => {
    if (isFrozen) return;

    setMatchIndex((matchIndex + 1) % matchPool.length);
    setIsPinned(false);
    setMilestoneReached(false);
    setStatus("Matched");
    setFeedback('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Brand Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-700 tracking-wide" style={{ fontFamily: 'Pacifico, cursive' }}>
        Lone Town – Mindful Matchmaking
      </h1>

      <MatchCard
        user={user}
        isPinned={isPinned}
        onPin={handlePin}
        onUnpin={handleUnpin}
        status={status}
      />

      <div className="mt-4">
        <button
          onClick={handleNextMatch}
          className={`text-sm ${
            isFrozen ? "text-gray-400 cursor-not-allowed" : "text-purple-700 hover:underline"
          }`}
          disabled={isFrozen}
        >
          👉 Next match (demo only)
        </button>
      </div>

      {isPinned && (
        <>
          <ChatBox onMilestone={handleMilestone} />
          {milestoneReached && (
            <div className="text-center mt-4 text-green-700 font-semibold">
              🎉 100 Messages Reached! Video Call Unlocked!
            </div>
          )}
        </>
      )}

      {isFrozen && (
        <div className="mt-4 text-sm text-red-600 text-center">
          ⏳ You are frozen for {Math.floor(freezeTimeLeft / 3600)}h {Math.floor((freezeTimeLeft % 3600) / 60)}m
        </div>
      )}

      {feedback && !isPinned && (
        <div className="mt-4 text-sm text-purple-800 text-center italic">
          💬 Feedback from previous match: "{feedback}"
        </div>
      )}
      <Footer />
    </div>
     
     
     
  );
}


export default App;
