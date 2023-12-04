import Total from './stats/Total';
import Average from './stats/Average';
import Positivity from './stats/Positivity';
import GeneralStats from './stats/GeneralStats';

const Stats = ({ stats }) => {
	if (!stats[0] && !stats[1] && !stats[2]) {
		return <h3>No feedback given</h3>;
	}
	return (
		<>
			<h1>Statistics</h1>
			<GeneralStats stats={stats} />
			<Total stats={stats} />
			<Average stats={stats} />
			<Positivity stats={stats} />
		</>
	);
};

export default Stats;
