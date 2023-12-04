const Positivity = ({ stats }) => (
	<p>Positivity: {stats[0] / (stats[0] + stats[1] + stats[2])} %</p>
);

export default Positivity;
