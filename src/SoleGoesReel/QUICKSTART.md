# SoleGoes Reel - Quick Start Guide

## 🚀 Getting Started

### 1. Preview in Remotion Studio
```bash
npm run dev
```
Then select **"SoleGoesReel"** from the composition dropdown.

### 2. Render Production Video
```bash
cd src/SoleGoesReel
./render.sh
```

Output: `out/solegoes-reel.mp4` (1080x1920, 30 FPS, 18 seconds)

---

## 📐 Video Specifications

| Property | Value |
|----------|-------|
| **Dimensions** | 1080 × 1920 (9:16 vertical) |
| **Frame Rate** | 30 FPS |
| **Duration** | 18 seconds (540 frames) |
| **Format** | Pure kinetic typography |
| **File Size** | ~10-15 MB (estimate) |

---

## 🎨 Scene Timeline

| Scene | Time | Frames | Content |
|-------|------|--------|---------|
| 1 | 0:00–0:01.2 | 0–36 | **SOLO** (hook) |
| 2 | 0:01.2–0:02.2 | 36–66 | **BUT** (contradiction) |
| 3 | 0:02.2–0:03.6 | 66–108 | **NEVER ALONE** (payoff) |
| 4 | 0:03.6–0:05.0 | 108–150 | Product intro |
| 5 | 0:05.0–0:06.4 | 150–192 | Verified trips |
| 6 | 0:06.4–0:07.8 | 192–234 | AI matching |
| 7 | 0:07.8–0:09.4 | 234–282 | Payment features |
| 8 | 0:09.4–0:11.4 | 282–342 | Agency callout |
| 9 | 0:11.4–0:13.0 | 342–390 | Social proof |
| 10 | 0:13.0–0:15.2 | 390–456 | Scarcity |
| 11 | 0:15.2–0:18.0 | 456–540 | CTA end card |

---

## 🛠️ Customization

### Change CTA Target

Edit `scenes/Scene11CTAEndCard.tsx`:

```tsx
// For travelers (current):
JOIN WAITLIST

// For agencies:
APPLY LAUNCH PARTNER
```

### Adjust Animation Timings

Edit `config/brandTokens.ts`:

```tsx
export const ANIMATION_TIMINGS = {
  popDuration: 10,      // Pop animation length
  wipeReveal: 12,       // Wipe reveal speed
  slideIn: 8,           // Slide-in speed
  // ... etc
};
```

### Change Colors

Edit `config/brandTokens.ts`:

```tsx
export const BRAND_COLORS = {
  bg: { base: '#0B0D12', deep: '#07070A' },
  text: { primary: '#F5F6FF', secondary: '#A7AEC3' },
  accent: { indigo: '#7C6CF6', ... },
  // ... etc
};
```

---

## 📁 Project Structure

```
SoleGoesReel/
├── SoleGoesReel.tsx              # Main composition
├── index.ts                      # Exports
├── render.sh                     # Render script
├── README.md                     # Full documentation
├── QUICKSTART.md                 # This file
├── config/
│   ├── brandTokens.ts           # Design system
│   ├── sceneTimings.ts          # Frame timings
│   └── fonts.ts                 # Google Fonts
├── components/
│   ├── BackgroundGlow.tsx       # Breathing background
│   ├── GrainOverlay.tsx         # Noise texture
│   └── KineticText.tsx          # Text animations
└── scenes/
    ├── Scene1HookPunch.tsx      # "SOLO"
    ├── Scene2Contradiction.tsx  # "BUT"
    ├── Scene3BrandPayoff.tsx    # "NEVER ALONE"
    ├── Scene4WhatItIs.tsx       # Product intro
    ├── Scene5FeatureBurst1.tsx  # Verified trips
    ├── Scene6FeatureBurst2.tsx  # AI matching
    ├── Scene7PaymentsBurst.tsx  # Payments
    ├── Scene8AgencyCallout.tsx  # B2B target
    ├── Scene9SocialProof.tsx    # Market validation
    ├── Scene10Scarcity.tsx      # FOMO
    └── Scene11CTAEndCard.tsx    # Conversion
```

---

## 🎯 Platform Guidelines

### Instagram Reels
- ✅ Aspect ratio: 9:16
- ✅ Max duration: 90s (we're 18s)
- ✅ Recommended: < 15 MB
- ✅ Safe zones: Top/bottom 15% clear

### TikTok
- ✅ Aspect ratio: 9:16
- ✅ Max duration: 10 min (we're 18s)
- ✅ Recommended: < 287 MB
- ✅ Safe zones: Implemented

---

## 💡 Pro Tips

1. **Preview individual scenes**: In Remotion Studio, you can isolate scenes by commenting out others in `SoleGoesReel.tsx`

2. **Adjust safe zones**: Modify `LAYOUT_CONFIG` in `brandTokens.ts` if needed

3. **Add audio**: Use the `<Audio>` component from Remotion in the main composition

4. **Export frames**: Use `npx remotion still SoleGoesReel out/frame.png --frame=270` to export specific frames

5. **Performance**: The grain overlay is generated once and cached. If you notice slowness, reduce grain opacity in `brandTokens.ts`

---

## 🐛 Troubleshooting

### Fonts not loading
- Ensure `@remotion/google-fonts` is installed: `npm install @remotion/google-fonts`
- Check that `config/fonts.ts` is imported in `KineticText.tsx`

### Rendering fails
- Check Node.js version: `node --version` (requires 18+)
- Clear cache: `rm -rf node_modules/.cache`
- Restart dev server

### Video looks janky
- Ensure you're rendering at 30 FPS (check composition config)
- Verify all animations use `useCurrentFrame()` (they do)
- Check system resources during render

---

## 📧 Export Settings

For best quality on social platforms:

```bash
npx remotion render SoleGoesReel out/reel.mp4 \
  --codec=h264 \
  --crf=18 \
  --pixel-format=yuv420p \
  --audio-codec=aac \
  --audio-bitrate=192k
```

---

**Created:** January 2026  
**Format:** Remotion 4.x Production  
**License:** SoleGoes Brand
