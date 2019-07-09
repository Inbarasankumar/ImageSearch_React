import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    params:{
        client_id:'c02eb26e18b659c5edec9a1bc62425c64188ba7b59e05a85257a5beeb40b71c1'
     }
});