import {useCurrentFrame} from 'remotion';
import {AbsoluteFill} from 'remotion';

export const Outro: React.FC = () => {
	const frame = useCurrentFrame();

	const opacity = Math.min(1, frame / 30);
    const scale = 1 + Math.sin(frame / 10) * 0.05;

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#2d3436',
			}}
		>
			<div
				style={{
					fontSize: 60,
					fontWeight: 'bold',
					fontFamily: 'Inter, sans-serif',
					color: 'white',
                    transform: `scale(${scale})`,
                    opacity: opacity
				}}
			>
				Your AI Pair Programmer
			</div>
		</AbsoluteFill>
	);
};
