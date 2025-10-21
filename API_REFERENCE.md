# 🔌 API Reference Guide
## One-Click Life Assistant Dashboard - Complete API Documentation

---

## 📚 Table of Contents

1. [Authentication APIs](#-authentication-apis)
2. [Payment APIs](#-payment-apis)
3. [Meeting/Calendar APIs](#-meetingcalendar-apis)
4. [Food Ordering APIs](#-food-ordering-apis)
5. [Communication APIs](#-communication-apis)
6. [Video Recording APIs](#-video-recording-apis)
7. [AI/Task APIs](#-aitask-apis)
8. [User Management APIs](#-user-management-apis)
9. [External API Integration Guide](#-external-api-integration-guide)

---

## 🔐 Authentication APIs

### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!",
  "fullName": "John Doe"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "john@example.com",
      "fullName": "John Doe",
      "createdAt": "2025-10-21T10:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email already exists",
    "details": {
      "field": "email"
    }
  }
}
```

---

### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "john@example.com",
      "fullName": "John Doe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### Refresh Token

```http
POST /api/auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

## 💰 Payment APIs

### Send Payment

```http
POST /api/payments/send
Authorization: Bearer {token}
Content-Type: application/json

{
  "amount": 500.00,
  "currency": "USD",
  "recipientEmail": "recipient@example.com",
  "description": "Lunch reimbursement",
  "paymentMethod": "stripe"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "paymentId": "pay_1234567890",
    "amount": 500.00,
    "currency": "USD",
    "status": "succeeded",
    "recipient": {
      "email": "recipient@example.com",
      "name": "Jane Smith"
    },
    "createdAt": "2025-10-21T14:30:00Z",
    "estimatedArrival": "2025-10-21T14:30:05Z"
  }
}
```

---

### Get Payment History

```http
GET /api/payments/history?page=1&limit=10
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "payments": [
      {
        "id": "pay_1234567890",
        "amount": 500.00,
        "currency": "USD",
        "recipient": "recipient@example.com",
        "status": "succeeded",
        "description": "Lunch reimbursement",
        "createdAt": "2025-10-21T14:30:00Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 47,
      "hasNext": true,
      "hasPrevious": false
    }
  }
}
```

---

### Get Payment Methods

```http
GET /api/payments/methods
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "methods": [
      {
        "id": "pm_1234567890",
        "type": "card",
        "brand": "visa",
        "last4": "4242",
        "expiryMonth": 12,
        "expiryYear": 2025,
        "isDefault": true
      },
      {
        "id": "pm_0987654321",
        "type": "bank_account",
        "bankName": "Chase Bank",
        "last4": "6789",
        "isDefault": false
      }
    ]
  }
}
```

---

## 📅 Meeting/Calendar APIs

### Create Meeting

```http
POST /api/meetings/create
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Q4 Planning Discussion",
  "attendees": [
    "alice@example.com",
    "bob@example.com"
  ],
  "startTime": "2025-10-22T14:30:00Z",
  "duration": 60,
  "description": "Discuss Q4 goals and objectives",
  "videoConference": true,
  "provider": "zoom"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "meetingId": "mtg_1234567890",
    "calendarEventId": "evt_abc123",
    "title": "Q4 Planning Discussion",
    "startTime": "2025-10-22T14:30:00Z",
    "endTime": "2025-10-22T15:30:00Z",
    "attendees": [
      {
        "email": "alice@example.com",
        "status": "pending"
      },
      {
        "email": "bob@example.com",
        "status": "pending"
      }
    ],
    "videoConference": {
      "provider": "zoom",
      "joinUrl": "https://zoom.us/j/123456789",
      "meetingId": "123 456 789",
      "password": "abc123"
    }
  }
}
```

---

### Get Available Slots

```http
GET /api/meetings/available-slots
Authorization: Bearer {token}
Content-Type: application/json

{
  "attendees": ["alice@example.com", "bob@example.com"],
  "duration": 60,
  "startDate": "2025-10-22",
  "endDate": "2025-10-25",
  "workingHours": {
    "start": "09:00",
    "end": "17:00"
  }
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "availableSlots": [
      {
        "startTime": "2025-10-22T14:30:00Z",
        "endTime": "2025-10-22T15:30:00Z",
        "confidence": "high",
        "reason": "All attendees available"
      },
      {
        "startTime": "2025-10-23T10:00:00Z",
        "endTime": "2025-10-23T11:00:00Z",
        "confidence": "medium",
        "reason": "One attendee has back-to-back meetings"
      }
    ],
    "aiSuggestion": {
      "slot": {
        "startTime": "2025-10-22T14:30:00Z",
        "endTime": "2025-10-22T15:30:00Z"
      },
      "reasoning": "Optimal time based on all attendees' calendars and preferences"
    }
  }
}
```

---

### List Meetings

```http
GET /api/meetings/list?startDate=2025-10-21&endDate=2025-10-28
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "meetings": [
      {
        "id": "mtg_1234567890",
        "title": "Q4 Planning Discussion",
        "startTime": "2025-10-22T14:30:00Z",
        "endTime": "2025-10-22T15:30:00Z",
        "attendees": 2,
        "status": "confirmed",
        "hasVideoConference": true
      }
    ]
  }
}
```

---

## 🍔 Food Ordering APIs

### Get Favorite Restaurants

```http
GET /api/food/favorites
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "favorites": [
      {
        "id": "rest_123",
        "name": "Chipotle Mexican Grill",
        "cuisine": "Mexican",
        "orderCount": 45,
        "lastOrdered": "2025-10-20T12:30:00Z",
        "favoriteItems": [
          {
            "id": "item_456",
            "name": "Chicken Bowl",
            "price": 12.99,
            "customizations": ["Brown rice", "Black beans", "Mild salsa"]
          }
        ]
      }
    ]
  }
}
```

---

### Reorder Last Meal

```http
POST /api/food/reorder
Authorization: Bearer {token}
Content-Type: application/json

{
  "restaurantId": "rest_123",
  "itemId": "item_456",
  "deliveryAddress": {
    "street": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "zipCode": "94102"
  },
  "deliveryInstructions": "Ring doorbell"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "orderId": "order_789",
    "restaurant": "Chipotle Mexican Grill",
    "items": [
      {
        "name": "Chicken Bowl",
        "quantity": 1,
        "price": 12.99
      }
    ],
    "subtotal": 12.99,
    "deliveryFee": 3.99,
    "tax": 1.30,
    "total": 18.28,
    "estimatedDelivery": "2025-10-21T13:15:00Z",
    "trackingUrl": "https://ubereats.com/track/order_789"
  }
}
```

---

### Place Custom Order

```http
POST /api/food/order
Authorization: Bearer {token}
Content-Type: application/json

{
  "provider": "ubereats",
  "restaurantId": "rest_456",
  "items": [
    {
      "id": "item_789",
      "quantity": 2,
      "customizations": ["No onions", "Extra cheese"]
    }
  ],
  "deliveryAddress": {
    "street": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "zipCode": "94102"
  },
  "tip": 5.00
}
```

---

## 📞 Communication APIs

### Initiate Voice Call

```http
POST /api/communication/call/voice
Authorization: Bearer {token}
Content-Type: application/json

{
  "to": "+14155551234",
  "contactName": "Alice Johnson"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "callId": "call_1234567890",
    "status": "initiated",
    "to": "+14155551234",
    "from": "+14155559876",
    "startedAt": "2025-10-21T14:30:00Z",
    "twilioCallSid": "CAxxxxxxxxxxxxxxxxxxxxxx"
  }
}
```

---

### Start Video Call

```http
POST /api/communication/call/video
Authorization: Bearer {token}
Content-Type: application/json

{
  "participants": [
    "alice@example.com",
    "bob@example.com"
  ],
  "roomName": "Quick Sync"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "roomId": "room_1234567890",
    "roomName": "Quick Sync",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "joinUrl": "https://app.lifeassistant.com/video/room_1234567890",
    "participants": [
      {
        "email": "alice@example.com",
        "status": "invited"
      },
      {
        "email": "bob@example.com",
        "status": "invited"
      }
    ],
    "createdAt": "2025-10-21T14:30:00Z",
    "expiresAt": "2025-10-21T16:30:00Z"
  }
}
```

---

### Get Call History

```http
GET /api/communication/history?type=all&page=1&limit=20
Authorization: Bearer {token}
```

**Query Parameters:**
- `type`: `voice` | `video` | `all` (default: `all`)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20, max: 100)

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "calls": [
      {
        "id": "call_1234567890",
        "type": "voice",
        "contact": {
          "name": "Alice Johnson",
          "phone": "+14155551234"
        },
        "direction": "outbound",
        "duration": 300,
        "status": "completed",
        "startedAt": "2025-10-21T14:30:00Z",
        "endedAt": "2025-10-21T14:35:00Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 3,
      "totalItems": 52
    }
  }
}
```

---

## 🎥 Video Recording APIs

### Start Recording

```http
POST /api/recording/start
Authorization: Bearer {token}
Content-Type: application/json

{
  "recordingType": "screen_camera",
  "title": "Product Demo",
  "quality": "1080p",
  "includeAudio": true
}
```

**Recording Types:**
- `screen_camera`: Screen + camera
- `camera_only`: Camera only
- `screen_only`: Screen only

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "recordingId": "rec_1234567890",
    "status": "recording",
    "uploadUrl": "https://s3.amazonaws.com/upload/...",
    "startedAt": "2025-10-21T14:30:00Z"
  }
}
```

---

### Stop Recording

```http
POST /api/recording/stop
Authorization: Bearer {token}
Content-Type: application/json

{
  "recordingId": "rec_1234567890"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "recordingId": "rec_1234567890",
    "status": "processing",
    "duration": 120,
    "fileSize": 45678912,
    "processingEstimate": 30
  }
}
```

---

### Get Recording

```http
GET /api/recording/{recordingId}
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "recordingId": "rec_1234567890",
    "title": "Product Demo",
    "status": "completed",
    "duration": 120,
    "fileSize": 45678912,
    "quality": "1080p",
    "urls": {
      "video": "https://cdn.lifeassistant.com/recordings/rec_1234567890.mp4",
      "thumbnail": "https://cdn.lifeassistant.com/thumbnails/rec_1234567890.jpg"
    },
    "createdAt": "2025-10-21T14:30:00Z",
    "expiresAt": "2025-11-21T14:30:00Z"
  }
}
```

---

### List Recordings

```http
GET /api/recording/list?page=1&limit=10
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "recordings": [
      {
        "id": "rec_1234567890",
        "title": "Product Demo",
        "duration": 120,
        "thumbnail": "https://cdn.lifeassistant.com/thumbnails/rec_1234567890.jpg",
        "createdAt": "2025-10-21T14:30:00Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 47
    }
  }
}
```

---

## 🤖 AI/Task APIs

### Get AI Task Suggestions

```http
POST /api/tasks/suggestions
Authorization: Bearer {token}
Content-Type: application/json

{
  "sources": ["email", "calendar"],
  "dateRange": {
    "start": "2025-10-21",
    "end": "2025-10-28"
  }
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": "task_1234567890",
        "title": "Review Q4 Report",
        "description": "Sarah mentioned in email that Q4 report needs review by EOD",
        "priority": "high",
        "dueDate": "2025-10-21T17:00:00Z",
        "source": "email",
        "sourceContext": {
          "emailSubject": "Q4 Report Ready",
          "sender": "sarah@example.com",
          "receivedAt": "2025-10-21T09:15:00Z"
        },
        "aiConfidence": 0.95,
        "suggestedDuration": 60
      },
      {
        "id": "task_1234567891",
        "title": "Prepare for team meeting",
        "description": "Team sync scheduled for tomorrow at 2 PM",
        "priority": "medium",
        "dueDate": "2025-10-22T14:00:00Z",
        "source": "calendar",
        "sourceContext": {
          "eventTitle": "Team Sync",
          "eventTime": "2025-10-22T14:00:00Z"
        },
        "aiConfidence": 0.87,
        "suggestedDuration": 30
      }
    ],
    "summary": {
      "totalTasks": 2,
      "highPriority": 1,
      "mediumPriority": 1,
      "lowPriority": 0,
      "estimatedTotalTime": 90
    }
  }
}
```

---

### Create Task

```http
POST /api/tasks/create
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Review marketing proposal",
  "description": "Review and provide feedback on Q4 marketing proposal",
  "priority": "high",
  "dueDate": "2025-10-23T17:00:00Z",
  "tags": ["marketing", "review"]
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "taskId": "task_1234567892",
    "title": "Review marketing proposal",
    "description": "Review and provide feedback on Q4 marketing proposal",
    "priority": "high",
    "dueDate": "2025-10-23T17:00:00Z",
    "status": "pending",
    "tags": ["marketing", "review"],
    "createdAt": "2025-10-21T14:30:00Z"
  }
}
```

---

### Update Task

```http
PATCH /api/tasks/{taskId}
Authorization: Bearer {token}
Content-Type: application/json

{
  "status": "completed",
  "completedAt": "2025-10-21T15:00:00Z"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "taskId": "task_1234567892",
    "title": "Review marketing proposal",
    "status": "completed",
    "completedAt": "2025-10-21T15:00:00Z",
    "updatedAt": "2025-10-21T15:00:00Z"
  }
}
```

---

### List Tasks

```http
GET /api/tasks/list?status=pending&priority=high&page=1&limit=20
Authorization: Bearer {token}
```

**Query Parameters:**
- `status`: `pending` | `in_progress` | `completed` | `all`
- `priority`: `low` | `medium` | `high` | `all`
- `page`: Page number
- `limit`: Items per page

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": "task_1234567890",
        "title": "Review Q4 Report",
        "priority": "high",
        "dueDate": "2025-10-21T17:00:00Z",
        "status": "pending",
        "createdAt": "2025-10-21T10:00:00Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 2,
      "totalItems": 15
    }
  }
}
```

---

## 👤 User Management APIs

### Get User Profile

```http
GET /api/user/profile
Authorization: Bearer {token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "john@example.com",
      "fullName": "John Doe",
      "phone": "+14155551234",
      "avatar": "https://cdn.lifeassistant.com/avatars/user_1.jpg",
      "preferences": {
        "theme": "light",
        "language": "en",
        "timezone": "America/Los_Angeles",
        "notifications": {
          "email": true,
          "push": true,
          "sms": false
        }
      },
      "createdAt": "2025-10-01T10:00:00Z"
    }
  }
}
```

---

### Update User Profile

```http
PATCH /api/user/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "fullName": "John Smith",
  "phone": "+14155559999",
  "preferences": {
    "theme": "dark",
    "notifications": {
      "email": true,
      "push": true,
      "sms": true
    }
  }
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "john@example.com",
      "fullName": "John Smith",
      "phone": "+14155559999",
      "preferences": {
        "theme": "dark",
        "notifications": {
          "email": true,
          "push": true,
          "sms": true
        }
      },
      "updatedAt": "2025-10-21T14:30:00Z"
    }
  }
}
```

---

## 🔌 External API Integration Guide

### Stripe Integration (Payments)

```javascript
// Server-side: Create payment intent
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createPayment(amount, currency, customerId) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: currency,
      customer: customerId,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    
    return paymentIntent;
  } catch (error) {
    throw new Error(`Payment failed: ${error.message}`);
  }
}
```

**Setup:**
1. Sign up at https://stripe.com
2. Get API keys from Dashboard → Developers → API keys
3. Install SDK: `npm install stripe`
4. Use test mode during development

---

### OpenAI GPT-4 (AI Tasks)

```javascript
// Server-side: Extract tasks from text
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function extractTasks(emailContent, calendarEvents) {
  try {
    const prompt = `Extract actionable tasks from the following:
    
    Emails: ${JSON.stringify(emailContent)}
    Calendar: ${JSON.stringify(calendarEvents)}
    
    Return JSON with: title, priority (high/medium/low), dueDate, description`;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a task extraction assistant."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
    });
    
    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    throw new Error(`AI extraction failed: ${error.message}`);
  }
}
```

**Setup:**
1. Sign up at https://platform.openai.com
2. Get API key from Account → API keys
3. Install SDK: `npm install openai`
4. Monitor usage at https://platform.openai.com/usage

---

### Twilio (Voice/Video)

```javascript
// Server-side: Initiate voice call
const twilio = require('twilio');
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function makeCall(to, from) {
  try {
    const call = await client.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml',
      to: to,
      from: from
    });
    
    return call.sid;
  } catch (error) {
    throw new Error(`Call failed: ${error.message}`);
  }
}

