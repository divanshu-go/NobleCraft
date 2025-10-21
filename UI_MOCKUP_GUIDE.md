# 🎨 UI/UX Mockup Guide
## One-Click Life Assistant Dashboard - Visual Design Specifications

---

## 📱 Dashboard Views

### Desktop View (1920x1080)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════════════════╗  │
│  ║  🎯 Life Assistant Dashboard         👤 John Doe  🔔₃  ⚙️  🌙      ║  │
│  ╚═══════════════════════════════════════════════════════════════════════╝  │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  "Good morning, John! You have 3 meetings today and 5 tasks pending" │    │
│  │  🌤️ 72°F in San Francisco                                           │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                               │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────┐  │
│  │ ┌────────────────┐   │  │ ┌────────────────┐   │  │ ┌──────────────┐ │  │
│  │ │       💰       │   │  │ │       📅       │   │  │ │      🍔      │ │  │
│  │ └────────────────┘   │  │ └────────────────┘   │  │ └──────────────┘ │  │
│  │                      │  │                      │  │                  │  │
│  │  Quick Pay          │  │  Book Meeting        │  │  Order Food      │  │
│  │  ═══════════         │  │  ═══════════         │  │  ═══════════     │  │
│  │                      │  │                      │  │                  │  │
│  │  Send money to       │  │  Next available:     │  │  Reorder:        │  │
│  │  ┌──────────────┐    │  │  Today at 2:30 PM    │  │  Chipotle Bowl   │  │
│  │  │💳 Select...  │▼   │  │                      │  │  $12.99          │  │
│  │  └──────────────┘    │  │  Duration: 30 min    │  │                  │  │
│  │                      │  │                      │  │  Est: 25-35 min  │  │
│  │  Amount: $           │  │  ┌────────────────┐  │  │                  │  │
│  │  ┌──────────────┐    │  │  │ Alice Johnson  │  │  │  ┌────────────┐ │  │
│  │  │    500       │    │  │  │ Bob Smith      │✓ │  │  │  🛒 Order  │ │  │
│  │  └──────────────┘    │  │  │ Carol White    │  │  │  │   $12.99   │ │  │
│  │                      │  │  └────────────────┘  │  │  └────────────┘ │  │
│  │  ┌──────────────┐    │  │                      │  │                  │  │
│  │  │💸 Send Now   │◄━━━│  │  ┌──────────────┐    │  │  Change Order   │  │
│  │  └──────────────┘    │  │  │📆 Schedule   │◄━━━│  │  ⚙️ Settings    │  │
│  └──────────────────────┘  └──┴──────────────┘────┘  └──────────────────┘  │
│        [Hover Effect]            [AI Suggested]         [One-Click]          │
│                                                                               │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────┐  │
│  │ ┌────────────────┐   │  │ ┌────────────────┐   │  │ ┌──────────────┐ │  │
│  │ │       📞       │   │  │ │       🎥       │   │  │ │      🤖      │ │  │
│  │ └────────────────┘   │  │ └────────────────┘   │  │ └──────────────┘ │  │
│  │                      │  │                      │  │                  │  │
│  │  Quick Call          │  │  Record Video        │  │  AI Tasks        │  │
│  │  ═══════════         │  │  ═══════════         │  │  ═══════════     │  │
│  │                      │  │                      │  │                  │  │
│  │  Recent Contacts:    │  │  Recording mode:     │  │  🔴 High Priority│  │
│  │                      │  │                      │  │  ⚠️ Review Q4    │  │
│  │  👤 Alice            │  │  ⚫ Screen+Camera    │  │     Report       │  │
│  │     📞 Voice  📹 Video│  │  ⚫ Camera Only      │  │     Due: Today   │  │
│  │                      │  │  ⚫ Screen Only      │  │                  │  │
│  │  👤 Bob              │  │                      │  │  🟡 Medium       │  │
│  │     📞 Voice  📹 Video│  │  Quality: 1080p HD   │  │  📧 Reply Sarah │  │
│  │                      │  │                      │  │     Due: Tomorrow│  │
│  │  👤 Carol            │  │  ┌──────────────┐    │  │                  │  │
│  │     📞 Voice  📹 Video│  │  │⏺️ Start Rec  │◄━━━│  │  🟢 Low Priority │  │
│  │                      │  │  └──────────────┘    │  │  ✅ Check with   │  │
│  │  🔍 Search...        │  │                      │  │     team         │  │
│  └──────────────────────┘  └──────────────────────┘  └──────────────────┘  │
│                                                                               │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  📊 Today's Overview                                                  │  │
│  │  ═══════════════════                                                  │  │
│  │                                                                        │  │
│  │  Meetings: 3 scheduled  │  Emails: 12 unread  │  Spending: $2,450   │  │
│  │  Tasks: 5 pending       │  Calls: 8 today     │  Saved Time: 2.5hrs │  │
│  │                                                                        │  │
│  │  ▓▓▓▓▓▓▓▓░░░░ 60% of day scheduled                                   │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│  [Quick Actions Bar]                                                         │
│  ⌘+P Pay  │  ⌘+M Meeting  │  ⌘+K Command  │  ⌘+/ Search                    │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Tablet View (768x1024)

