You are a senior frontend engineer building an esports AI platform called ScoutIQ.

The backend already exists and exposes REST APIs.
Your task is to implement ONLY frontend features.

STACK:
- React (Vite)
- Tailwind CSS
- Dark mode only (pure black & white)
- No backend logic inside frontend

FEATURES TO BUILD:

1️⃣ Authentication UI (NO OAuth)
- Login page
- Signup page
- Logout button
- Email + password only
- Store JWT token in localStorage
- Redirect unauthenticated users to /login
- Protect AI analysis route

Routes:
- /login
- /signup
- /dashboard
- /analyze

2️⃣ Dashboard
- Welcome message
- "Start AI Analysis" button
- Logout button

3️⃣ AI Analyze Page (MAIN PRODUCT)
This is a **chat-like step-by-step interaction UI**, NOT a free chat.

Flow:
- Step 1: Ask "Which game?" (dropdown: Valorant, CS2, LoL, Dota 2, Fortnite)
- Step 2: Ask "Team A?"
- Step 3: Ask "Team B?"
- Step 4: Ask "Preferred strategy?" (Aggressive / Defensive / Balanced / Macro-heavy)
- Step 5: Ask "Match context?" (Online BO3, LAN Final, Scrim, etc.)

Each step:
- One question at a time
- Disable next until answered
- Show progress indicator (1/5 → 5/5)

After final step:
- Send POST request to backend endpoint:
  POST /api/v1/gemini/matchup
- JSON payload:
{
  teamA,
  teamB,
  game,
  strategy,
  context
}

4️⃣ Result View
- Display winner
- Win probabilities
- Confidence score
- Key factors (bulleted)
- Strategic advice (per team)
- Upset potential

UI REQUIREMENTS:
- Esports terminal feel
- Subtle animations
- Card-based result layout
- No emojis
- No colors except white/gray

DO NOT:
- Implement backend
- Mock AI logic
- Hardcode results

OUTPUT:
- Components
- Routes
- Minimal reusable hooks
- Clean Tailwind classes
