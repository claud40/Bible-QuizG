# 📖 Bible Quiz App

A highly polished, interactive Bible Quiz application featuring deep scriptural questions, engaging mechanics, and immersive visual rewards. 

---

## What the App Is

The **Bible Quiz App** is a responsive, feature-rich quiz game designed to test, teach, and celebrate biblical knowledge. It contains exactly **500 unique, hand-crafted questions** spanning across the Old Testament, New Testament, and General Knowledge, organized into multiple difficulty levels (Easy, Medium, Hard). 

The application is styled with a gorgeous, high-contrast theme, responsive layouts, and features custom sound effects, progress tracking, and celebratory animations.

---

## How It Works

### 1. Offline-First Architecture
The app functions **100% offline** without requiring an active internet connection. On its first load, an integrated **Service Worker** caches all assets—including the quiz engine, 500 questions, audio effects, and images—directly within the browser. Once cached, the entire game loads instantly and runs flawlessly in offline mode, airplane mode, or when packaged as a standalone application.

### 2. Intelligent Quiz Engine
*   **Structured Gameplay**: Users can filter quizzes by difficulty level or biblical category.
*   **Interactive Controls**: Each question features instant feedback with correct/incorrect status indicators and detailed Biblical scripture references (e.g., Genesis 1:1, Matthew 26:36) explaining the answer.
*   **Progressive Difficulty**: Questions are carefully balanced to keep players engaged and learning.

### 3. Score Tracking and Local Persistence
*   **Saved Stats**: All high scores, total questions answered, correct/incorrect ratios, and unlocked achievements are persisted locally in the browser's `localStorage`.
*   **Achievements**: Players earn custom milestone badges as they answer more questions correctly, encouraging continuous play and study.

### 4. Dynamic Victory Celebrations
*   **Interactive Feedback**: Visual and auditory cues celebrate user progress.
*   **Grand Glitter Blast**: Scoring a high marks at the end of a quiz triggers a spectacular, two-stage sequential burst of multi-colored stars, sparks, and glittering particles that explode outwards from the center of the screen to celebrate the user's victory.