```
┌─────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════╗  │
│  ║  🎯 Dashboard    🔔₃  ⚙️  👤 John    ║  │
│  ╚═══════════════════════════════════════════╝  │
│                                                  │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │      💰         │  │      📅         │    │
│  │  Quick Pay      │  │  Book Meeting    │    │
│  │                 │  │                  │    │
│  │  [Send $500]    │  │  [Schedule]      │    │
│  └──────────────────┘  └──────────────────┘    │
│                                                  │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │      🍔         │  │      📞         │    │
│  │  Order Food     │  │  Quick Call      │    │
│  │                 │  │                  │    │
│  │  [Reorder]      │  │  [Call Alice]    │    │
│  └──────────────────┘  └──────────────────┘    │
│                                                  │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │      🎥         │  │      🤖         │    │
│  │  Record Video   │  │  AI Tasks        │    │
│  │                 │  │                  │    │
│  │  [Start]        │  │  [View 5 Tasks]  │    │
│  └──────────────────┘  └──────────────────┘    │
│                                                  │
│  ┌──────────────────────────────────────────┐  │
│  │  📊 Today: 3 meetings, 5 tasks pending  │  │
│  └──────────────────────────────────────────┘  │
│                                                  │
│  [☰ Menu]  [🏠 Home]  [📊 Stats]  [⚙️ Settings] │
└──────────────────────────────────────────────────┘
```

### Mobile View (375x812)

```
┌──────────────────────────┐
│  ╔══════════════════════╗ │
│  ║  🎯  🔔₃  ☰        ║ │
│  ╚══════════════════════╝ │
│                           │
│  ┌──────────────────────┐ │
│  │  Good morning! 👋    │ │
│  │  3 meetings today    │ │
│  └──────────────────────┘ │
│                           │
│  ┌──────────────────────┐ │
│  │        💰           │ │
│  │    Quick Pay        │ │
│  │                     │ │
│  │    Send $500        │ │
│  │                     │ │
│  │  [💸 Send Now]      │ │
│  └──────────────────────┘ │
│                           │
│  ┌──────────────────────┐ │
│  │        📅           │ │
│  │   Book Meeting      │ │
│  │                     │ │
│  │   Today 2:30 PM     │ │
│  │                     │ │
│  │  [📆 Schedule]      │ │
│  └──────────────────────┘ │
│                           │
│  ┌──────────────────────┐ │
│  │        🍔           │ │
│  │    Order Food       │ │
│  │                     │ │
│  │   Chipotle $12.99   │ │
│  │                     │ │
│  │  [🛒 Reorder]       │ │
│  └──────────────────────┘ │
│                           │
│  ┌──────────────────────┐ │
│  │ 📞 Call  🎥 Record   │ │
│  │ 🤖 Tasks  ⚙️ More   │ │
│  └──────────────────────┘ │
│                           │
│  [═══════════════════════] │
│  [🏠][📊][💬][👤][⚙️] │
└──────────────────────────┘
```

---

## 🎨 Color Palette & Usage

### Primary Colors

