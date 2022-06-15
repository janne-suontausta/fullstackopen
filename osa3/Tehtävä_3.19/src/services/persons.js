import axios from 'axios';
const baseUrl = 'https://damp-savannah-79405.herokuapp.com/api/people';
//const baseUrl = 'http://localhost:3001/api/people';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const deletePerson = id => {
  const url = `${baseUrl}/${id}`;
  return axios.delete(url);
}

const update = (id, person) => {
  const url = `${baseUrl}/${id}`;
  console.log('url', url)
  const request = axios.put(url, person)
  return request.then(response => response.data);
}

export default { 
    getAll,
    create,
    update,
    deletePerson
  }