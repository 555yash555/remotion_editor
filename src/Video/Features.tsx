import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {AbsoluteFill, Sequence} from 'remotion';

const FeatureItem: React.FC<{text: string; delay: number}> = ({text, delay}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 200,
		},
	});

	const translateY = interpolate(opacity, [0, 1], [30, 0]);

	return (
		<div
			style={{
				opacity,
				transform: `translateY(${translateY}px)`,
				fontSize: 50,
				fontFamily: 'Inter, sans-serif',
				fontWeight: 600,
				color: '#0984e3',
				marginBottom: 20,
			}}
		>
			{text}
		</div>
	);
};

export const Features: React.FC = () => {
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
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<FeatureItem text="Advanced Agentic Coding" delay={0} />
				<FeatureItem text="Smart Artifacts" delay={30} />
				<FeatureItem text="Seamless Workflow" delay={60} />
			</div>
		</AbsoluteFill>
	);
};
