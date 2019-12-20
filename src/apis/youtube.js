import axios from 'axios';

const KEY = 'AIzaSyDZDC6eHjF5fNkfZ22EEJOuY5qSIan8ZOk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});