```css
/* Blue - Primary Actions */
--primary-50:  #eff6ff   /* Lightest background */
--primary-100: #dbeafe   /* Hover background */
--primary-200: #bfdbfe   /* Border light */
--primary-300: #93c5fd   /* Border */
--primary-400: #60a5fa   /* Hover state */
--primary-500: #3b82f6   /* Default button */
--primary-600: #2563eb   /* Active state ★ MAIN */
--primary-700: #1d4ed8   /* Pressed state */
--primary-800: #1e40af   /* Dark mode accent */
--primary-900: #1e3a8a   /* Darkest */
```

### Semantic Colors

```css
/* Success - Green */
--success-50:  #f0fdf4
--success-500: #22c55e
--success-600: #10b981   /* ★ MAIN */
--success-700: #059669

/* Warning - Amber */
--warning-50:  #fffbeb
--warning-500: #f59e0b   /* ★ MAIN */
--warning-600: #d97706
--warning-700: #b45309

/* Danger - Red */
--danger-50:  #fef2f2
--danger-500: #ef4444    /* ★ MAIN */
--danger-600: #dc2626
--danger-700: #b91c1c

/* Info - Indigo */
--info-50:  #eef2ff
--info-500: #6366f1
--info-600: #4f46e5      /* ★ MAIN */
--info-700: #4338ca
```

### Neutral Colors

```css
/* Gray Scale */
--gray-50:  #f9fafb      /* ★ Page background */
--gray-100: #f3f4f6      /* Card background */
--gray-200: #e5e7eb      /* Border */
--gray-300: #d1d5db      /* Disabled border */
--gray-400: #9ca3af      /* Placeholder text */
--gray-500: #6b7280      /* Secondary text */
--gray-600: #4b5563      /* ★ Body text */
--gray-700: #374151      /* Heading */
--gray-800: #1f2937      /* ★ Dark mode bg */
--gray-900: #111827      /* Darkest text */
```

### Gradients

```css
/* Hero Gradient */
.gradient-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Card Gradient */
.gradient-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

/* Success Gradient */
.gradient-success {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
}

/* AI Gradient */
.gradient-ai {
  background: linear-gradient(135deg, #667eea 0%, #f093fb 50%, #667eea 100%);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## 🎯 Component States

### Button States

```
╔══════════════════════════════════════════════════════════╗
║                    BUTTON STATES                          ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  Default State:                                          ║
║  ┌─────────────────┐                                     ║
║  │  💸 Send Now    │  bg-primary-600, text-white        ║
║  └─────────────────┘  shadow-sm                         ║
║                                                           ║
║  Hover State:                                            ║
║  ┌─────────────────┐                                     ║
║  │  💸 Send Now    │◄━━ bg-primary-700 (darker)         ║
║  └─────────────────┘  shadow-md (larger)                ║
║        ▲               transform: translateY(-2px)       ║
║                                                           ║
║  Active/Pressed:                                         ║
║  ┌─────────────────┐                                     ║
║  │  💸 Send Now    │  bg-primary-800                    ║
║  └─────────────────┘  transform: scale(0.98)            ║
║        ▼                                                  ║
║                                                           ║
║  Loading State:                                          ║
║  ┌─────────────────┐                                     ║
║  │  ⌛ Sending...  │  bg-primary-600, opacity-75        ║
║  └─────────────────┘  cursor: not-allowed               ║
║         ●●●            Spinner animation                 ║
║                                                           ║
║  Success State:                                          ║
║  ┌─────────────────┐                                     ║
║  │  ✅ Sent!       │  bg-success-600                    ║
║  └─────────────────┘  Checkmark animation (scale in)    ║
║                                                           ║
║  Disabled State:                                         ║
║  ┌─────────────────┐                                     ║
║  │  💸 Send Now    │  bg-gray-300, text-gray-500        ║
║  └─────────────────┘  cursor: not-allowed, opacity-50   ║
║                                                           ║
╚══════════════════════════════════════════════════════════╝
```

### Card States

```
╔══════════════════════════════════════════════════════════╗
║                     CARD STATES                           ║
╠══════════════════════════════════════════════════════════╣
║                                                           ║
║  Default:                                                ║
║  ┌──────────────────────┐                                ║
║  │ 💰 Quick Pay         │  bg-white, shadow-md          ║
║  │ Send money to...     │  border: none                 ║
║  │                      │  rounded-xl (12px)            ║
║  │ [Button]             │                                ║
║  └──────────────────────┘                                ║
║                                                           ║
║  Hover:                                                  ║
║  ┌──────────────────────┐                                ║
║  │ 💰 Quick Pay         │  shadow-lg (larger)           ║
║  │ Send money to...     │  transform: translateY(-4px)  ║
║  │                      │  transition: 200ms            ║
║  │ [Button]             │                                ║
║  └──────────────────────┘                                ║
║         ▲                                                 ║
║                                                           ║
║  Active (being used):                                    ║
║  ┌──────────────────────┐                                ║
║  │ 💰 Quick Pay      🔵 │  border: 2px primary-600      ║
║  │ Send money to...     │  shadow-lg                    ║
║  │ └─────────────┘      │  Glow effect                  ║
║  │ [Button]             │                                ║
║  └──────────────────────┘                                ║
║                                                           ║
║  Loading:                                                ║
║  ┌──────────────────────┐                                ║
║  │ 💰 Quick Pay      ⌛ │  Skeleton animation           ║
║  │ ████████████░░░░░    │  Shimmer effect               ║
║  │                      │                                ║
║  │ [████████░░░]        │                                ║
║  └──────────────────────┘                                ║
║                                                           ║
║  Error:                                                  ║
║  ┌──────────────────────┐                                ║
║  │ 💰 Quick Pay      ⚠️ │  border: 2px danger-500       ║
║  │ Send money to...     │  bg-danger-50                 ║
║  │ ❌ Payment failed    │  Shake animation              ║
║  │ [Try Again]          │                                ║
║  └──────────────────────┘                                ║
║                                                           ║
╚══════════════════════════════════════════════════════════╝
```

---

## 🎭 Animations & Transitions

### Entry Animations

```javascript
// Stagger animation for cards
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