// Generate video token
const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

function generateVideoToken(identity, roomName) {
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );
  
  token.identity = identity;
  
  const videoGrant = new VideoGrant({
    room: roomName
  });
  
  token.addGrant(videoGrant);
  
  return token.toJwt();
}
```

**Setup:**
1. Sign up at https://www.twilio.com/try-twilio
2. Get credentials from Console → Account → Keys & Credentials
3. Install SDK: `npm install twilio`
4. Get trial phone number for testing

---

### Google Calendar API

```javascript
// Server-side: Create calendar event
const { google } = require('googleapis');

async function createEvent(auth, eventDetails) {
  const calendar = google.calendar({ version: 'v3', auth });
  
  try {
    const event = {
      summary: eventDetails.title,
      description: eventDetails.description,
      start: {
        dateTime: eventDetails.startTime,
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: eventDetails.endTime,
        timeZone: 'America/Los_Angeles',
      },
      attendees: eventDetails.attendees.map(email => ({ email })),
      conferenceData: {
        createRequest: {
          requestId: Math.random().toString(36),
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      }
    };
    
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1
    });
    
    return response.data;
  } catch (error) {
    throw new Error(`Calendar event creation failed: ${error.message}`);
  }
}
```

**Setup:**
1. Go to https://console.cloud.google.com
2. Create project → Enable Google Calendar API
3. Create OAuth 2.0 credentials
4. Install SDK: `npm install googleapis`

---

## 📊 Rate Limits

| Endpoint | Rate Limit | Window |
|----------|-----------|--------|
| Authentication | 5 requests | 15 minutes |
| Payments | 10 requests | 1 minute |
| Meetings | 20 requests | 1 minute |
| Food Orders | 10 requests | 1 minute |
| Communication | 30 requests | 1 minute |
| Recording | 5 requests | 1 minute |
| AI Tasks | 10 requests | 1 minute |
| User Profile | 30 requests | 1 minute |

**Rate Limit Headers:**
```http
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 5
X-RateLimit-Reset: 1634828400
```

**Rate Limit Exceeded Response (429):**
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later.",
    "retryAfter": 60
  }
}
```

