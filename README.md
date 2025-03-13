# MySkillMap 🗺️

**Track your learning. Build your own learning path. Level up your skills.**

MySkillMap is a full-stack application designed to help individuals, educators, and organizations structure their learning journeys using curated learning resources — like a personalized roadmap to skill-building. Think Notion or Google Sheets, but purpose-built for tracking progress in a structured, visual way.

---

## 🧑‍🏫 Self-driven learning can be hard

It’s difficult to keep track of everything you need to learn — especially when technical concepts, tutorials, and helpful resources are scattered across the web.

Whether you're preparing for a job in tech, self-studying a new topic, or onboarding into a new company role, **MySkillMap helps you organize knowledge-building into manageable, trackable steps**.

---

## 💡 Our Solution

MySkillMap lets users:
- Create structured **learning paths** by grouping resources and tasks into sequential steps.
- Track progress across tasks (**Not Started → In Progress → Completed**).
- Save and revisit learning resources in a centralized place.
- View your learning roadmap in an intuitive, easy-to-use interface.

Potential use cases include:
- Individuals creating personal learning paths
- Online educators hosting curriculum tracks
- Employers structuring onboarding or upskilling material

---

## ✨ Key Features

✅ **User Authentication**
- Secure login and registration
- JWT-based route protection
- Password hashing with bcrypt

📚 **Learning Path Builder**
- Add, edit, delete tasks and resources
- Organize learning resources sequentially (CRUD)
- Group content under specific learning goals
- Track progress across tasks

🧠 **Resource Management**
- Add links, descriptions, notes
- Mark tasks by status (Not Started, In Progress, Completed)

👀 **Frontend UI**
- Login page
- Dashboard to view and manage learning paths

🐳 **Deployment Ready**
- PostgreSQL database containerized via Docker
- Backend/Frontend integration using RESTful API

---


## ⚙️ Tech Stack

| Layer        | Technology                      |
|-------------|----------------------------------|
| Frontend     | React, Vite, TypeScript          |
| Backend      | Node.js, Express.js (REST API)   |
| Database     | PostgreSQL (hosted via Supabase) |
| Auth         | JWT, bcrypt, cookies     |
| Deployment   | Docker (containerized Database)        |

---

## 🧑‍💻 Team Roles

| Name   | Focus Areas |
|--------|----------------|
| **Kiki**   | Backend development |
| **Youn**   | Frontend UI/UX, flexible support |
| **Rich**   | Frontend UI/UX |
| **Elie**   | Containerization, Backend Development |
| **Ashley** | Authentication, Backend Development |

---

## 🤔 FAQ

**🔸 How is this different from a simple list or spreadsheet?**  
MySkillMap offers structured learning sequences with embedded progress tracking — more interactive and purpose-built than a flat list.

**🔸 Can I share my learning path with others?**  
(Stretch Goal) Yes — in the future you’ll be able to share your custom learning tracks.

**🔸 Is this like Jira or Codecademy?**  
No. Jira is more about team project tracking. Codecademy/Odin Project provide their own learning content. MySkillMap empowers users to curate *their own* resources from anywhere on the web.

**🔸 Will there be demo learning paths available?**  
Yes! We're building example tracks to help new users get started quickly.

---

## 📦 Getting Started

1. **Clone the repo**
   ```
   git clone https://github.com/your-username/myskillmap.git
   cd myskillmap
2. **Install dependencies**
   ```
   npm install
3. **Set up environment variables**
   
    Create a .env file in the root directory, use .env.example as a template:

   ```
   DB_HOST=db
   DB_USER=app_user
   DB_PASSWORD=app_password
   DB_NAME=app_db
   DB_PORT=3306
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the app**
   ```
   npm run dev

### 📄 License
MIT License — open to contributors and collaborators!

---
### 🙌 Contributions Welcome
We're excited to grow this project — feel free to fork, contribute, or suggest features via Issues or Pull Requests.