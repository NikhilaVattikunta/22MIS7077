# Campus Notification Backend System

Backend assessment submission for AffordMed campus hiring evaluation.

## Features

- Notification REST APIs
- Logging Middleware
- Priority Notification Sorting
- Express.js Backend
- Real-Time Notification Design
- PostgreSQL Database Design
- Optimized Query Strategies

---

## Tech Stack

- Node.js
- Express.js
- JavaScript
- Git & GitHub

---

## Run Project

```bash
npm install
node src/app.js
```

---

## API Endpoints

### Get Notifications

```http
GET /notifications
```

### Root Endpoint

```http
GET /
```

---

## Notification Priority Order

1. Placement
2. Result
3. Event

---

## Project Structure

```txt
src/
 ├── middleware/
 ├── routes/
 ├── services/
 ├── utils/
 └── app.js
```