import axios from 'axios';



const baseURL = `http://localhost:3000/`;


const fetchData = () => {

  return axios.get(`${baseURL}db.json`)
         .then(res => res.data)

}


export default fetchData;