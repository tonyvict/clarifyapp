# Clarify - Tutor Q&A Hub

A React Native Expo app for tutors to manage student questions and provide structured answers. This is a demo implementation showing the tutor's perspective of a Q&A hub where students can post questions and tutors can provide structured solutions.

## Features

### Current MVP Features
- **Channels per tutor/class/subject** - Organize questions by different classes
- **Ask a question** - Students can post text + images/PDFs with tags
- **Tutor answers** - Structured steps, hints, final answer, attachments
- **Pin/unpin by tutor** - Mark important Q&As for the whole cohort
- **Search & filter** - Find questions by tag/keyword
- **Student reactions** - Thumbs up and engagement tracking
- **Voice recording feature** - Tutors can post audio explanations
- **AI integration ready** - Prepared for transcripting and condensing

### Demo Features
- **Mock Data** - Pre-populated with sample questions and answers
- **Responsive Design** - Works on different screen sizes
- **Modern UI** - Clean, intuitive interface with proper spacing and typography
- **Interactive Elements** - Buttons, modals, and navigation

## Project Structure

```
clarifyapp/
├── App.tsx                 # Main app component
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Separator.tsx
│   ├── ChannelList.tsx     # Channel selection component
│   ├── SearchBar.tsx       # Search functionality
│   ├── ThreadCard.tsx      # Thread display (card format)
│   ├── ThreadRow.tsx       # Thread display (list format)
│   └── ThreadDetailModal.tsx # Detailed thread view
├── data/
│   └── mockData.ts         # Sample data for demo
├── types/
│   └── index.ts            # TypeScript type definitions
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd clarifyapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Usage

### Tutor Dashboard
- **Channel Selection**: Choose between different classes/subjects
- **Search**: Find questions by title or tags
- **Pinned Threads**: View important Q&As pinned by the tutor
- **Recent Threads**: Browse recent student questions

### Thread Management
- **View Details**: Tap any thread to see full question and answer
- **Tutor Actions**:
  - Pin/Unpin threads for the cohort
  - Mark questions as solved
  - Record voice explanations
  - Generate AI transcripts
  - Add structured step-by-step answers

### Sample Data
The app includes mock data with:
- 4 different channels (Math, Chemistry, Physics, Biology)
- Sample questions with different difficulty levels
- Structured tutor answers with step-by-step solutions
- Various tags for categorization

## Future Enhancements

- **Student View**: Interface for students to ask questions
- **Real-time Updates**: Live notifications for new questions
- **File Attachments**: Support for images and PDFs
- **Voice Recording**: Actual audio recording functionality
- **AI Integration**: Real AI transcript generation
- **Scheduling**: Book consultation sessions
- **Analytics**: Track question patterns and tutor performance

## Technology Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe JavaScript
- **Expo Vector Icons** - Icon library
- **React Navigation** - Navigation library (ready for implementation)

## Contributing

This is a demo project showcasing the tutor Q&A hub concept. Feel free to fork and extend with additional features or improvements.

## License

This project is for demonstration purposes. Please ensure you have the right to use any code or concepts in your own projects.
