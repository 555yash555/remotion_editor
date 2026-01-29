# SoleGoes Reel - Kinetic Typography Video

## Overview

A production-grade **18-second vertical Reel** (1080×1920, 9:16 aspect ratio) optimized for Instagram Reels and TikTok. This kinetic typography video showcases the SoleGoes brand with fast, premium animations and no external assets.

**Specifications:**
- **Format:** 1080×1920 (9:16 vertical)
- **Frame Rate:** 30 FPS
- **Duration:** 18 seconds (540 frames)
- **Content:** Pure kinetic typography - no photos, videos, or external assets
- **Style:** Text + gradients + shape layers + glow + grain

---

## Brand Tokens

All design tokens are centralized in `config/brandTokens.ts`:

### Colors
- **Background:** `#0B0D12` (base), `#07070A` (deep)
- **Text:** `#F5F6FF` (primary), `#A7AEC3` (secondary)
- **Accent:** `#7C6CF6` (indigo), `#5B4EE6` (indigo deep), `#8B7BFF` (glow indigo)
- **Pill Tag:** `#22C55E` (green), `#0F2A1A` (green bg)

### Typography
- **Heading Font:** Sora 800
- **Body Font:** Inter 500

### Animation Language
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` - fast but premium
- **Pop Animation:** Scale 96% → 103% → 100% (8-10 frames)
- **Wipe Reveal:** Left→right mask (10-12 frames)
- **Background:** Slow breathing indigo glow (4-second cycle)
- **Grain:** 7% noise overlay to prevent banding

---

## Scene Breakdown

### Scene 1 (0:00–0:01.2 | 0–36f) - Hook Punch
**TEXT:** `SOLO` (center, huge)
- **Animation:** Blur-pop (instant stop-scroll)
- **Purpose:** Grab attention immediately

### Scene 2 (0:01.2–0:02.2 | 36–66f) - Contradiction
**TEXT:** `BUT` (small, above "SOLO")
- **Animation:** Slide in from left
- **Purpose:** Create intrigue

### Scene 3 (0:02.2–0:03.6 | 66–108f) - Brand Payoff
**TEXT:** `NEVER` (white) + `ALONE.` (indigo with glow)
- **Animation:** Wipe + pop with glow pulse
- **Purpose:** Deliver brand promise

### Scene 4 (0:03.6–0:05.0 | 108–150f) - What It Is
**TEXT:** `THE SOLO TRAVEL HUB` + `FOR GEN Z` (indigo)
- **Animation:** Staggered fade-in
- **Purpose:** Product introduction

### Scene 5 (0:05.0–0:06.4 | 150–192f) - Feature 1
**TEXT:** `VERIFIED TRIPS.` + check icon
- **Animation:** Slide + icon pop
- **Purpose:** Trust signal

### Scene 6 (0:06.4–0:07.8 | 192–234f) - Feature 2
**TEXT:** `AI MATCHES YOUR VIBE.`
- **Animation:** Wipe + pop ("VIBE" in indigo)
- **Purpose:** Personalization value prop

### Scene 7 (0:07.8–0:09.4 | 234–282f) - Feature 3
**TEXT:** 
- `PAY ONCE.` (white)
- `SECURE ESCROW.` (secondary)
- `GET PAID ON TIME.` (indigo)
- **Animation:** Three quick pops
- **Purpose:** Payment security

### Scene 8 (0:09.4–0:11.4 | 282–342f) - Agency Target
**TEXT:** `FOR AGENCIES` pill + `BOOST REACH.` + `FILL GROUPS FASTER.`
- **Animation:** Pill fade/scale, text slam, subtitle slide
- **Purpose:** B2B targeting

### Scene 9 (0:11.4–0:13.0 | 342–390f) - Social Proof
**TEXT:** `GEN Z SOLO TRAVEL IS BOOMING.`
- **Animation:** Letter spacing tight→normal
- **Purpose:** Market validation

### Scene 10 (0:13.0–0:15.2 | 390–456f) - Scarcity
**TEXT:** `FIRST 50 AGENCIES.` + benefits
- **Animation:** Pop + wipe
- **Purpose:** FOMO trigger

### Scene 11 (0:15.2–0:18.0 | 456–540f) - CTA
**TEXT:** `SoleGoes` logo + `SOLO, NOT ALONE.` + `JOIN WAITLIST` + `solegoes.in`
- **Animation:** Logo fade, button pulse, URL typewriter
- **Purpose:** Conversion

---

## Project Structure

```
SoleGoesReel/
├── SoleGoesReel.tsx          # Main composition
├── config/
│   ├── brandTokens.ts        # Design system tokens
│   └── sceneTimings.ts       # Frame-perfect scene timings
├── components/
│   ├── BackgroundGlow.tsx    # Breathing indigo background
│   ├── GrainOverlay.tsx      # 7% noise texture
│   └── KineticText.tsx       # Reusable text animation component
└── scenes/
    ├── Scene1HookPunch.tsx
    ├── Scene2Contradiction.tsx
    ├── Scene3BrandPayoff.tsx
    ├── Scene4WhatItIs.tsx
    ├── Scene5FeatureBurst1.tsx
    ├── Scene6FeatureBurst2.tsx
    ├── Scene7PaymentsBurst.tsx
    ├── Scene8AgencyCallout.tsx
    ├── Scene9SocialProof.tsx
    ├── Scene10Scarcity.tsx
    └── Scene11CTAEndCard.tsx
