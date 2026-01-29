import {Series} from 'remotion';
import {Intro} from './Intro';
import {Features} from './Features';
import {Outro} from './Outro';

export const Main: React.FC = () => {
	return (
		<Series>
			<Series.Sequence durationInFrames={90}>
				<Intro />
			</Series.Sequence>
			<Series.Sequence durationInFrames={180}>
				<Features />
			</Series.Sequence>
			<Series.Sequence durationInFrames={90}>
				<Outro />
			</Series.Sequence>
		</Series>
	);
};
