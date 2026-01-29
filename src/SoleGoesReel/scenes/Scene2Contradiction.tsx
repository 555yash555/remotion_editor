import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {KineticText} from '../components/KineticText';
import {BRAND_COLORS} from '../config/brandTokens';

export const Scene2Contradiction: React.FC = () => {
  const frame = useCurrentFrame();

  // Cycle logic: Faster switch (0.6s), Hold "FUN" longer
  const showConnection = frame >= 0 && frame < 18;
  const showExperiences = frame >= 18 && frame < 36;
  const showFun = frame >= 36;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#050505',
      }}
    >
      {/* Constant "NEED" */}
      <div style={{marginBottom: 20}}>
        <KineticText
            text="NEED"
            animation="slideIn"
            color={BRAND_COLORS.text.primary}
            fontSize={100}
            fontWeight={800}
            delay={0}
        />
      </div>

      {/* Cycling Answers */}
      <div style={{height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {showConnection && (
            <KineticText
                text="CONNECTION?"
                animation="slideIn"
                color={BRAND_COLORS.accent.indigo}
                fontSize={100}
                fontWeight={800}
                delay={0}
                glow={true}
            />
        )}

        {showExperiences && (
            <KineticText
                text="EXPERIENCES?"
                animation="pop"
                color={BRAND_COLORS.pill.orange}
                fontSize={110}
                fontWeight={900}
                delay={0}
            />
        )}

        {showFun && (
            <KineticText
                text="FUN?"
                animation="scaleUp"
                color={BRAND_COLORS.pill.green}
                fontSize={140}
                fontWeight={900}
                delay={0}
            />
        )}
      </div>
    </AbsoluteFill>
  );
};
