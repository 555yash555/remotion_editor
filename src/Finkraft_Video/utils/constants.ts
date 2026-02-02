import { loadFont } from "@remotion/google-fonts/Inter";

// Load Font
export const { fontFamily } = loadFont();

// Brand Colors
export const COLORS = {
  Primary: "#1E40AF", // Deep Blue
  Secondary: "#6ECEB2", // Teal/Turquoise
  Background: "#FFFFFF", // Clean White
  LightGray: "#F8FAFC", // Subtle gradient background
  DarkNavy: "#1F2937", // Text and contrast
  SuccessGreen: "#10B981", // Emerald
  TextPrimary: "#111827", // Near black
  TextSecondary: "#6B7280", // Medium gray
  ErrorRed: "#EF4444", // For error icons
  WarningAmber: "#F59E0B", // For warning icons
};

// Video Config
export const VIDEO_CONFIG = {
  width: 1080,
  height: 1920,
  fps: 60,
  durationInSeconds: 19,
  durationInFrames: 19 * 60,
};

// Scene Timings (in seconds)
export const TIMINGS = {
  Scene1_Hook: { start: 0, duration: 2 },
  Scene2_PainPoint: { start: 2, duration: 2 },
  Scene3_Solution: { start: 4, duration: 2 },
  Scene4_Features: {
    start: 6,
    duration: 6,
    subScenes: {
      AIReconciliation: { start: 0, duration: 2 }, // Relative to Scene 4 start
      MismatchDetection: { start: 2, duration: 1.5 },
      ITCRecovery: { start: 3.5, duration: 1.5 },
      EliminateSpreadsheets: { start: 5, duration: 1 },
    }
  },
  Scene5_SocialProof: { start: 12, duration: 1.5 },
  Scene6_CTA: { start: 13.5, duration: 1.5 },
};
