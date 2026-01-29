import "./index.css";
import { Composition } from "remotion";
import { Main } from "./Video/Main";
import { SoleGoesReel } from "./SoleGoesReel/SoleGoesReel";
// Import fonts to ensure they're loaded
import "./SoleGoesReel/config/fonts";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AntigravityDemo"
        component={Main}
        durationInFrames={360}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SoleGoesReel"
        component={SoleGoesReel}
        durationInFrames={1470}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};
