import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseURL);

const postPerson = (newObject) => axios.post(baseURL, newObject);

const updatePerson = (newObject) => axios.put(`${baseURL}/${id}`, newObject);

const deletePerson = (id) => axios.delete(`${baseURL}/${id}`);

export default { getAll, postPerson, updatePerson, deletePerson };