// Usage in React
<motion.div
  custom={index}
  initial="hidden"
  animate="visible"
  variants={cardVariants}
>
  <ActionCard />
</motion.div>
```

### Button Click Animation

```javascript
const buttonVariants = {
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  },
  hover: {
    y: -2,
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: { duration: 0.2 }
  }
};
```

### Success Animation

```javascript
// Checkmark drawing animation
const checkmarkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.5, ease: "easeInOut" },
      opacity: { duration: 0.2 }
    }
  }
};
```

### Loading States

```css
/* Skeleton shimmer */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #f8f8f8 40px,
    #f0f0f0 80px
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

---

## 📏 Spacing & Typography

### Spacing Scale

```css
/* Tailwind-based spacing */
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */  ★ Card padding
--space-8:  2rem;     /* 32px */  ★ Section spacing
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */  ★ Page margin
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Typography Scale

```css
/* Font Sizes */
--text-xs:   0.75rem;   /* 12px */
--text-sm:   0.875rem;  /* 14px */  ★ Secondary text
--text-base: 1rem;      /* 16px */  ★ Body text
--text-lg:   1.125rem;  /* 18px */  ★ Card titles
--text-xl:   1.25rem;   /* 20px */
--text-2xl:  1.5rem;    /* 24px */  ★ Section headings
--text-3xl:  1.875rem;  /* 30px */
--text-4xl:  2.25rem;   /* 36px */  ★ Page titles
--text-5xl:  3rem;      /* 48px */
--text-6xl:  3.75rem;   /* 60px */

/* Font Weights */
--font-light:    300;
--font-normal:   400;    ★ Body
--font-medium:   500;    ★ Labels
--font-semibold: 600;    ★ Headings
--font-bold:     700;
--font-extrabold: 800;

/* Line Heights */
--leading-tight:  1.25;  ★ Headings
--leading-normal: 1.5;   ★ Body
--leading-relaxed: 1.75; ★ Long text
```

### Font Stack

```css
/* Primary Font (Modern Sans-Serif) */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
  'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
  'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

/* Monospace (for code/numbers) */
font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 
  'Courier New', monospace;

/* Emoji Font */
font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 
  'Segoe UI Symbol', 'Noto Color Emoji';
```

---

## 🎨 Icon Library

### Feature Icons (32x32px)

```
Payment Icons:
💰 - Main payment icon
💸 - Sending money animation
💳 - Credit card
💵 - Cash/dollar
🏦 - Bank
📊 - Financial stats

Meeting Icons:
📅 - Calendar
🗓️ - Planner
📆 - Date
⏰ - Time
🔔 - Reminder
👥 - Group meeting

