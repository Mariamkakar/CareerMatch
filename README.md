# 💼 CareerMatch – AI Powered Personalized Job Matching System

CareerMatch is an AI-powered web application that helps users discover jobs that match their skills, experience, and interests. The platform provides intelligent job recommendations, calculates a personalized match score, analyzes skill gaps, and offers AI-generated career insights.

---

# 🚀 Features

## 👤 User Profile

- Create and manage user profile
- Store profile information in Supabase
- Skills
- Experience
- Interests

---

## 💼 Job Listings

- Browse available jobs
- View detailed job descriptions
- Apply for jobs
- Save favorite jobs

---

## 🎯 AI Match Score

CareerMatch calculates a personalized match score based on:

- Skills
- Experience
- Interests

---

## 📊 Skill Gap Analysis

Displays missing skills required for a selected job.

Example:

```text
Missing Skills

❌ Tailwind CSS
❌ Node.js
❌ Python
```

---

## 🤖 AI Explanation

Uses OpenRouter AI to explain why the user is a good match for a specific job.

Example:

```text
Your skills match this position because you have strong experience in React and JavaScript.
```

---

## 🔍 Similar Jobs

Recommends jobs similar to the selected position.

---

## 📩 Contact Page

The Contact page provides an elegant glassmorphism interface where users can contact the CareerMatch team.

### Contact Information

- Email Address
- Phone Number
- Location

### Contact Form

Users can submit:

- Name
- Email
- Phone Number
- Message

Modern UI Features:

- Glassmorphism design
- Responsive layout
- Background image
- React Icons
- Tailwind CSS styling

---

## 🦶 Footer

The website includes a professional footer containing:

- Website Logo
- Quick Navigation Links
- Contact Information
- Social Media Links
- Copyright
- Clean Responsive Design

---

# 🛠️ Technologies

- React
- Vite
- React Router
- Tailwind CSS
- React Icons
- Supabase
- OpenRouter API
- LocalStorage

---

# 📂 Project Structure

```text
src
│
├── components
│   ├── AIExplanation.jsx
│   ├── SimilarJobs.jsx
│   ├── SkillGap.jsx
│   ├── Footer.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Jobs.jsx
│   ├── JobDetail.jsx
│   ├── Apply.jsx
│   ├── Contact.jsx
│
├── services
│   ├── supabase.js
│   ├── openrouter.js
│
├── utils
│   ├── matchScore.js
│
├── data
│   ├── jobs.js
│
└── App.jsx
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/CareerMatch.git
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file in the project root.

```env
VITE_OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY
```

---

# 🗄️ Supabase Database

### Table: profiles

Columns:

- id
- name
- skills
- experience
- interests

---

# 📸 Screenshots

- Home Page
- Jobs Page
- Job Detail
- AI Explanation
- Skill Gap Analysis
- Contact Page
- Footer

---

# 🎯 Future Improvements

- User Authentication
- Resume Upload
- AI Resume Analysis
- AI Career Roadmap
- Job Alerts
- Company Reviews
- Email Notifications

---

# 👩‍💻 Author

**Bibi Mariam Abdul Shukoor**

Computer Science Student

Frontend Web Developer

AI Enthusiast

---

# 📄 License

This project was developed for educational purposes as part of the **Web & AI Bootcamp Capstone Project**.
