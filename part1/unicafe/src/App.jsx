import { useState } from 'react';
import Feedback from './components/Feedback';
import Stats from './components/Stats';

const App = () => {
	const [good, setGood] = useState(0);
	const [bad, setBad] = useState(0);
	const [neutral, setNeutral] = useState(0);

	const handleGood = () => setGood(good + 1);
	const handleBad = () => setBad(bad + 1);
	const handleNeutral = () => setNeutral(neutral + 1);

	return (
		<>
			<Feedback actions={[handleGood, handleNeutral, handleBad]} />
			<Stats stats={[good, neutral, bad]} />
		</>
	);
};

export default App;
