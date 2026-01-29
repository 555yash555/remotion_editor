/**
 * Kinetic Text Component
 * Reusable component for kinetic typography with various animation modes
 */

import React from 'react';
import {useCurrentFrame, interpolate, Easing} from 'remotion';
import {BRAND_COLORS, BRAND_FONTS, BRAND_FONT_WEIGHTS, PREMIUM_EASING, ANIMATION_TIMINGS} from '../config/brandTokens';
// Ensure fonts are loaded
import '../config/fonts';

type AnimationType = 'pop' | 'blurPop' | 'wipe' | 'slideIn' | 'fadeIn' | 'scaleUp' | 'trackingIn';

interface KineticTextProps {
  text: string;
  animation: AnimationType;
  delay?: number;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: 'heading' | 'body';
  textAlign?: 'left' | 'center' | 'right';
  glow?: boolean;
  letterSpacing?: number;
  customDuration?: number; // Optional override for animation speed
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  animation,
  delay = 0,
  color = BRAND_COLORS.text.primary,
  fontSize = 120,
  fontWeight,
  fontFamily = 'heading',
  textAlign = 'center',
  glow = false,
  letterSpacing = 0,
  customDuration,
}) => {
  const frame = useCurrentFrame();
  
  const localFrame = frame - delay;
  
  // Default font weights
  const actualFontWeight = fontWeight ?? (
    fontFamily === 'heading' ? BRAND_FONT_WEIGHTS.heading : BRAND_FONT_WEIGHTS.body
  );
  
  const actualFontFamily = fontFamily === 'heading' ? BRAND_FONTS.heading : BRAND_FONTS.body;

  // Animation: POP (scale 96% → 103% → 100%)
  const popAnimation = () => {
    if (localFrame < 0) {
      return {
        opacity: 0,
        transform: 'scale(0.96)',
        filter: 'blur(0px)',
      };
    }
    
    // Use custom duration for pop total if provided (scaling phases proportionally)
    const defaultTotal = ANIMATION_TIMINGS.popDuration;
    const effectiveTotal = customDuration ?? defaultTotal;
    const ratio = effectiveTotal / defaultTotal;
    
    const popPhase1 = ANIMATION_TIMINGS.popPhase1 * ratio;
    
    // Phase 1: 96% → 103%
    if (localFrame < popPhase1) {
      const scale = interpolate(localFrame, [0, popPhase1], [0.96, 1.03], {
        easing: Easing.bezier(...PREMIUM_EASING),
      });
      return {
        opacity: 1,
        transform: `scale(${scale})`,
        filter: 'blur(0px)',
      };
    }
    
    // Phase 2: 103% → 100%
    const scale = interpolate(localFrame, [popPhase1, effectiveTotal], [1.03, 1], {
      easing: Easing.bezier(...PREMIUM_EASING),
      extrapolateRight: 'clamp',
    });
    
    return {
      opacity: 1,
      transform: `scale(${scale})`,
      filter: 'blur(0px)',
    };
  };

  // Animation: BLUR POP (with initial blur)
  const blurPopAnimation = () => {
    if (localFrame < 0) {
      return {
        opacity: 0,
        transform: 'scale(0.96)',
        filter: 'blur(10px)',
      };
    }
    
    const defaultTotal = ANIMATION_TIMINGS.popDuration;
    const effectiveTotal = customDuration ?? defaultTotal;
    const ratio = effectiveTotal / defaultTotal;
    
    const blurFade = ANIMATION_TIMINGS.blurFade * ratio;
    
    // Blur phase (2-3 frames)
    if (localFrame < blurFade) {
      const blur = interpolate(localFrame, [0, blurFade], [10, 0], {
        easing: Easing.out(Easing.quad),
      });
      const scale = interpolate(localFrame, [0, blurFade], [0.96, 1.03], {
        easing: Easing.bezier(...PREMIUM_EASING),
      });
      return {
        opacity: 1,
        transform: `scale(${scale})`,
        filter: `blur(${blur}px)`,
      };
    }
    
    // Settle phase
    const scale = interpolate(localFrame, [blurFade, effectiveTotal], [1.03, 1], {
      easing: Easing.bezier(...PREMIUM_EASING),
      extrapolateRight: 'clamp',
    });
    
    return {
      opacity: 1,
      transform: `scale(${scale})`,
      filter: 'blur(0px)',
    };
  };

  // Animation: WIPE (left to right mask reveal)
  const wipeAnimation = () => {
    if (localFrame < 0) {
      return {
        opacity: 1,
        clipPath: 'inset(0 100% 0 0)',
        transform: 'scale(1)',
        filter: 'blur(0px)',
      };
    }
    
    const duration = customDuration ?? ANIMATION_TIMINGS.wipeReveal;
    const wipeProgress = interpolate(localFrame, [0, duration], [0, 1], {
      easing: Easing.bezier(...PREMIUM_EASING),
      extrapolateRight: 'clamp',
    });
    
    return {
      opacity: 1,
      clipPath: `inset(0 ${(1 - wipeProgress) * 100}% 0 0)`,
      transform: 'scale(1)',
      filter: 'blur(0px)',
    };
  };

  // Animation: SLIDE IN (from left)
  const slideInAnimation = () => {
    if (localFrame < 0) {
      return {
        opacity: 0,
        transform: 'translateX(-50px)',
        filter: 'blur(0px)',
      };
    }
    
    const duration = customDuration ?? ANIMATION_TIMINGS.slideIn;
    const progress = interpolate(localFrame, [0, duration], [0, 1], {
      easing: Easing.bezier(...PREMIUM_EASING),
      extrapolateRight: 'clamp',
    });
    
    const x = interpolate(progress, [0, 1], [-50, 0]);
    const opacity = interpolate(progress, [0, 1], [0, 1]);
    
    return {
      opacity,
      transform: `translateX(${x}px)`,
      filter: 'blur(0px)',
    };
  };

  // Animation: FADE IN
  const fadeInAnimation = () => {
    if (localFrame < 0) {
      return {
        opacity: 0,
        transform: 'translateY(8px)',
        filter: 'blur(0px)',
      };
    }
    
    const duration = customDuration ?? ANIMATION_TIMINGS.fadeIn;
    const progress = interpolate(localFrame, [0, duration], [0, 1], {
      easing: Easing.bezier(...PREMIUM_EASING),
      extrapolateRight: 'clamp',
    });
    
    const y = interpolate(progress, [0, 1], [8, 0]);
    
    return {
      opacity: progress,
      transform: `translateY(${y}px)`,
      filter: 'blur(0px)',
    };
  };

  // Animation: SCALE UP (Boom effect: 1.5x -> 1x)
  const scaleUpAnimation = () => {
    if (localFrame < 0) {
      return {
        opacity: 0,
        transform: 'scale(1.5)',
        filter: 'blur(10px)',
      };
    }
    
    const duration = customDuration ?? 20;
    const progress = interpolate(localFrame, [0, duration], [0, 1], {
      easing: Easing.bezier(...PREMIUM_EASING),
      extrapolateRight: 'clamp',
    });
    
    const scale = interpolate(progress, [0, 1], [1.5, 1]);
    const blur = interpolate(progress, [0, 0.5], [10, 0], { extrapolateRight: 'clamp' });
    const opacity = interpolate(progress, [0, 0.3], [0, 1], { extrapolateRight: 'clamp' });
    
    return {
      opacity,
      transform: `scale(${scale})`,
      filter: `blur(${blur}px)`,
    };
  };

  // Animation: TRACKING IN (Letter spacing expansion)
  const trackingInAnimation = () => {
    if (localFrame < 0) {
      return {
        opacity: 0,
        letterSpacing: '-10px',
        filter: 'blur(10px)',
      };
    }

    const duration = customDuration ?? 35;
    const progress = interpolate(localFrame, [0, duration], [0, 1], {
      easing: Easing.out(Easing.cubic),
      extrapolateRight: 'clamp',
    });

    const currentSpacing = interpolate(progress, [0, 1], [-10, letterSpacing]);
    const blur = interpolate(progress, [0, 0.5], [10, 0], { extrapolateRight: 'clamp' });
    const opacity = interpolate(progress, [0, 0.3], [0, 1], { extrapolateRight: 'clamp' });

    return {
      opacity,
      letterSpacing: `${currentSpacing}px`,
      filter: `blur(${blur}px)`,
    };
  };

  const getStyle = () => {
    switch (animation) {
      case 'pop': return popAnimation();
      case 'blurPop': return blurPopAnimation();
      case 'wipe': return wipeAnimation();
      case 'slideIn': return slideInAnimation();
      case 'fadeIn': return fadeInAnimation();
      case 'scaleUp': return scaleUpAnimation();
      case 'trackingIn': return trackingInAnimation();
      default: return popAnimation();
    }
  };

  const style = getStyle();

  return (
    <div
      style={{
        color,
        fontSize,
        fontWeight: actualFontWeight,
        fontFamily: actualFontFamily,
        textAlign,
        ...style,
        // Override letterSpacing if not trackingIn, otherwise use animation value
        letterSpacing: animation === 'trackingIn' ? (style as any).letterSpacing : `${letterSpacing}px`,
        lineHeight: 1.2,
        textShadow: glow 
          ? `0 0 15px ${BRAND_COLORS.accent.glowIndigo}60` // Tighter, sharper glow
          : undefined,
      }}
    >
      {text}
    </div>
  );
};
