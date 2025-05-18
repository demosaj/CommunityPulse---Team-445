# CommunityPulse---Team-445


**Community Pulse** is a modern, responsive event discovery and management platform. Built with pure HTML and CSS on the frontend and powered by **Supabase** on the backend, it allows users to browse, register, and create local events with ease. Developed as part of a hackathon project, it focuses on clean UI/UX and functional user experiences.

## 🚀 Features

### 🔐 Authentication
- Supabase Email/Password sign-up & login
- OAuth (Google) sign-in supported
- Profile-based session management

### 🧭 Event Browsing (No login required)
- Publicly accessible event grid
- Categorized (music, sports, exhibition) 3x3 layout
- Image thumbnails, descriptions, location, and timing

### 📝 Event Management
- Authenticated users can:
  - Create new events (title, image, date/time, location)
  - Edit or delete their own events
  - Upload event images via Supabase Storage

### ✅ Event Registration
- One-click registration for events
- Registered events shown in user dashboard
- Data tracked in a many-to-many relationship (users ↔ events)

### 📅 Personalized Dashboard
- "Registered Events"
- "My Events"
- "Add New Event" button
- Profile picture/avatar (stored in Supabase)

## 🛠 Tech Stack

- **Frontend**: HTML, CSS (inline), Pure JS (no frameworks)
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Database**: Supabase SQL tables & relations
- **Deployment**: Vercel  / GitHub Pages (Frontend), Supabase (Backend)

## 📂 Folder Structure
├── index.html # Landing page
├── login.html # User login
├── register.html # User registration
├── home.html # Logged-in homepage
├── event.html # Event detail view
├── create-event.html # Add new event form
├── /assets # Static files (images, logos)
├── /scripts # JS files including Supabase integration
└── README.md

Live here : https://community-pulse-445.vercel.app/

