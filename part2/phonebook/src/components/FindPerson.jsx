function FindPerson({ find, handleFindInput }) {
	return (
		<form>
			find: <input value={find} onChange={handleFindInput} />
		</form>
	);
}

export default FindPerson;
