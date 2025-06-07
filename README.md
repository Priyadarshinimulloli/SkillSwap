# 🚀 SkillSwap – Learn by Teaching, Teach by Learning

**SkillSwap** is a MERN-based peer-to-peer learning platform that allows users to exchange skills, schedule video sessions, and grow through collaborative learning. Featuring live video calling (via **Daily.co**), smart match suggestions, and a real-time chatbot, SkillSwap makes learning interactive, accessible, and community-driven.

---

## 🌟 Features

- 👤 **User Profiles** – Create, view, and update personal profiles with skills, bio, availability, and image.
- 🧠 **Skill Management** – Add or remove skills you can offer or want to learn.
- 🛒 **Skill Marketplace** – Explore available users and their listed skills.
- 📹 **Video Calling (Daily.co)** – Real-time, secure video sessions within the platform.
- 🖼️ **Image Uploads** – Upload and fetch profile images from mongodb using url.
- 💬 **Chatbot** – Integrated assistant to guide users and answer common questions.

---

## 🛠️ Tech Stack

| Layer          | Technology Used                       |
|----------------|----------------------------------------|
| **Frontend**   | React.js                |
| **Backend**    | Node.js, Express.js                   |
| **Database**   | MongoDB                               |
| **Video API**  | [Daily.co](https://www.daily.co/)     |

---


---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/skillswap.git
cd skillswap

2. Setup Backend

cd server
npm install
touch .env

Add to .env file:
MONGO_URI=your_mongodb_connection_string

node server.js

3. Setup Frontend

cd ../client
npm install
npm run dev

