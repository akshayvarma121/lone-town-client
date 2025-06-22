# 🏙️ Lone Town – Intelligent Matchmaking System

**Lone Town** is a mindful dating platform that eliminates swipe fatigue by offering just **one deeply compatible match per day**. Designed for meaningful connections, not superficial swiping, this project focuses on emotional intelligence, psychological compatibility, and intentionality in dating.

---

## 🚀 Live Demo

- 🌐 Frontend: [https://lone-town-client.vercel.app](https://lone-town-client.vercel.app)
- 🔌 Backend: [https://lone-town-server.onrender.com](https://lone-town-server.onrender.com)
- 📁 GitHub:
  - [Frontend Repo](https://github.com/akshayvarma121/lone-town-client)
  - [Backend Repo](https://github.com/akshayvarma121/lone-town-server)

---

##  Key Features

###  Intelligent Matchmaking
- Daily **one-match-only** system
- Based on **emotional, behavioral, psychological compatibility**
- No parallel dating: one connection at a time

### Pin/Unpin Mechanism
- Matches are **pinned by default**
- **Unpin** triggers a 24-hour freeze
- Other user gets feedback + new match after 2 hours

###  Real-Time Chat
- Built with **Socket.io**
- Chat unlocks only when match is pinned
- ** Milestone**: After 100 messages in 48h → Video Call unlocks

### Freeze Period & Feedback System
- 24h reflection freeze logic
- Feedback on why previous match didn't work

### Firebase Integration
- Firestore used to store match data, feedback, and milestones

---

##  Tech Stack

| Frontend         | Backend         | Database           | Real-time Engine |
|------------------|------------------|---------------------|------------------|
| React + Vite + Tailwind CSS | Node.js + Express.js | Firebase Firestore | Socket.io |

---

## How to Run

###  Frontend

```bash
cd client
npm install
npm run dev

###  backend
cd server
npm install
node index.js


👤 Author
Made  by Akshay Varma

🔗 Portfolio

💼 LinkedIn

💻 GitHub

📢 Recruiter Note
This project was built as part of a technical assessment and is production-ready. It highlights full-stack development skills, real-time communication, Firebase integration, user state management, and thoughtful user experience design.

⭐ Support
If you liked this project:

Give it a ⭐ on GitHub