---

## 🔒 Authentication

All API requests require authentication via JWT token in the Authorization header:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Token Expiry:**
- Access Token: 1 hour
- Refresh Token: 30 days

**Refresh Token Flow:**
1. Access token expires
2. Use refresh token to get new access token
3. Continue making requests with new access token

---

## ❌ Error Codes

| Code | HTTP Status | Description |
|------|------------|-------------|
| `VALIDATION_ERROR` | 400 | Invalid request data |
| `UNAUTHORIZED` | 401 | Invalid or expired token |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |
| `SERVICE_UNAVAILABLE` | 503 | Service temporarily unavailable |

**Error Response Format:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      "field": "Additional context"
    }
  }
}
```

---

## 🧪 Testing

### Using cURL

```bash
# Login
curl -X POST https://api.lifeassistant.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Create payment with token
curl -X POST https://api.lifeassistant.com/api/payments/send \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"amount":50.00,"recipientEmail":"recipient@example.com"}'
```

### Using Postman

1. Import collection from `/docs/postman_collection.json`
2. Set environment variables:
   - `base_url`: https://api.lifeassistant.com
   - `token`: Your JWT token
3. Run requests

---

## 📚 Additional Resources

- **Swagger/OpenAPI Docs**: https://api.lifeassistant.com/docs
- **Postman Collection**: Available in repository
- **Code Examples**: See `/examples` directory
- **SDK Libraries**: 
  - JavaScript/TypeScript: `npm install @lifeassistant/sdk`
  - Python: `pip install lifeassistant-sdk`

---

This API reference provides complete documentation for integrating with the Life Assistant Dashboard. For implementation details, refer to the [main project plan](./ONE_CLICK_LIFE_ASSISTANT_PLAN.md).

**Need help? Open an issue or contact support!**
