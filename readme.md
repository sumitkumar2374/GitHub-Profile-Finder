# 🔍 GitHub Profile Finder

A simple and responsive web application that allows users to search GitHub profiles using the GitHub REST API.

---

## 📸 Preview

<p align="center">
  <img src="./preview.png" alt="GitHub Profile Finder" width="700">
</p>

---

## 🔀 Application Flow

```mermaid
flowchart TD
    A[👤 User enters GitHub username] --> B[🔍 Search username]
    B --> C[🌐 Fetch data from GitHub REST API]
    C --> D{📡 API Response}

    D -->|User Found| E[👤 Display GitHub Profile]
    E --> F[🖼️ Profile Picture]
    E --> G[📝 Profile Details]
    E --> H[📊 Followers & Following]
    E --> I[📚 Public Repositories]

    D -->|User Not Found| J[❌ Show Error Message]
    J --> B
```

---

## ✨ Features

- Search GitHub users by username
- View profile picture and details
- Real-time data fetching with Fetch API
- Responsive and modern UI
- Error handling for invalid usernames

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- GitHub REST API

---


## 🚀 API Used

```javascript
https://api.github.com/users/{username}
```

---

## 👨‍💻 Author

**Sumit Kumar**

⭐ If you like this project, consider giving it a star!