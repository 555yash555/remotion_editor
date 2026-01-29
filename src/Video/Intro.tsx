import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {AbsoluteFill} from 'remotion';

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const opacity = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					fontSize: 80,
					fontWeight: 'bold',
					fontFamily: 'Inter, sans-serif',
					transform: `scale(${scale})`,
					opacity,
					color: '#2d3436',
				}}
			>
				Antigravity
			</div>
		</AbsoluteFill>
	);
};
