import DeletePerson from './DeletePerson';

function RenderPersons({ persons, find, setPersons }) {
	const filteredPersons = find
		? persons.filter((person) =>
				person.name.toLowerCase().includes(find.toLowerCase())
		  )
		: persons;

	return filteredPersons.map((person) => (
		<div key={person.id}>
			{person.name} {person.number}{' '}
			<DeletePerson person={person} persons={persons} setPersons={setPersons} />
		</div>
	));
}

export default RenderPersons;
