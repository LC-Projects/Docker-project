import axios from 'axios';

const apiRequest = async (endpoint, method, data = null) => {
    try {
        const response = await axios({
            method: method,
            url: `http://localhost:3300/api/${endpoint}`,
            data: data? data : null,
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export { apiRequest };