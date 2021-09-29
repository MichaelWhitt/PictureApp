import axios from 'axios';

// const searchImages = (term) => {

// }

//creates a customizable copy of axios
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lvYbNbsENXgmZQEXsWuca3bubhvyGS-0xfvjfdGYqoM'
    }
});