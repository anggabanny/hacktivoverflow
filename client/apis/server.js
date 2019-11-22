import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000'
    // baseURL: 'http://overflow.anggabanny.online' //DEPLOY
});

export default instance