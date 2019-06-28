import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 264f075ed48990a818fffb3021a4e9da7c57c2df2763a28542d45646cfccf643'
    }

});