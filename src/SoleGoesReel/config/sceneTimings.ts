export const SCENE_TIMINGS = {
  // Intro
  scene1: { start: 0, duration: 60 },
  scene2: { start: 60, duration: 75 }, // Increased from 45 to 75 (+30) for readability
  scene3: { start: 135, duration: 90 }, // +30
  scene3a: { start: 225, duration: 90 }, // +30

  // Traveler Section
  transTraveler: { start: 315, duration: 60 }, // +30
  scene4: { start: 375, duration: 75 }, // +30
  scene6: { start: 450, duration: 75 }, // +30
  scene5: { start: 525, duration: 75 }, // +30
  scene7: { start: 600, duration: 75 }, // +30

  // Agency Section
  transAgency: { start: 675, duration: 60 }, // +30
  
  // Agency Features
  sceneAgencyManage: { start: 735, duration: 75 }, // +30
  sceneAgencyLogistics: { start: 810, duration: 75 }, // +30
  sceneAgencyVibe: { start: 885, duration: 75 }, // +30
  sceneAgencyPayments: { start: 960, duration: 75 }, // +30

  // Scene 8: Go Viral? Maybe.
  scene8: { start: 1035, duration: 105 }, // +30
  
  // Scene 10: Easy Verif
  scene10: { start: 1140, duration: 105 }, // +30
  
  // Scene 9: Grow Faster
  scene9: { start: 1245, duration: 75 }, // +30
  
  // New: Launching Soon
  sceneLaunchingSoon: { start: 1320, duration: 60 }, // +30
  
  // Scene 11: CTA
  scene11: { start: 1380, duration: 120 }, // +30
} as const;

// Total duration
export const TOTAL_DURATION = 1500; // +30 frames
export const FPS = 30;
