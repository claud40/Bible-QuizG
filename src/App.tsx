import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Bookmark, ArrowLeft, Home, RotateCw, Trophy, ThumbsUp, Book, Settings, X, Volume2, VolumeX, Sun, Moon, Flame, Quote, Check, Sparkles, Star, Share2, Send, MessageSquare, Heart, Smartphone, Download, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QUESTIONS, Question } from './data/questions';
import { GlitterEffect } from './components/GlitterEffect';
import { VictoryGlitter } from './components/VictoryGlitter';
const bibleQuizIcon = '/improved_bible_quiz_icon_1781298923445.jpg';
const installAppIcon = bibleQuizIcon;
import bibleScrollBg from './assets/images/bible_scroll_bg_1781290900593.jpg';

const STORAGE_KEY = 'bibleQuizSettings';
const CATEGORIES = ["All", "Old Testament", "New Testament", "Bible Books", "People", "Events", "General"];
const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];

const DEVOTIONAL_VERSES = [
  { q: "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
  { q: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight.", ref: "Proverbs 3:5-6" },
  { q: "The Lord is my shepherd, I shall not be in want. He makes me lie down in green pastures, He leads me beside quiet waters, He restores my soul.", ref: "Psalm 23:1-3" },
  { q: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
  { q: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", ref: "Isaiah 40:31" },
  { q: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", ref: "Philippians 4:6" },
  { q: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.", ref: "Galatians 5:22-23" },
  { q: "Your word is a lamp for my feet, a light on my path.", ref: "Psalm 119:105" },
  { q: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { q: "And we know that in all things God works for the good of those who love Him, who have been called according to His purpose.", ref: "Romans 8:28" },
  { q: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18" },
  { q: "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life.", ref: "John 3:16" }
];

// Pure CSS & React Motion particles confetti emitter for celebratory success
function ConfettiEffect() {
  const particles = Array.from({ length: 45 });
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", overflow: "hidden", zIndex: 10 }}>
      {particles.map((_, i) => {
        const xStart = Math.random() * 100;
        const xEnd = xStart + (Math.random() * 20 - 10);
        const delay = Math.random() * 0.7;
        const duration = 2.2 + Math.random() * 2.2;
        const size = 6 + Math.random() * 7;
        const colors = ['#8e85f5', '#ffd43b', '#20c997', '#ff8787', '#339af0', '#ae3ec9', '#fcc419'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const shapes = ['50%', '0%'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "110%", x: `${xStart}%`, rotate: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: "-15%",
              x: `${xEnd}%`,
              rotate: Math.random() * 360 * 2.5
            }}
            transition={{
              duration: duration,
              delay: delay,
              ease: "easeOut",
              repeat: 0
            }}
            style={{
              position: "absolute",
              bottom: 0,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: randomColor,
              borderRadius: randomShape,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          />
        );
      })}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<'start' | 'quiz' | 'result'>('start');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [catFilter, setCatFilter] = useState<string>('All');
  const [diffFilter, setDiffFilter] = useState<string>('All');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('parchment');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [questionsPerRound, setQuestionsPerRound] = useState<number>(10);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [fontSize, setFontSize] = useState<number>(16);
  const [glitterTrigger, setGlitterTrigger] = useState<number>(0);

  const [streak, setStreak] = useState<number>(0);
  const [currentVerseIndex, setCurrentVerseIndex] = useState<number>(0);

  const [userRating, setUserRating] = useState<number>(() => {
    try {
      return Number(localStorage.getItem('bibleQuizUserRating')) || 0;
    } catch (e) {
      return 0;
    }
  });
  const [ratingHover, setRatingHover] = useState<number>(0);
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);
  const [shareToast, setShareToast] = useState<boolean>(false);

  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState<boolean>(false);
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState<boolean>(false);

  // Reset transient state when settings panel closes
  useEffect(() => {
    if (!showSettings) {
      setFeedbackSubmitted(false);
      setFeedbackText('');
      setShareToast(false);
    }
  }, [showSettings]);

  // Handle PWA installation check & banner loading
  useEffect(() => {
    try {
      const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true;
      setIsStandalone(isInStandaloneMode);

      const uAgent = window.navigator.userAgent.toLowerCase();
      const detectIOS = /iphone|ipad|ipod/.test(uAgent);
      setIsIOS(detectIOS);

      if (isInStandaloneMode) {
        setShowInstallBanner(false);
        return;
      }

      // Check if dismissed before
      const dismissed = localStorage.getItem('bibleQuizInstallBannerDismissed') === 'true';
      if (!dismissed) {
        // Show banner after a slight layout delay for clean UX entrance transition
        const timer = setTimeout(() => {
          setShowInstallBanner(true);
        }, 200);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      console.warn("PWA check error:", err);
    }
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      try {
        const dismissed = localStorage.getItem('bibleQuizInstallBannerDismissed') === 'true';
        const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true;
        if (!dismissed && !isInStandaloneMode) {
          setShowInstallBanner(true);
        }
      } catch (_) {
        setShowInstallBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Load and calculate streak on mount
  useEffect(() => {
    try {
      const savedStr = localStorage.getItem('bibleQuizStreak');
      let currentStreak = 0;
      if (savedStr) {
        const parsed = JSON.parse(savedStr);
        currentStreak = parsed.streak || 0;
        const lastDate = parsed.lastDate || '';
        if (lastDate) {
          const todayStr = new Date().toISOString().split('T')[0];
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];
          
          if (lastDate !== todayStr && lastDate !== yesterdayStr) {
            currentStreak = 0;
            localStorage.setItem('bibleQuizStreak', JSON.stringify({ streak: 0, lastDate }));
          }
        }
      }
      setStreak(currentStreak);
      
      const randomIndex = Math.floor(Math.random() * DEVOTIONAL_VERSES.length);
      setCurrentVerseIndex(randomIndex);
    } catch (e) {
      console.warn("Error loading streak/verses:", e);
    }
  }, []);

  const recordActivityAndIncreaseStreak = () => {
    try {
      const todayStr = new Date().toISOString().split('T')[0];
      const savedStr = localStorage.getItem('bibleQuizStreak');
      let currentStreak = 0;
      let lastDate = '';
      if (savedStr) {
        const parsed = JSON.parse(savedStr);
        currentStreak = parsed.streak || 0;
        lastDate = parsed.lastDate || '';
      }

      if (lastDate === todayStr) {
        if (currentStreak === 0) currentStreak = 1;
      } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (lastDate === yesterdayStr) {
          currentStreak += 1;
        } else {
          currentStreak = 1; 
        }
      }
      lastDate = todayStr;
      localStorage.setItem('bibleQuizStreak', JSON.stringify({ streak: currentStreak, lastDate }));
      setStreak(currentStreak);
    } catch (e) {
      console.warn("Failed to record activity:", e);
    }
  };

  // Push state helper for phone back-button support 
  const navigateWithState = (newScreen: 'start' | 'quiz' | 'result', settingsOpen: boolean) => {
    try {
      const currentState = window.history.state;
      if (!currentState || currentState.screen !== newScreen || currentState.showSettings !== settingsOpen) {
        window.history.pushState({ screen: newScreen, showSettings: settingsOpen }, '');
      }
    } catch (e) {
      console.warn("History pushState failed", e);
    }
  };

  // Popstate event listener
  useEffect(() => {
    try {
      if (!window.history.state) {
        window.history.replaceState({ screen: 'start', showSettings: false }, '');
      }
    } catch (e) {
      console.warn("History replaceState failed", e);
    }

    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setScreen(event.state.screen || 'start');
        setShowSettings(!!event.state.showSettings);
      } else {
        setScreen('start');
        setShowSettings(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const openSettings = () => {
    setShowSettings(true);
    navigateWithState(screen, true);
  };

  const closeSettings = () => {
    if (window.history.state?.showSettings) {
      window.history.back();
    } else {
      setShowSettings(false);
    }
  };

  // Initialize and load saved settings
  useEffect(() => {
    try {
      const savedStr = localStorage.getItem(STORAGE_KEY);
      if (savedStr) {
        const savedObj = JSON.parse(savedStr);
        if (typeof savedObj.theme === 'string') {
          setTheme(savedObj.theme);
        } else if (typeof savedObj.darkMode === 'boolean') {
          setTheme(savedObj.darkMode ? 'mahogany' : 'parchment');
        }
        if (typeof savedObj.soundEnabled === 'boolean') {
          setSoundEnabled(savedObj.soundEnabled);
        }
        if (typeof savedObj.questionsPerRound === 'number' && [5, 10, 15].includes(savedObj.questionsPerRound)) {
          setQuestionsPerRound(savedObj.questionsPerRound);
        }
        if (typeof savedObj.fontSize === 'number' && savedObj.fontSize >= 14 && savedObj.fontSize <= 24) {
          setFontSize(savedObj.fontSize);
        }
      }
    } catch (err) {
      console.error("Error reading from localStorage:", err);
    }
  }, []);

  // Sync mode changes to document element and body class list
  useEffect(() => {
    const isDark = theme === 'mahogany' || theme === 'royal';
    setDarkMode(isDark);
    
    // Clear previous theme classes
    const themes = ['theme-parchment', 'theme-mahogany', 'theme-royal', 'theme-olive'];
    themes.forEach(t => {
      document.documentElement.classList.remove(t);
      document.body.classList.remove(t);
    });

    // Add current theme class
    document.documentElement.classList.add(`theme-${theme}`);
    document.body.classList.add(`theme-${theme}`);

    document.documentElement.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('dark-mode', isDark);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ darkMode: isDark, theme, soundEnabled, questionsPerRound, fontSize }));
  }, [theme, soundEnabled, questionsPerRound, fontSize]);

  const toggleDarkMode = () => {
    setTheme(prev => (prev === 'mahogany' || prev === 'royal') ? 'parchment' : 'mahogany');
  };

  const getFilteredQuestions = () => {
    return QUESTIONS.filter(q => {
      const catMatch = catFilter === 'All' || q.cat === catFilter;
      const diffMatch = diffFilter === 'All' || q.diff === diffFilter;
      return catMatch && diffMatch;
    });
  };

  const startQuiz = () => {
    const filtered = getFilteredQuestions();
    if (!filtered.length) return;
    
    // Shuffle and pick matching amount
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, questionsPerRound);
    setQuizQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setAnswers(Array(shuffled.length).fill(null));
    setScreen('quiz');
    navigateWithState('quiz', false);
  };

  const handleSelectOption = (optIndex: number) => {
    if (answers[current] !== null) return; // Already answered

    const currentQuestion = quizQuestions[current];
    const updatedAnswers = [...answers];
    updatedAnswers[current] = optIndex;
    setAnswers(updatedAnswers);

    const isCorrect = optIndex === currentQuestion.answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setGlitterTrigger(prev => prev + 1);
      playApplause();
    } else {
      playIncorrectSound();
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (current < quizQuestions.length - 1) {
      setCurrent(prev => prev + 1);
    } else {
      setScreen('result');
      navigateWithState('result', false);
      recordActivityAndIncreaseStreak();
      
      // Play results audio based on success (passed vs failed/lost)
      const pct = Math.round((score / quizQuestions.length) * 100);
      if (pct >= 50) {
        playVictorySound();
      } else {
        playLosingSound();
      }
    }
  };

  const handleGoHome = () => {
    setScreen('start');
    navigateWithState('start', false);
  };

  // Upgraded High-Quality Celebratory Audio Synthesis (Celestial Chimes & Organic Audience Applause)
  const playApplause = () => {
    if (!soundEnabled) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    try {
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;
      const duration = 1.4;

      // 1. Synthesize Celestial Bell/Chime Arpeggio (Rising F-Major/Pentatonic chord)
      const chimes = [
        { freq: 698.46, delay: 0.00 }, // F5
        { freq: 880.00, delay: 0.07 }, // A5
        { freq: 1046.5, delay: 0.14 }, // C6
        { freq: 1396.9, delay: 0.21 }, // F6
        { freq: 1760.0, delay: 0.28 }  // A6
      ];

      chimes.forEach((chime) => {
        const tStart = now + chime.delay;
        const noteDur = 0.8;

        // Primary bell oscillator (Triangle for warm bell body)
        const osc1 = ctx.createOscillator();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(chime.freq, tStart);

        // Harmonic overtone oscillator (Sine at +1 octave)
        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(chime.freq * 2, tStart);

        const bellGain = ctx.createGain();
        bellGain.gain.setValueAtTime(0.0001, tStart);
        // Quick hammer attack
        bellGain.gain.exponentialRampToValueAtTime(0.16, tStart + 0.015);
        // Beautiful long tail decay
        bellGain.gain.exponentialRampToValueAtTime(0.0001, tStart + noteDur);

        // Subtly filter out harsh low rumbles from chimes
        const chimeFilter = ctx.createBiquadFilter();
        chimeFilter.type = 'highpass';
        chimeFilter.frequency.setValueAtTime(400, tStart);

        osc1.connect(chimeFilter);
        osc2.connect(chimeFilter);
        chimeFilter.connect(bellGain);
        bellGain.connect(ctx.destination);

        osc1.start(tStart);
        osc1.stop(tStart + noteDur + 0.1);
        osc2.start(tStart);
        osc2.stop(tStart + noteDur + 0.1);
      });

      // 2. Synthesize High-Quality Organic Crowd Applause in a single buffer
      const sampleRate = ctx.sampleRate;
      const buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
      const data = buffer.getChannelData(0);

      // Distribute 45 random claps over the duration with higher density near the start
      const numClaps = 45;
      const clapStartTimes: number[] = [];
      for (let j = 0; j < numClaps; j++) {
        // Skewed random distribution for higher clap frequency early on
        const tStart = Math.pow(Math.random(), 1.6) * 1.1;
        clapStartTimes.push(tStart);
      }

      for (let i = 0; i < data.length; i++) {
        const t = i / sampleRate;
        const rawNoise = Math.random() * 2 - 1;

        // General crowd background/shimmer murmur
        const murmurEnv = Math.sin(Math.PI * (t / duration)); // parabolic swell/decay
        let signal = rawNoise * murmurEnv * 0.08;

        // Layer in individual sharp claps
        let clapSum = 0;
        for (let j = 0; j < numClaps; j++) {
          const dt = t - clapStartTimes[j];
          if (dt >= 0 && dt < 0.12) {
            // Very rapid physical clap attack (1.5ms) followed by organic exponential hand damping (15ms)
            const clapEnv = dt < 0.0015
              ? (dt / 0.0015)
              : Math.exp(-(dt - 0.0015) / 0.016);
            
            // Add random high-freq texture per clap
            clapSum += (Math.random() * 2 - 1) * clapEnv * 0.28;
          }
        }
        
        data[i] = signal + clapSum;
      }

      // Play the combined multi-hand crowd applause buffer
      const applauseSource = ctx.createBufferSource();
      applauseSource.buffer = buffer;

      // Bandpass filter to sculpt the applause, centered in the warm human clap range (1000Hz - 1300Hz)
      const applauseFilter = ctx.createBiquadFilter();
      applauseFilter.type = 'bandpass';
      applauseFilter.frequency.setValueAtTime(1150, now);
      applauseFilter.Q.setValueAtTime(1.1, now);

      // Volume envelope for the overall crowd level
      const mainApplauseGain = ctx.createGain();
      mainApplauseGain.gain.setValueAtTime(0.0001, now);
      mainApplauseGain.gain.exponentialRampToValueAtTime(0.7, now + 0.08); // Quick surge on successful answer
      mainApplauseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // Graceful decrescendo

      applauseSource.connect(applauseFilter);
      applauseFilter.connect(mainApplauseGain);
      mainApplauseGain.connect(ctx.destination);

      applauseSource.start(now);

      // Prevent memory/resource leaks by closing the context down upon completion
      setTimeout(() => {
        ctx.close().catch(() => {});
      }, (duration + 0.5) * 1000);

    } catch (e) {
      console.warn("Enhanced playApplause failed to trigger:", e);
    }
  };

  const playIncorrectSound = () => {
    if (!soundEnabled) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;

      // A gentle, warm, and perfectly audible descending acoustic-like sound (F#4 down to C#4)
      const notes = [
        { freq: 369.99, delay: 0.0, dur: 0.18 }, // F#4
        { freq: 277.18, delay: 0.12, dur: 0.32 } // C#4
      ];

      notes.forEach((note) => {
        const tStart = now + note.delay;
        
        // Primary warm triangle oscillator for organic body
        const osc1 = ctx.createOscillator();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(note.freq, tStart);

        // Subtly detuned secondary sine oscillator to add definition on small speakers
        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(note.freq * 1.015, tStart);

        // Lowpass filter set to 850Hz (enough definition for small speakers while filtering harsh highs)
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(850, tStart);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.0001, tStart);
        gainNode.gain.linearRampToValueAtTime(0.14, tStart + 0.02); // quick clicks-free attack
        gainNode.gain.exponentialRampToValueAtTime(0.0001, tStart + note.dur - 0.01);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start(tStart);
        osc1.stop(tStart + note.dur);
        osc2.start(tStart);
        osc2.stop(tStart + note.dur);
      });

      setTimeout(() => {
        ctx.close().catch(() => {});
      }, 900);
    } catch (e) {
      console.warn("playIncorrectSound failed to trigger:", e);
    }
  };

  const playVictorySound = () => {
    if (!soundEnabled) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;
      const duration = 3.0;

      // 1. Joyous, warm, major-key arpeggio (C Major / G Major styled)
      const chord = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];

      chord.forEach((freq, index) => {
        const tStart = now + index * 0.08;
        const noteDur = duration - (index * 0.08);

        // Warm, vibrant triangle wave
        const osc1 = ctx.createOscillator();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, tStart);

        // Shimmering sine wave overtone
        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 1.5, tStart);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.0001, tStart);
        gainNode.gain.exponentialRampToValueAtTime(0.12, tStart + 0.05); // slightly slower attack for string feel
        gainNode.gain.exponentialRampToValueAtTime(0.03, tStart + noteDur * 0.4);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, tStart + noteDur);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, tStart);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start(tStart);
        osc1.stop(tStart + noteDur);
        osc2.start(tStart);
        osc2.stop(tStart + noteDur);
      });

      // 2. Overlaid Grand Celebratory Crowd Applause
      const sampleRate = ctx.sampleRate;
      const buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
      const data = buffer.getChannelData(0);

      // Generate a dense, roaring applause (65 random claps over 3.0s duration)
      const numClaps = 65;
      const clapStartTimes: number[] = [];
      for (let j = 0; j < numClaps; j++) {
        // High density starting slightly after the fanfare
        const tStart = 0.15 + Math.pow(Math.random(), 1.4) * 2.3;
        clapStartTimes.push(tStart);
      }

      for (let i = 0; i < data.length; i++) {
        const t = i / sampleRate;
        const rawNoise = Math.random() * 2 - 1;

        // Swelling ambient ripple of the crowd
        const riseTime = 0.4;
        const crowdEnv = t < riseTime
          ? (t / riseTime)
          : Math.sin(riseTime + (Math.PI * 0.5) * ((t - riseTime) / (duration - riseTime)));
        
        let signal = rawNoise * crowdEnv * 0.09;

        // Individual physical claps with sharp attack and organic damping
        let clapSum = 0;
        for (let j = 0; j < numClaps; j++) {
          const dt = t - clapStartTimes[j];
          if (dt >= 0 && dt < 0.15) {
            const clapEnv = dt < 0.0015
              ? (dt / 0.0015)
              : Math.exp(-(dt - 0.0015) / 0.018);
            
            // Rich multi-frequency human hand claps
            clapSum += (Math.random() * 2 - 1) * clapEnv * 0.25;
          }
        }
        data[i] = signal + clapSum;
      }

      const applauseSource = ctx.createBufferSource();
      applauseSource.buffer = buffer;

      // Bandpass centered at classic bright hand-clapping frequencies (1100Hz)
      const applauseFilter = ctx.createBiquadFilter();
      applauseFilter.type = 'bandpass';
      applauseFilter.frequency.setValueAtTime(1100, now);
      applauseFilter.Q.setValueAtTime(1.2, now);

      const overallApplauseGain = ctx.createGain();
      overallApplauseGain.gain.setValueAtTime(0.0001, now);
      overallApplauseGain.gain.exponentialRampToValueAtTime(0.55, now + 0.3); // swift swell after the arpeggio starts
      overallApplauseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // smooth fadeout

      applauseSource.connect(applauseFilter);
      applauseFilter.connect(overallApplauseGain);
      overallApplauseGain.connect(ctx.destination);

      applauseSource.start(now);

      setTimeout(() => {
        ctx.close().catch(() => {});
      }, (duration + 0.5) * 1000);
    } catch (e) {
      console.warn("playVictorySound failed to trigger:", e);
    }
  };

  const playLosingSound = () => {
    if (!soundEnabled) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;
      const duration = 2.4;

      // Sad, gentle descending minor/diminished arpeggio
      const chord = [329.63, 261.63, 220.00, 164.81, 110.00];

      chord.forEach((freq, index) => {
        const tStart = now + index * 0.15;
        const noteDur = duration - (index * 0.15);

        // Soft triangle wave for body
        const osc1 = ctx.createOscillator();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, tStart);

        // Soft sub/harmonic sine
        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 0.5, tStart);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.0001, tStart);
        gainNode.gain.exponentialRampToValueAtTime(0.12, tStart + 0.08); // very slow gentle attack
        gainNode.gain.exponentialRampToValueAtTime(0.02, tStart + noteDur * 0.5);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, tStart + noteDur);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, tStart); // slightly opened filter for clearer solemn presence on small speakers

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start(tStart);
        osc1.stop(tStart + noteDur);
        osc2.start(tStart);
        osc2.stop(tStart + noteDur);
      });

      // Subtle, hollow decaying synthetic wind gust underneath for a touch of dramatic melancholy
      const sampleRate = ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
      const noiseData = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseData.length; i++) {
        noiseData[i] = Math.random() * 2 - 1;
      }
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(200, now);
      noiseFilter.Q.setValueAtTime(4.0, now);

      // Low frequency pitch/resonance sweep
      noiseFilter.frequency.exponentialRampToValueAtTime(80, now + duration);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.0001, now);
      noiseGain.gain.linearRampToValueAtTime(0.07, now + 0.4);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noiseSource.start(now);

      setTimeout(() => {
        ctx.close().catch(() => {});
      }, (duration + 0.5) * 1000);
    } catch (e) {
      console.warn("playLosingSound failed to trigger:", e);
    }
  };

  const getWallpaperConfig = () => {
    switch (theme) {
      case 'mahogany':
        return {
          bgColor: '#0c0805',
          opacity: 0.40,
          gradient: 'linear-gradient(180deg, rgba(22, 17, 14, 0.80) 0%, rgba(14, 12, 10, 0.83) 50%, rgba(8, 7, 6, 0.89) 100%)',
          vignette: 'radial-gradient(circle, transparent 25%, rgba(12, 8, 5, 0.22) 70%, rgba(12, 8, 5, 0.52) 100%)'
        };
      case 'royal':
        return {
          bgColor: '#0a0410',
          opacity: 0.34,
          gradient: 'linear-gradient(135deg, rgba(28, 14, 45, 0.80) 0%, rgba(15, 6, 26, 0.84) 60%, rgba(8, 2, 15, 0.90) 100%)',
          vignette: 'radial-gradient(circle, transparent 25%, rgba(10, 4, 16, 0.22) 60%, rgba(10, 4, 16, 0.55) 100%)'
        };
      case 'olive':
        return {
          bgColor: '#e3ece3',
          opacity: 0.38,
          gradient: 'linear-gradient(135deg, rgba(244, 247, 244, 0.68) 0%, rgba(251, 252, 251, 0.60) 50%, rgba(230, 238, 230, 0.74) 100%)',
          vignette: 'radial-gradient(circle, transparent 30%, rgba(30, 50, 35, 0.05) 75%, rgba(30, 50, 35, 0.15) 100%)'
        };
      case 'parchment':
      default:
        return {
          bgColor: '#faf6eb',
          opacity: 0.42,
          gradient: 'linear-gradient(45deg, rgba(251, 248, 240, 0.64) 0%, rgba(255, 255, 255, 0.54) 50%, rgba(249, 245, 232, 0.68) 100%)',
          vignette: 'radial-gradient(circle, transparent 25%, rgba(12, 8, 5, 0.05) 70%, rgba(12, 8, 5, 0.15) 100%)'
        };
    }
  };

  const wp = getWallpaperConfig();
  const availableCount = getFilteredQuestions().length;
  const displayDomain = typeof window !== 'undefined' ? (window.location.hostname || 'biblequiz.app') : 'biblequiz.app';

  return (
    <>
      {/* Dynamic Ambient Fullscreen Wallpaper Layer - Direct viewport placement with zero gaps */}
      <div 
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none select-none overflow-hidden transition-colors duration-500" 
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", zIndex: -10, backgroundColor: wp.bgColor }}
      >
        {/* Physical generated scroll texture background */}
        <img 
          src={bibleScrollBg} 
          alt="Ancient Bible Scroll Background" 
          className="absolute w-full h-full object-cover object-center scale-[1.03] transition-all duration-500" 
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: wp.opacity }}
          referrerPolicy="no-referrer"
        />
        
        {/* Dynamic Theme Wash overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-500" 
          style={{ position: "absolute", inset: 0, background: wp.gradient }}
        />
        
        {/* Smooth Vignette Frame overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: wp.vignette 
          }}
        />
      </div>

      <div id="quiz-root">
        <h2 className="sr-only">Bible quiz</h2>

        {/* PWA In-flow Header Action Banner - No detached fixed overlay or arbitrary top padding */}
        <AnimatePresence>
          {showInstallBanner && !isStandalone && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mb-3 w-full bg-gradient-to-r from-[var(--color-primary-accent)] to-[#4a3fc2] text-white shadow-md rounded-2xl overflow-hidden border border-white/10"
              id="pwa-top-install-banner"
            >
              <div className="flex items-center justify-between py-2.5 px-3.5 sm:px-4">
                {/* Left group with app icon and metadata */}
                <div className="flex items-center gap-2.5 min-w-0 text-left">
                  <img
                    src={installAppIcon}
                    alt="App Icon"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-white/20 shadow-sm shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="bg-amber-400 text-slate-900 text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-sm tracking-wider">PWA</span>
                      <h4 className="text-[13px] sm:text-[14px] font-extrabold text-white m-0 leading-tight">
                        Install Bible Quiz
                      </h4>
                    </div>
                    <p className="text-[10px] sm:text-[11px] font-medium text-purple-100 m-0 mt-0.5 leading-normal max-w-[150px] sm:max-w-xs truncate">
                      Fast, secure Scripture study right from your home screen.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    id="pwa-top-install"
                    onClick={() => {
                      if (deferredPrompt) {
                        deferredPrompt.prompt();
                        deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
                          if (choiceResult.outcome === 'accepted') {
                            setShowInstallBanner(false);
                            try {
                              localStorage.setItem('bibleQuizInstallBannerDismissed', 'true');
                            } catch (_) {}
                          }
                          setDeferredPrompt(null);
                        });
                      } else {
                        setShowIOSInstructions(!showIOSInstructions);
                      }
                    }}
                    className="bg-amber-400 hover:bg-amber-300 dark:bg-amber-500 dark:hover:bg-amber-400 text-slate-900 text-xs font-black tracking-wider uppercase px-3 py-1.5 rounded-full transition-all duration-200 shadow-sm hover:scale-[1.03] active:scale-[0.97] flex items-center gap-1 cursor-pointer border-none"
                  >
                    <Download className="h-3 w-3" /> Install
                  </button>

                  <button
                    type="button"
                    id="pwa-top-dismiss"
                    onClick={() => {
                      setShowInstallBanner(false);
                      try {
                        localStorage.setItem('bibleQuizInstallBannerDismissed', 'true');
                      } catch (_) {}
                    }}
                    className="text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 border-none bg-transparent cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Expansible guide if no automated native prompt exists (e.g. iOS or standalone manual needs) */}
              <AnimatePresence>
                {showIOSInstructions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-slate-50 dark:bg-[#1c1611] text-slate-800 dark:text-amber-100 border-t border-slate-200/50 dark:border-amber-500/10 px-3.5 py-2.5 text-[11px] sm:text-xs"
                  >
                    <div className="text-left">
                      <p className="font-bold text-[#534AB7] dark:text-amber-300 m-0 pb-1 flex items-center gap-1 text-[11px]">
                        <Smartphone className="h-3.5 w-3.5" /> Installation Guide for {isIOS ? 'iOS Safari' : 'Your Browser'}:
                      </p>
                      {isIOS ? (
                        <ol className="list-decimal list-inside space-y-0.5 text-slate-600 dark:text-amber-100/70 p-0 m-0">
                          <li>Tap <span className="font-bold text-slate-800 dark:text-white inline-flex items-center gap-0.5"><Share2 className="h-3 w-3 inline text-[var(--color-primary-accent)]" /> Share</span> in Safari.</li>
                          <li>Select <span className="font-bold text-slate-800 dark:text-white inline-flex items-center gap-0.5"><Plus className="h-3.5 w-3.5 inline p-0.5 bg-slate-200 dark:bg-white/10 rounded" /> Add to Home Screen</span>.</li>
                          <li>Tap <span className="font-semibold text-[#534AB7] dark:text-amber-300">Add</span>.</li>
                        </ol>
                      ) : (
                        <ol className="list-decimal list-inside space-y-0.5 text-slate-600 dark:text-amber-100/70 p-0 m-0">
                          <li>Tap your browser menu (<span className="font-bold">⋮</span>).</li>
                          <li>Select <span className="font-semibold text-slate-800 dark:text-white">"Add to Home screen"</span>.</li>
                        </ol>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <div id="app" className="transition-all duration-300">
          <AnimatePresence mode="wait">
            {screen === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {/* Top Header Row with Icon on the Left and Settings on the Right */}
              <div className="flex justify-between items-center gap-4 mb-4 mt-0">
              <div className="flex items-center gap-3.5 text-left min-w-0">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                  className="relative shrink-0"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-[var(--color-primary-accent)] rounded-2xl blur-sm opacity-25"></div>
                  <img 
                    src={bibleQuizIcon} 
                    alt="Bible Quiz Emblem" 
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-white dark:border-slate-800 object-cover shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] m-0 leading-tight">Bible Quiz</h1>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] m-0 mt-0.5 leading-normal max-w-[280px] sm:max-w-[340px]">
                    Test your knowledge of Scripture — grow your relationship with Jesus.
                  </p>
                </div>
              </div>

              <button
                id="settings-trigger-btn"
                className="settings-trigger-btn shrink-0"
                onClick={openSettings}
              >
                <Settings className="h-4 w-4" aria-hidden="true" />
                <span>Settings</span>
              </button>
            </div>

            {/* Beautiful Devotional Verse and Streak Panel */}
            <div className="q-card relative overflow-hidden border border-amber-500/20 dark:border-indigo-500/10 bg-gradient-to-br from-amber-50/70 to-indigo-50/20 dark:from-indigo-950/20 dark:to-slate-900/10 shadow-sm transition-all duration-300" style={{ padding: "1.25rem", marginBottom: "1rem" }}>
              <div className="flex justify-between items-center gap-3 mb-2">
                <span className="flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest text-[var(--color-primary-accent)]">
                  <Quote className="h-3 w-3" /> Verse of the day
                </span>
                
                {/* Active Devotional Streak display */}
                <div className="flex items-center gap-1 bg-amber-500/10 dark:bg-amber-400/10 px-2.5 py-1 rounded-full text-xs font-bold text-amber-700 dark:text-amber-300 border border-amber-500/20">
                  <motion.div
                    animate={{ scale: [1, 1.22, 1], rotate: [0, 4, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    <Flame className="h-3.5 w-3.5 text-amber-500 fill-amber-500 animate-pulse" />
                  </motion.div>
                  <span>{streak} {streak === 1 ? 'Day' : 'Days'} Streak</span>
                </div>
              </div>

              {/* Devotional quote and citation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVerseIndex}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.18 }}
                  className="relative pr-6"
                >
                  <p className="font-serif italic text-[var(--color-text-primary)] leading-normal m-0" style={{ fontStyle: 'italic', fontSize: `${fontSize - 2}px` }}>
                    "{DEVOTIONAL_VERSES[currentVerseIndex].q}"
                  </p>
                  <p className="font-bold text-[var(--color-text-secondary)] mt-1.5 mb-1.5 flex items-center gap-1" style={{ fontSize: `${fontSize - 4}px` }}>
                    — {DEVOTIONAL_VERSES[currentVerseIndex].ref}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Cycle button */}
              <button
                type="button"
                className="absolute bottom-2.5 right-2 text-[var(--color-text-secondary)] hover:text-amber-500 transition-colors cursor-pointer p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => {
                  setCurrentVerseIndex((prev) => (prev + 1) % DEVOTIONAL_VERSES.length);
                }}
                title="Shuffle Quote of the Day"
              >
                <RotateCw className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Selection Panel card */}
            <div className="q-card">
              <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text-secondary)", margin: "0 0 0.75rem" }}>
                Filter by category
              </p>
              <div className="filter-row">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    className={`cat-btn ${catFilter === category ? 'active' : ''}`}
                    onClick={() => setCatFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text-secondary)", margin: "0 0 0.75rem" }}>
                Select difficulty
              </p>
              <div className="filter-row">
                {DIFFICULTIES.map(difficulty => (
                  <button
                    key={difficulty}
                    className={`diff-btn ${diffFilter === difficulty ? 'active' : ''}`}
                    onClick={() => setDiffFilter(difficulty)}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>

              <button
                className="next-btn"
                onClick={startQuiz}
                disabled={availableCount === 0}
                style={{ width: "100%", padding: "0.85rem" }}
              >
                Start quiz <ArrowRight className="inline h-4 w-4 ml-1" aria-hidden="true" />
              </button>

              {availableCount === 0 && (
                <p style={{ fontSize: "13px", color: "var(--color-text-danger)", marginTop: "0.85rem" }}>
                  No questions match this category and difficulty. Try a different filter.
                </p>
              )}
            </div>
          </motion.div>
        )}

        {screen === 'quiz' && quizQuestions[current] && (() => {
          const q = quizQuestions[current];
          const currentAnswer = answers[current];
          const answered = currentAnswer !== null;
          const pct = Math.round((current / quizQuestions.length) * 100);

          return (
            <motion.div
              key={`quiz-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {/* Header navigation and status labels */}
              <div className="quiz-header">
                <button className="back-btn" onClick={handleGoHome}>
                  <Home className="inline h-4 w-4 mr-1" aria-hidden="true" /> Home
                </button>
                <div className="meta-group">
                  <div className="meta-item">
                    Question {current + 1} of {quizQuestions.length}
                  </div>
                  <div className="meta-item">
                    Score: <strong>{score}</strong>
                  </div>
                </div>
              </div>

              {/* Progress Slider */}
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }}></div>
              </div>

              {/* Presentational Card */}
              <div className="q-card relative">
                <GlitterEffect triggerCount={glitterTrigger} />
                <div style={{ marginBottom: "0.75rem" }}>
                  <span className="badge badge-cat">{q.cat}</span>
                  <span className="badge badge-diff">{q.diff}</span>
                </div>

                <p className="q-text" style={{ fontSize: `${fontSize + 2}px`, lineHeight: "1.55" }}>{q.q}</p>

                {/* Option list buttons */}
                {q.opts.map((option, idx) => {
                  let classesList = "opt-btn flex items-center justify-between gap-3 text-left w-full";
                  let isSelected = idx === currentAnswer;
                  let isCorrect = idx === q.answer;
                  
                  if (answered) {
                    if (isCorrect) {
                      classesList += " correct border-[#52b761] dark:border-emerald-500 shadow-sm font-semibold";
                    } else if (isSelected) {
                      classesList += " wrong border-rose-400 dark:border-rose-600 opacity-95";
                    } else {
                      classesList += " opacity-40 grayscale-[15%]";
                    }
                  }

                  return (
                    <motion.button
                      key={`${current}-${idx}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={answered ? {} : { scale: 1.01, translateY: -1 }}
                      whileTap={answered ? {} : { scale: 0.99 }}
                      transition={{ delay: idx * 0.035, duration: 0.18 }}
                      className={classesList}
                      onClick={() => handleSelectOption(idx)}
                      disabled={answered}
                      style={{ transition: "opacity 0.25s, filter 0.25s" }}
                    >
                      <span className="font-medium text-inherit" style={{ fontSize: `${fontSize - 1}px` }}>{option}</span>
                      
                      {/* Spring-animated feedback state markers */}
                      {answered && (
                        <span className="flex items-center shrink-0">
                          {isCorrect && (
                            <motion.span
                              initial={{ scale: 0, rotate: -45 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 350, damping: 15 }}
                              className="w-5.5 h-5.5 rounded-full bg-emerald-500 dark:bg-emerald-650 text-white flex items-center justify-center shadow-sm"
                            >
                              <Check className="h-3 w-3 stroke-[3]" />
                            </motion.span>
                          )}
                          {!isCorrect && isSelected && (
                            <motion.span
                              initial={{ scale: 0, rotate: 45 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 350, damping: 15 }}
                              className="w-5.5 h-5.5 rounded-full bg-rose-500 dark:bg-rose-650 text-white flex items-center justify-center shadow-sm"
                            >
                              <X className="h-3 w-3 stroke-[3]" />
                            </motion.span>
                          )}
                        </span>
                      )}
                    </motion.button>
                  );
                })}

                {/* Commentary Box elements */}
                {answered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="explanation" style={{ fontSize: `${fontSize - 1}px` }}>{q.explain}</div>
                    <p className="ref" style={{ fontSize: `${fontSize - 1}px` }}>
                      <Bookmark className="inline h-3.5 w-3.5 mr-1 align-middle text-[var(--color-primary-accent)]" aria-hidden="true" />
                      {q.ref}
                    </p>
                  </motion.div>
                )}

                {/* Navigation actions layout */}
                <div className="actions-row">
                  <button
                    className="back-btn"
                    onClick={handlePrev}
                    disabled={current === 0}
                  >
                    <ArrowLeft className="inline h-4 w-4 mr-1" aria-hidden="true" /> Previous
                  </button>

                  {answered && (
                    <button className="next-btn" onClick={handleNext}>
                      {current < quizQuestions.length - 1 ? "Next question" : "See results"}
                      <ArrowRight className="inline h-4 w-4 ml-1" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })()}

        {screen === 'result' && (() => {
          const pct = Math.round((score / quizQuestions.length) * 100);
          let msg = "Keep studying — the Bible has much to teach!";
          let renderIcon = (
            <div className="relative inline-block">
              <Book className="h-10 w-10 text-[var(--color-primary-accent)] mb-2 mx-auto animate-bounce" aria-hidden="true" />
            </div>
          );

          if (pct >= 80) {
            msg = "Excellent work! You know your Scripture well.";
            renderIcon = (
              <div className="relative inline-block">
                <Sparkles className="absolute -top-1 -right-2 h-5 w-5 text-amber-400 animate-pulse" />
                <Trophy className="h-10 w-10 text-amber-500 mb-2 mx-auto" aria-hidden="true" />
              </div>
            );
          } else if (pct >= 50) {
            msg = "Good effort! Keep reading the Word.";
            renderIcon = (
              <div className="relative inline-block">
                <Sparkles className="absolute -top-1 -right-2 h-4 w-4 text-yellow-400 animate-pulse" />
                <ThumbsUp className="h-10 w-10 text-[var(--color-primary-accent)] mb-2 mx-auto" aria-hidden="true" />
              </div>
            );
          }

          return (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="score-card relative overflow-hidden"
              style={{ position: "relative", overflow: "hidden" }}
            >
              {pct >= 50 && <ConfettiEffect />}
              {pct >= 50 && <VictoryGlitter pct={pct} />}
              <div style={{ margin: "0 auto", width: "fit-content" }}>
                {renderIcon}
              </div>
              <div className="score-big">{score}/{quizQuestions.length}</div>
              <div className="score-label">{pct}% correct</div>
              <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", margin: "0 0 1.5rem" }}>
                {msg}
              </p>

              {/* Grid Statistics results */}
              <div className="stat-grid" style={{ marginBottom: "1.5rem" }}>
                <div className="stat-box">
                  <div className="stat-num" style={{ color: "var(--color-primary-accent)" }}>{score}</div>
                  <div className="stat-lbl">Correct</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num" style={{ color: "var(--color-text-danger)" }}>
                    {quizQuestions.length - score}
                  </div>
                  <div className="stat-lbl">Wrong</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">{pct}%</div>
                  <div className="stat-lbl">Score</div>
                </div>
              </div>

              <div className="actions-row">
                <button className="next-btn" onClick={startQuiz}>
                  <RotateCw className="inline h-4 w-4 mr-1" aria-hidden="true" /> Play again
                </button>
                <button
                  className="next-btn"
                  onClick={handleGoHome}
                  style={{
                    background: "var(--color-background-secondary)",
                    color: "var(--color-text-primary)",
                    border: "0.5px solid var(--color-border-secondary)"
                  }}
                >
                  <Home className="inline h-4 w-4 mr-1" aria-hidden="true" /> Home
                </button>
              </div>
            </motion.div>
          );
        })()}

        </AnimatePresence>

        <AnimatePresence>
          {showSettings && (
            <motion.div 
              id="settings-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                padding: "1rem"
              }}
              onClick={closeSettings}
            >
              <motion.div 
                id="settings-modal-card"
                className="q-card"
                initial={{ scale: 0.94, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.94, y: 15, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                style={{ 
                  maxWidth: "460px", 
                  width: "100%", 
                  maxHeight: "90vh",
                  overflowY: "auto",
                  margin: 0,
                  padding: "1.75rem",
                  boxShadow: "0 25px 50px -12px rgba(0, 10, 30, 0.4)",
                  position: "relative"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", borderBottom: "1px solid var(--color-border-secondary)", paddingBottom: "0.85rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Settings className="h-5.5 w-5.5 text-[var(--color-primary-accent)]" />
                    <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}>Settings</h3>
                  </div>
                  <button 
                    id="settings-close-btn"
                    onClick={closeSettings} 
                    style={{ background: "transparent", border: "none", cursor: "pointer", padding: "6px", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", borderRadius: "50%", transition: "background 0.2s" }}
                    aria-label="Close Settings"
                    className="hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Visual Theme Preset Grid Picker */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "1.1rem 0", borderBottom: "1px solid var(--color-border-tertiary)" }}>
                  <div>
                    <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <Sparkles className="h-4.5 w-4.5 text-amber-500 animate-pulse" />
                      Visual Theme Style
                    </p>
                    <p style={{ margin: "3px 0 0", fontSize: "12.5px", color: "var(--color-text-secondary)" }}>
                      Choose your favorite scripture study aesthetic
                    </p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginTop: "4px" }}>
                    {[
                      { id: 'parchment', name: '📜 Parchment', desc: 'Warm Light Scroll', bg: '#fdfaf3', text: '#2d2015' },
                      { id: 'mahogany', name: '🪵 Mahogany', desc: 'Dark Vintage Wood', bg: '#1c1511', text: '#fdf6ed' },
                      { id: 'royal', name: '👑 Royal Purple', desc: 'Sacred Velvet & Gold', bg: '#1c1229', text: '#f5e6ff' },
                      { id: 'olive', name: '🌿 Olive Grove', desc: 'Galilee Tranquility', bg: '#f4f8f4', text: '#122116' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        className={`theme-picker-btn ${theme === t.id ? 'active' : ''}`}
                        onClick={() => setTheme(t.id)}
                        id={`theme-btn-${t.id}`}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          padding: "10px 12px",
                          borderRadius: "14px",
                          border: theme === t.id ? "2px solid var(--color-primary-accent)" : "1.5px solid var(--color-border-tertiary)",
                          background: t.bg,
                          color: t.text,
                          cursor: "pointer",
                          transition: "all 0.18s ease",
                          textAlign: "left",
                          boxShadow: theme === t.id ? "0 4px 12px rgba(0,0,0,0.08)" : "none"
                        }}
                      >
                        <span style={{ fontSize: "13.5px", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                          {t.name}
                        </span>
                        <span style={{ fontSize: "10px", opacity: 0.75, marginTop: "2px", fontWeight: 500 }}>
                          {t.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Questions Per Round Selector item */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "1.1rem 0", borderBottom: "1px solid var(--color-border-tertiary)" }}>
                  <div>
                    <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <BookOpen className="h-4.5 w-4.5 text-violet-500" />
                      Questions Per Round
                    </p>
                    <p style={{ margin: "3px 0 0", fontSize: "12.5px", color: "var(--color-text-secondary)" }}>
                      Choose how many questions to answer per round
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                    {[5, 10, 15].map((num) => (
                      <button
                        key={num}
                        type="button"
                        className={`qround-btn ${questionsPerRound === num ? 'active' : ''}`}
                        onClick={() => setQuestionsPerRound(num)}
                        style={{ padding: "0.65rem 0.75rem", fontSize: "0.95rem" }}
                      >
                        {num} Qs
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Size Selector (Straight line range slider) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "1.1rem 0", borderBottom: "1px solid var(--color-border-tertiary)" }}>
                  <div>
                    <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <Book className="h-4.5 w-4.5 text-indigo-500" />
                      Reading Font Size
                    </p>
                    <p style={{ margin: "3px 0 0", fontSize: "12.5px", color: "var(--color-text-secondary)" }}>
                      Adjust scripture and quiz text size for comfortable reading
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4.5px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12.5px", color: "var(--color-text-secondary)", fontWeight: 500 }}>
                      <span>Small</span>
                      <span className="font-semibold text-indigo-500 bg-indigo-500/10 dark:bg-indigo-400/10 px-2.5 py-0.5 rounded-full">
                        {fontSize}px ({fontSize === 16 ? 'Normal' : fontSize < 16 ? 'Compact' : fontSize <= 20 ? 'Large' : 'Very Large'})
                      </span>
                      <span>Large</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">A-</span>
                      <input 
                        type="range"
                        min="14"
                        max="24"
                        step="1"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="font-size-slider"
                        style={{ flex: 1 }}
                      />
                      <span className="text-[15px] font-bold text-slate-500 dark:text-slate-400">A+</span>
                    </div>
                  </div>
                </div>

                {/* Sound toggle item */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid var(--color-border-tertiary)" }}>
                  <div>
                    <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                      {soundEnabled ? <Volume2 className="h-4.5 w-4.5 text-emerald-500" /> : <VolumeX className="h-4.5 w-4.5 text-gray-400" />}
                      Sound Effects
                    </p>
                    <p style={{ margin: "3px 0 0", fontSize: "12.5px", color: "var(--color-text-secondary)" }}>
                      Celebrate correct answers
                    </p>
                  </div>
                  <label className="switch-control" htmlFor="settings-sound-toggle">
                    <input 
                      type="checkbox" 
                      id="settings-sound-toggle" 
                      checked={soundEnabled} 
                      onChange={() => setSoundEnabled(!soundEnabled)} 
                    />
                    <span className="switch-slider"></span>
                  </label>
                </div>

                {/* Database Stats item */}
                <div style={{ padding: "1.1rem 0", borderBottom: "1px solid var(--color-border-tertiary)" }}>
                  <p style={{ margin: "0 0 12px 0", fontSize: "15px", fontWeight: 600, color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <Trophy className="h-4.5 w-4.5 text-amber-500" />
                    Quiz Database Stats
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                    <div className="stat-box" style={{ padding: "0.85rem 0.5rem", textAlign: "center", margin: 0, borderRadius: "14px" }}>
                      <div className="stat-num" style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)", lineHeight: 1.2 }}>{QUESTIONS.length}</div>
                      <div className="stat-lbl" style={{ fontSize: "11px", marginTop: "4px", fontWeight: 500, color: "var(--color-text-secondary)" }}>Questions</div>
                    </div>
                    <div className="stat-box" style={{ padding: "0.85rem 0.5rem", textAlign: "center", margin: 0, borderRadius: "14px" }}>
                      <div className="stat-num" style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text-primary)", lineHeight: 1.2 }}>{CATEGORIES.length - 1}</div>
                      <div className="stat-lbl" style={{ fontSize: "11px", marginTop: "4px", fontWeight: 500, color: "var(--color-text-secondary)" }}>Categories</div>
                    </div>
                    <div className="stat-box" style={{ padding: "0.85rem 0.5rem", textAlign: "center", margin: 0, borderRadius: "14px" }}>
                      <div className="stat-num" style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-primary-accent)", lineHeight: 1.2 }}>{questionsPerRound}</div>
                      <div className="stat-lbl" style={{ fontSize: "11px", marginTop: "4px", fontWeight: 500, color: "var(--color-text-secondary)" }}>Per Round</div>
                    </div>
                  </div>
                </div>

                {/* Rate Us, Share, & Feedback Section */}
                <div style={{ padding: "1.25rem 0", marginBottom: "1.5rem" }}>
                  <p style={{ margin: "0 0 14px 0", fontSize: "15px", fontWeight: 600, color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <Heart className="h-4.5 w-4.5 text-rose-500 fill-rose-500/20 animate-pulse" />
                    App Community & Feedback
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    
                    {/* Rate Us Sub-panel */}
                    <div className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/60 p-3 rounded-xl">
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-primary)" }}>Rate Bible Quiz</span>
                        <span style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>
                          {userRating > 0 ? "Thank you!" : "Support us"}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        {[1, 2, 3, 4, 5].map((starValue) => {
                          const isFilled = starValue <= (ratingHover || userRating);
                          return (
                            <motion.button
                              key={starValue}
                              type="button"
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => {
                                setUserRating(starValue);
                                try {
                                  localStorage.setItem('bibleQuizUserRating', String(starValue));
                                } catch (e) {
                                  console.warn("Storage write blocked", e);
                                }
                              }}
                              onMouseEnter={() => setRatingHover(starValue)}
                              onMouseLeave={() => setRatingHover(0)}
                              style={{ background: "transparent", border: "none", padding: "2px", cursor: "pointer", display: "flex", alignItems: "center" }}
                              title={`Rate ${starValue} Stars`}
                            >
                              <Star 
                                className={`h-6 w-6 transition-colors duration-150 ${isFilled ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-700"}`} 
                              />
                            </motion.button>
                          );
                        })}
                        <span style={{ fontSize: "11.5px", fontWeight: 500, marginLeft: "4px", color: "var(--color-text-secondary)" }}>
                          {userRating === 5 && "Awesome! ✨ Glory to God!"}
                          {userRating === 4 && "Wonderful! Praise God! 🙏"}
                          {userRating > 0 && userRating < 4 && "Thank you so much!"}
                          {userRating === 0 && "Tap stars to rate"}
                        </span>
                      </div>
                    </div>

                    {/* Share App Action */}
                    <div className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/60 p-3 rounded-xl flex items-center justify-between gap-4">
                      <div>
                        <p style={{ margin: 0, fontSize: "13px", fontWeight: 600, color: "var(--color-text-primary)" }}>Share the Word</p>
                        <p style={{ margin: "2px 0 0", fontSize: "11px", color: "var(--color-text-secondary)" }}>Spread the joy with friends & family</p>
                      </div>
                      <div className="relative shrink-0">
                        <button
                          type="button"
                          className="cat-btn flex items-center justify-center gap-1.5"
                          style={{
                            padding: "0.45rem 0.85rem",
                            fontSize: "12px",
                            borderRadius: "10px",
                            minWidth: "auto",
                            background: "var(--color-background-primary)",
                            border: "0.5px solid var(--color-border-secondary)"
                          }}
                          onClick={() => {
                            const appUrl = window.location.origin + window.location.pathname;
                            const shareData = {
                              title: "Bible Quiz App",
                              text: "Check out this beautiful Bible Quiz game! Read verses, test your knowledge, and study the Scriptures.",
                              url: appUrl
                            };
                            if (navigator.share) {
                              navigator.share(shareData).catch(() => {
                                navigator.clipboard.writeText(appUrl);
                              });
                            } else {
                              navigator.clipboard.writeText(appUrl);
                            }
                            setShareToast(true);
                            setTimeout(() => setShareToast(false), 2500);
                          }}
                        >
                          <Share2 className="h-3.5 w-3.5 text-[var(--color-primary-accent)]" /> Share Link
                        </button>

                        <AnimatePresence>
                          {shareToast && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.95 }}
                              style={{
                                position: "absolute",
                                bottom: "100%",
                                right: 0,
                                zIndex: 50,
                                marginBottom: "6px",
                                background: "#20c997",
                                color: "#ffffff",
                                padding: "4px 10px",
                                borderRadius: "8px",
                                fontSize: "11px",
                                fontWeight: 700,
                                whiteSpace: "nowrap",
                                boxShadow: "0 6px 16px rgba(0,0,0,0.12)"
                              }}
                            >
                              Copied to clipboard! 📋
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Feedback Form */}
                    <div className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/60 p-3 rounded-xl">
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "4px" }}>
                          <MessageSquare className="h-3.5 w-3.5 text-indigo-500" />
                          Send Feedback
                        </span>
                        <span style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>
                          Suggestions welcome
                        </span>
                      </div>
                      
                      {feedbackSubmitted ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center text-center py-2"
                        >
                          <Check className="h-6 w-6 text-emerald-500 mb-1" />
                          <p style={{ margin: 0, fontSize: "12.5px", fontWeight: 600, color: "var(--color-text-primary)" }}>Thank you for your feedback!</p>
                          <p style={{ margin: "2px 0 0", fontSize: "11px", color: "var(--color-text-secondary)" }}>We read all ideas to improve reading experience.</p>
                        </motion.div>
                      ) : (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (!feedbackText.trim()) return;
                            try {
                              const existing = JSON.parse(localStorage.getItem('bibleQuizFeedbacks') || '[]');
                              existing.push({ text: feedbackText, date: new Date().toISOString() });
                              localStorage.setItem('bibleQuizFeedbacks', JSON.stringify(existing));
                            } catch (e) {
                              console.warn("Storage writing blocked", e);
                            }
                            setFeedbackSubmitted(true);
                          }}
                          style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}
                        >
                          <textarea
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            placeholder="What can we improve? Suggest Bible verses or options..."
                            maxLength={250}
                            style={{
                              width: "100%",
                              minHeight: "55px",
                              maxHeight: "80px",
                              padding: "8px 10.5px",
                              fontSize: "12.5px",
                              borderRadius: "10px",
                              border: "0.5px solid var(--color-border-secondary)",
                              background: "var(--color-background-primary)",
                              color: "var(--color-text-primary)",
                              resize: "none",
                              outline: "none",
                              fontFamily: "inherit"
                            }}
                          />
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: "10px", color: "var(--color-text-secondary)" }}>
                              {feedbackText.length}/250 chars
                            </span>
                            <button
                              type="submit"
                              disabled={!feedbackText.trim()}
                              className="cat-btn flex items-center gap-1.5 transition-all"
                              style={{
                                padding: "0.4rem 0.8rem",
                                fontSize: "11px",
                                borderRadius: "8px",
                                minWidth: "auto",
                                opacity: feedbackText.trim() ? 1 : 0.45,
                                cursor: feedbackText.trim() ? "pointer" : "not-allowed",
                                background: "var(--color-primary-accent)",
                                color: "#ffffff",
                                border: "none"
                              }}
                            >
                              <Send className="h-3 w-3" /> Send
                            </button>
                          </div>
                        </form>
                      )}
                    </div>

                  </div>
                </div>

                <button 
                  id="settings-save-btn"
                  className="next-btn" 
                  onClick={closeSettings}
                  style={{ width: "100%", padding: "0.85rem", fontSize: "15px", fontWeight: 600, borderRadius: "14px" }}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </>
  );
}