```

---

## Technical Implementation

### Remotion Best Practices Applied

✅ **All animations use `useCurrentFrame()`** - No CSS transitions
✅ **Frame-based timing** - Write in seconds × FPS
✅ **Premounting** - All sequences premount for smooth playback
✅ **Custom easing** - Bezier curves for premium feel
✅ **Reusable components** - DRY principle with `KineticText`
✅ **Type-safe** - Full TypeScript implementation
✅ **Performance** - Optimized interpolations and extrapolation clamping

### Key Components

#### `KineticText`
Reusable text animation component supporting:
- **5 animation modes:** pop, blurPop, wipe, slideIn, fadeIn
- **Configurable typography:** font family, size, weight, color
- **Optional glow effect**
- **Delay support** for sequencing
- **Custom easing** with bezier curves

#### `BackgroundGlow`
- Slow breathing indigo radial gradient
- 4-second oscillation cycle
- Intensity: 15% ↔ 35%
- Scale: 100% ↔ 110%

#### `GrainOverlay`
- Procedurally generated noise pattern
- 7% opacity with overlay blend mode
- Prevents color banding in gradients

---

## Layout Safe Zones

To ensure text is visible on Instagram Reels:
- **Top safe zone:** 288px (15% from top)
- **Bottom safe zone:** 288px (15% from bottom)
- **Content area:** Center 70% of height (1344px)

All text is positioned within these safe zones to avoid UI overlap.

---

## Audio Notes

This video is designed to work with:
- **Genre:** Upbeat house/future-pop
- **BPM:** 120-130
- **Cuts:** On kick/snare hits
- **No voiceover** - Pure kinetic typography

Audio should be added separately in post-production or during final render.

---

## Rendering

### Development Preview
```bash
npm run dev
```

### Production Render
```bash
npx remotion render SoleGoesReel out/solegoes-reel.mp4
```

### Recommended Export Settings
- **Codec:** H.264
- **Quality:** High (CRF 18)
- **Audio:** 192kbps AAC (if added)
- **File size target:** < 15MB for Instagram

---

## Customization

### CTA Variants

The spec mentions two possible CTAs:

1. **Travelers:** "Join Waitlist" (currently implemented)
2. **Agencies:** "Apply Launch Partner"

To switch to the agency variant, modify `Scene11CTAEndCard.tsx`:

```tsx
// Change button text from:
JOIN WAITLIST
// To:
APPLY LAUNCH PARTNER
```

### 12-Second Ultra-Fast Version

For a more "poppy" version, remove Scenes 8-9:
- Keep: Scenes 1-7 (features)
- Jump to: Scene 10 (scarcity)
- End with: Scene 11 (CTA)

---

## Brand Consistency

This video matches the SoleGoes website design system:
- Same color palette
- Same typography (Sora + Inter)
- Same animation language
- Consistent indigo glow aesthetic

---

## Production Quality Checklist

✅ Frame-perfect timings (no timing drift)
✅ Custom premium easing curves
✅ Grain overlay for texture
✅ Breathing background animation
✅ Glow effects on key elements
✅ Safe zones for social platforms
✅ Reusable component architecture
✅ TypeScript type safety
✅ No external asset dependencies
✅ Optimized for 30 FPS rendering

---

**Created:** January 2026
**Format:** Remotion 4.x + TypeScript + React
**License:** SoleGoes Brand Assets