Food Icons:
🍔 - Hamburger
🍕 - Pizza
🥗 - Salad
🍱 - Bento box
🍜 - Noodles
🥤 - Drink

Communication Icons:
📞 - Phone call
☎️ - Classic phone
📱 - Mobile
📹 - Video camera
🎥 - Movie camera
💬 - Chat bubble

Recording Icons:
⏺️ - Record button
🎬 - Clapperboard
📸 - Camera
🖥️ - Screen
⏸️ - Pause
⏹️ - Stop

AI/Task Icons:
🤖 - Robot/AI
🧠 - Brain/intelligence
✨ - Magic/AI sparkle
✅ - Checkmark
📋 - Clipboard/tasks
✏️ - Edit/write

Status Icons:
🔴 - High priority
🟡 - Medium priority
🟢 - Low priority
⚠️ - Warning
❌ - Error
✓ - Success
```

### UI Icons (24x24px - Heroicons/Lucide)

```javascript
import {
  // Actions
  CheckIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  
  // Navigation
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  
  // Interface
  Cog6ToothIcon,      // Settings
  BellIcon,           // Notifications
  UserCircleIcon,     // Profile
  MagnifyingGlassIcon,// Search
  
  // Common
  HomeIcon,
  CalendarIcon,
  ClockIcon,
  CreditCardIcon,
  PhoneIcon,
  VideoCameraIcon,
  DocumentIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Extra Small (Mobile) */
/* Default styles - no media query needed */
.container {
  padding: 1rem;
  max-width: 100%;
}

/* Small (Large Mobile) */
@media (min-width: 640px) {
  .container {
    padding: 1.5rem;
    max-width: 640px;
  }
}

/* Medium (Tablet) */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .container {
    padding: 2rem;
    max-width: 768px;
  }
}

/* Large (Desktop) */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .container {
    padding: 3rem;
    max-width: 1024px;
  }
}

/* Extra Large (Wide Desktop) */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* 2XL (Ultra Wide) */
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
```

---

## 🎬 Interaction Patterns

### Gesture Controls (Mobile)

```
┌─────────────────────────────────────┐
│  Swipe Right on Task Card           │
│  ════════════════════════════       │
│                                      │
│  ┌────────────────┐                 │
│  │ 📋 Task        │ ═════▶  ✅      │
│  │ Complete this  │                 │
│  └────────────────┘                 │
│  Marks task as complete              │
│                                      │
│  Swipe Left on Task Card             │
│  ════════════════════════════       │
│                                      │
│         ⏰  ◀═════ ┌────────────┐   │
│                    │ 📋 Task    │   │
│                    │ Snooze it  │   │
│                    └────────────┘   │
│  Snoozes task for 1 hour            │
│                                      │
│  Long Press on Card                  │
│  ════════════════════════════       │
│                                      │
│  ┌────────────────┐                 │
│  │ 💰 Payment     │ ← Hold (500ms)  │
│  │ ┌────────────┐ │                 │
│  │ │ Quick Pay  │ │                 │
│  │ │ History    │ │                 │
│  │ │ Settings   │ │                 │
│  │ └────────────┘ │                 │
│  └────────────────┘                 │
│  Shows quick action menu            │
│                                      │
│  Pull to Refresh                     │
│  ════════════════════════════       │
│                                      │
│    ↓ Pull Down                      │
│   ⌄⌄⌄                               │
│  🔄 Refreshing...                   │
│   ∧∧∧                               │
│    ↑ Release                        │
│                                      │
└─────────────────────────────────────┘
```

### Keyboard Navigation

```
Tab Order Flow:
═══════════════

1. Header Search         (⭾ Tab)
   └─▶ 2. Payment Card   (⭾ Tab)
       └─▶ 3. Meeting Card   (⭾ Tab)
           └─▶ 4. Food Card      (⭾ Tab)
               └─▶ 5. Call Card      (⭾ Tab)
                   └─▶ 6. Recording Card (⭾ Tab)
                       └─▶ 7. Tasks Card     (⭾ Tab)
                           └─▶ Back to 1

Focus Indicators:
• 2px solid blue ring
• 4px offset from element
• Smooth transition (150ms)

