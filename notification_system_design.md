# Stage 1

## Notification System REST API Design

### Base URL

```http
http://localhost:3000
```

---

# 1. Get All Notifications

## Endpoint

```http
GET /notifications
```

## Response

```json
{
  "notifications": [
    {
      "id": "1",
      "type": "Placement",
      "message": "Amazon Hiring",
      "timestamp": "2026-04-22T17:51:30"
    }
  ]
}
```

---

# 2. Get Notification By ID

## Endpoint

```http
GET /notifications/:id
```

## Response

```json
{
  "id": "1",
  "type": "Placement",
  "message": "Amazon Hiring",
  "timestamp": "2026-04-22T17:51:30"
}
```

---

# 3. Create Notification

## Endpoint

```http
POST /notifications
```

## Request Body

```json
{
  "type": "Placement",
  "message": "Amazon Hiring"
}
```

## Response

```json
{
  "message": "Notification created successfully"
}
```

---

# 4. Mark Notification As Read

## Endpoint

```http
PUT /notifications/:id/read
```

## Response

```json
{
  "message": "Notification marked as read"
}
```

---

# 5. Delete Notification

## Endpoint

```http
DELETE /notifications/:id
```

## Response

```json
{
  "message": "Notification deleted successfully"
}
```

---

# Real-Time Notification Mechanism

- WebSockets can be used for real-time notifications.
- Clients stay connected with the server.
- Whenever a new notification is created, the server pushes updates instantly.

---

# Headers

```http
Content-Type: application/json
Authorization: Bearer token
```


# Stage 2

## Database Choice

I would use PostgreSQL as the primary relational database because:

- It supports structured notification data efficiently.
- Good indexing support.
- Reliable transactions.
- Better scalability for large datasets.

---

# Notifications Table Schema

```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY,
    studentId INT,
    notificationType VARCHAR(50),
    message TEXT,
    isRead BOOLEAN DEFAULT false,
    createdAt TIMESTAMP
);
```

---

# Problems With Increasing Data Volume

As notification data increases:

- Query performance becomes slower.
- Fetching unread notifications may take more time.
- Sorting by timestamp becomes expensive.
- Database load increases heavily.

---

# Solutions

- Add indexes on frequently searched columns.
- Use pagination.
- Archive old notifications.
- Use caching systems like Redis.
- Partition tables for scalability.

---

# Example SQL Queries

## Get unread notifications

```sql
SELECT * FROM notifications
WHERE studentId = 1042
AND isRead = false
ORDER BY createdAt DESC;
```

---

## Create notification

```sql
INSERT INTO notifications
(id, studentId, notificationType, message, createdAt)
VALUES
('abc123', 1042, 'Placement', 'Amazon Hiring', NOW());
```

---

## Mark notification as read

```sql
UPDATE notifications
SET isRead = true
WHERE id = 'abc123';
```