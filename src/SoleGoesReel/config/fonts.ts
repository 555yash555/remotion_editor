/**
 * Font Loading Configuration
 * Loads Sora (heading) and Inter (body) from Google Fonts
 */

import {loadFont as loadOutfit} from '@remotion/google-fonts/Outfit';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';

// Load Outfit (new heading font - sharper, premium) - weights 700, 800
const {fontFamily: outfitFontFamily} = loadOutfit('normal', {
  weights: ['700', '800'],
  subsets: ['latin'],
});

// Load Inter (body font) - weights 500, 700
const {fontFamily: interFontFamily} = loadInter('normal', {
  weights: ['500', '700'],
  subsets: ['latin'],
});

export const fonts = {
  outfit: outfitFontFamily,
  inter: interFontFamily,
};