Action Shortcuts:
⌘/Ctrl + P  → Quick Payment
⌘/Ctrl + M  → New Meeting
⌘/Ctrl + K  → Command Palette
⌘/Ctrl + /  → Search
Enter       → Activate focused button
Escape      → Close modal
Space       → Toggle checkbox
```

---

## 🎨 Dark Mode

### Color Adjustments

```css
/* Light Mode (Default) */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border: #e5e7eb;
}

/* Dark Mode */
[data-theme="dark"] {
  --bg-primary: #1f2937;
  --bg-secondary: #111827;
  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;
  --border: #374151;
}

/* Card in Dark Mode */
.card {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

/* Button in Dark Mode */
.button-primary {
  /* Same colors - good contrast in both modes */
  background: #2563eb;
  color: #ffffff;
}

[data-theme="dark"] .button-primary {
  /* Slightly brighter in dark mode */
  background: #3b82f6;
}

/* Shadows in Dark Mode */
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  /* Add subtle glow */
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05),
              0 4px 6px rgba(0, 0, 0, 0.3);
}
```

### Dark Mode Toggle

```
┌────────────────────────────┐
│  Theme Toggle (Header)     │
│  ════════════════════      │
│                             │
│  ☀️ ◯━━━━━━━◉ 🌙          │
│  Light      Dark            │
│                             │
│  On Click:                  │
│  • Smooth transition (300ms)│
│  • Save to localStorage     │
│  • Animate sun/moon         │
└────────────────────────────┘
```

---

## 🎯 Accessibility Features

### ARIA Labels & Roles

```html
<!-- Action Card -->
<div 
  role="button" 
  tabindex="0"
  aria-label="Quick payment: Send money to contacts"
  aria-describedby="payment-description"
>
  <div id="payment-description">
    Send money instantly to your saved contacts
  </div>
</div>

<!-- Button with loading state -->
<button
  aria-busy="true"
  aria-live="polite"
  aria-label="Sending payment"
>
  <span aria-hidden="true">⌛</span>
  Sending...
</button>

<!-- Form input -->
<label for="amount">
  Amount to send
  <span aria-label="required" aria-required="true">*</span>
</label>
<input
  id="amount"
  type="number"
  aria-describedby="amount-help"
  aria-invalid="false"
/>
<div id="amount-help">
  Enter amount between $1 and $10,000
</div>
```

### Screen Reader Announcements

```javascript
// Success announcement
const announceSuccess = (message) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Usage
announceSuccess('Payment sent successfully to John Doe');
```

### Focus Management

```javascript
// Trap focus in modal
const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  });
};
```

---

## 📐 Grid Layout System

### Desktop Grid (1920px)

```css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
}

/* First row: 3 cards */
/* Second row: 3 cards */
/* Third row: 1 full-width overview */
.overview-widget {
  grid-column: 1 / -1;
}
```

### Visual Grid Structure

```
1920px Container
┌─────────────────────────────────────────────────────────┐
│  Padding: 2rem                                          │
│  ┌───────────────────────────────────────────────────┐ │
│  │  Max-width: 1440px                               │ │
│  │  ┌───────┐  ┌───────┐  ┌───────┐               │ │
│  │  │       │  │       │  │       │               │ │
│  │  │  💰   │  │  📅   │  │  🍔   │  Gap: 24px   │ │
│  │  │       │  │       │  │       │               │ │
│  │  └───────┘  └───────┘  └───────┘               │ │
│  │                                                  │ │
│  │  ┌───────┐  ┌───────┐  ┌───────┐               │ │
│  │  │       │  │       │  │       │               │ │
│  │  │  📞   │  │  🎥   │  │  🤖   │               │ │
│  │  │       │  │       │  │       │               │ │
│  │  └───────┘  └───────┘  └───────┘               │ │
│  │                                                  │ │
│  │  ┌───────────────────────────────────────────┐  │ │
│  │  │  📊 Overview (full width)                 │  │ │
│  │  └───────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

This UI mockup guide provides comprehensive visual specifications for implementing the Life Assistant Dashboard. Use it alongside the [main project plan](./ONE_CLICK_LIFE_ASSISTANT_PLAN.md) and [architecture documentation](./ARCHITECTURE.md).

**For implementation questions, refer to the complete documentation set!**
