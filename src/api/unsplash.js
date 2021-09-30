import axios from 'axios';

//creates a customizable copy of axios
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lvYbNbsENXgmZQEXsWuca3bubhvyGS-0xfvjfdGYqoM'
    }
});