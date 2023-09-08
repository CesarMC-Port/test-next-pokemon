
import axios from 'axios';


const httpClient = axios.create({
    baseURL: 'https://api-dev.hackinghrlab.io/'
});



export default httpClient;

