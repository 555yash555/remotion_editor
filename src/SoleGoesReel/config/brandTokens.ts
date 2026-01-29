/**
 * SoleGoes Brand Design Tokens
 * Production-grade brand configuration for kinetic typography Reel
 */

export const BRAND_COLORS = {
  // Background
  bg: {
    base: '#0B0D12',
    deep: '#07070A',
  },
  // Text
  text: {
    primary: '#F5F6FF',
    secondary: '#A7AEC3',
  },
  // Accent
  accent: {
    indigo: '#7C6CF6',
    indigoDeep: '#5B4EE6',
    glowIndigo: '#8B7BFF',
    // New gradient from website "Continue" button
    primaryGradient: 'linear-gradient(90deg, #7C6CF6 0%, #5B4EE6 100%)',
    secondaryGradient: 'linear-gradient(90deg, #3B3B4F 0%, #1F1F2E 100%)',
  },
  // Pill tag
  pill: {
    green: '#22C55E',
    greenBg: '#0F2A1A',
    orange: '#F97316', // Added for Scene 2
    purple: '#7C6CF6', // Launching Soon tag
    purpleBg: 'rgba(124, 108, 246, 0.15)',
  },
} as const;

import {fonts} from './fonts';

export const BRAND_FONTS = {
  heading: fonts.outfit,
  body: fonts.inter,
} as const;

export const BRAND_FONT_WEIGHTS = {
  heading: 800,
  body: 500,
} as const;

// Custom easing - fast but premium
export const PREMIUM_EASING = [0.22, 1, 0.36, 1] as const;

// Animation timings (in frames at 30fps)
// Animation timings (in frames at 30fps) - Slowed down for smoother appearance
export const ANIMATION_TIMINGS = {
  // Pop animation: scale 96% → 103% → 100% (was 10 -> now 25)
  popDuration: 25,
  popPhase1: 10, // Slower rise
  popPhase2: 15, // Slower settle
  
  // Type wipes: mask reveal left→right (was 12 -> now 24)
  wipeReveal: 24,
  
  // Slide animations (was 8 -> now 18)
  slideIn: 18,
  
  // Fade animations (was 6 -> now 15)
  fadeIn: 15,
  blurFade: 8,
  
  // Stagger (was 4 -> now 8)
  lineStagger: 8,
} as const;

// Safe zones for Instagram Reels
export const LAYOUT_CONFIG = {
  // Video dimensions (9:16 vertical)
  width: 1080,
  height: 1920,
  
  // Keep text in center 70% height (avoid IG UI top + captions bottom)
  safeZoneTop: 1920 * 0.15, // 288px
  safeZoneBottom: 1920 * 0.15, // 288px
  
  // Centering
  centerY: 1920 / 2, // 960px
  centerX: 1080 / 2, // 540px
} as const;

// Noise/grain overlay
export const GRAIN_OPACITY = 0.03; // 3% noise for cleaner, sharper look
