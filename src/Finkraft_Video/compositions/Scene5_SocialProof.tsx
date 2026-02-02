import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { COLORS } from '../utils/constants';
import { GlobalLayout } from '../components/GlobalLayout';
import { Title, Subtitle, Highlight } from '../components/Typography';

export const Scene5_SocialProof: React.FC = () => {
    const frame = useCurrentFrame();

    const scale = interpolate(frame, [0, 60], [1, 1.1]);
    
    return (
        <GlobalLayout dark>
            <AbsoluteFill style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                flexDirection: 'column'
            }}>
               <Subtitle style={{ color: 'rgba(255,255,255,0.7)', uppercase: true, letterSpacing: '0.1em' }}>
                   TRUSTED BY
               </Subtitle>
               
               <Title style={{ 
                   fontSize: 160, 
                   color: 'white',
                   marginTop: 20,
                   transform: `scale(${scale})`
               }}>
                   1250+
               </Title>
               
               <Title style={{ 
                   fontSize: 80, 
                   color: COLORS.Secondary
               }}>
                   Enterprises
               </Title>
            </AbsoluteFill>
        </GlobalLayout>
    );
};
