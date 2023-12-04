const GeneralStats = ({ stats }) => {
	return (
		<>
			<p>Good: {stats[0]}</p>
			<p>Neutral: {stats[1]}</p>
			<p>Bad: {stats[2]}</p>
		</>
	);
};

export default GeneralStats;
