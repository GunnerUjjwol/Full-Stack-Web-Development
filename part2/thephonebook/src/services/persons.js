import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = newPerson => {
    return axios.post(baseUrl,newPerson).then(response => response.data)
}

const deletePerson = personIdToDelete => {
    return axios.delete(`${baseUrl}/${personIdToDelete}`).then(response => response.data)
}

const update = (personId, person) => {
    return axios.put(`${baseUrl}/${personId}`,person).then(response => response.data)
}

export default {getAll, create, deletePerson, update}