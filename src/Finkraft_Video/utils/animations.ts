import { interpolate, spring, Easing } from 'remotion';

export const fadeOp = (frame: number, fps: number, delay = 0, duration = 0.5) => {
  return interpolate(frame, [delay * fps, (delay + duration) * fps], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

export const slideUp = (frame: number, fps: number, delay = 0, distance = 50) => {
  return interpolate(frame, [delay * fps, (delay + 0.8) * fps], [distance, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

export const springScale = (frame: number, fps: number, delay = 0) => {
  return spring({
    frame: frame - delay * fps,
    fps,
    config: {
      damping: 12,
      stiffness: 100,
    },
  });
};

export const springPop = (frame: number, fps: number, delay = 0) => {
    return spring({
        frame: frame - delay * fps,
        fps,
        config: {
            damping: 10,
            stiffness: 100,
            mass: 0.5
        }
    })
}

export const smoothSpring = (frame: number, fps: number, delay = 0) => {
    return spring({
        frame: frame - delay * fps,
        fps,
        config: {
            damping: 200,
            stiffness: 100
        }
    })
}
