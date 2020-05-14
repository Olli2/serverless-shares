import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchShares = () => {
    return axios.get(`${apiUrl}/shares/HEL`)
}