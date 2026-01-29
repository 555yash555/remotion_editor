#!/bin/bash

# Production Render Script for SoleGoes Reel
# Renders the 18-second vertical kinetic typography video

echo "🎬 Rendering SoleGoes Reel..."
echo "Format: 1080x1920 (9:16 vertical)"
echo "Duration: 18 seconds @ 30 FPS"
echo ""

# Create output directory
mkdir -p out

# Render the composition
npx remotion render SoleGoesReel out/solegoes-reel.mp4 \
  --codec=h264 \
  --crf=18 \
  --verbose

echo ""
echo "✅ Render complete!"
echo "📁 Output: out/solegoes-reel.mp4"
echo ""
echo "File info:"
ls -lh out/solegoes-reel.mp4
