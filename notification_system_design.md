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