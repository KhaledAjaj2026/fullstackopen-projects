const Average = ({ stats }) => (
	<p>Average: {(stats[0] - stats[2]) / (stats[0] + stats[1] + stats[2])}</p>
);

export default Average;
