import { loadFont } from "@remotion/google-fonts/Poppins";

export const FONT_FAMILY_HEADING = loadFont().fontFamily;
export const FONT_FAMILY_BODY = FONT_FAMILY_HEADING; // Fallback since DM_Sans missing

export const COLOR_PRIMARY = "#FF7B6B"; // Warm Coral
export const COLOR_SECONDARY = "#FFA987"; // Peachy Orange
export const COLOR_BACKGROUND = "#FFF9F5"; // Soft Cream
export const COLOR_ACCENT = "#6ECEB2"; // Soft Teal
export const COLOR_SUCCESS = "#5CAF5C"; // Success Green
export const COLOR_TEXT_PRIMARY = "#2D3047"; // Deep Charcoal
export const COLOR_TEXT_SECONDARY = "#7A7D96"; // Muted Purple-Gray

export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const FPS = 30;
export const DURATION_IN_SECONDS = 15;
export const DURATION_IN_FRAMES = DURATION_IN_SECONDS * FPS;

export const ASSETS = {
  // Illustrations
  pillBottle: "/GetCopayHelp/pill_bottle.png",
  pills: "/GetCopayHelp/illustration_pills_capsules_1769706398159.png",
  coins: "/GetCopayHelp/illustration_coins_1769706415758.png",
  paperDocs: "/GetCopayHelp/illustration_paper_docs_1769706455595.png",
  helpingHand: "/GetCopayHelp/illustration_helping_hand_1769706474771.png",
  person1: "/GetCopayHelp/illustration_person_1_1769706490668.png",
  person2: "/GetCopayHelp/illustration_person_2_1769706523037.png",
  paperAirplane: "/GetCopayHelp/illustration_paper_airplane_1769706541486.png",
  heartBubble: "/GetCopayHelp/illustration_speech_bubble_heart_1769706561084.png",
  checkmark: "/GetCopayHelp/illustration_checkmark_1769706601355.png",
  frustratedPerson: "/GetCopayHelp/illustration_frustrated_person_1769706619322.png",
  map: "/GetCopayHelp/illustration_us_map_outline_1769706801568.png",
  
  // Screenshots
  eligibilityResults: "/GetCopayHelp/screenshot_eligibility_results.png",
  homepageHero: "/GetCopayHelp/screenshot_homepage_hero.png",
  patientDetails: "/GetCopayHelp/screenshot_patient_details.png",
  applicationsTable: "/GetCopayHelp/screenshot_applications_table.png",

  // Audio
  music: "/assets/audio/corporate-inspiring-motivational-healthcare-410903.mp3",
  sfxPills: "/assets/audio/popping-pills-83304.mp3",
  sfxPaper: "/assets/audio/paper-rustle-81855.mp3",
  sfxThud: "/assets/audio/hit-windy-thud-399086.mp3",
  sfxSwipe: "/assets/audio/swipe-132084.mp3",
  sfxPing: "/assets/audio/happy-message-ping-351298.mp3",
  sfxShimmer: "/assets/audio/shimmer-glass-81711.mp3",
};
